import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from '../store/slices/cartSlice';
import { createOrder } from '../store/slices/orderSlice';
import { getImageUrl } from '../utils/constants';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { loading } = useSelector((state) => state.order);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      county: '',
      postalCode: '',
    },
    paymentMethod: 'mpesa',
    shippingMethod: 'standard',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const shippingRates = {
    standard: 500,
    express: 1500,
    pickup: 0,
  };

  const shipping = shippingRates[formData.shippingMethod] || 0;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.address.street.trim())
      newErrors['address.street'] = 'Street address is required';
    if (!formData.address.city.trim())
      newErrors['address.city'] = 'City is required';
    if (!formData.address.county.trim())
      newErrors['address.county'] = 'County is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      navigate('/cart');
      return;
    }

    try {
      const orderData = {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            ...formData.address,
            country: 'Kenya',
          },
        },
        items: cartItems.map((item) => ({
          product: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.images?.[0] || '',
        })),
        subtotal: cartTotal,
        shipping,
        total,
        paymentMethod: formData.paymentMethod,
        shippingMethod: formData.shippingMethod,
        notes: formData.notes,
      };

      const result = await dispatch(createOrder(orderData)).unwrap();
      
      // Clear cart
      dispatch(clearCart());
      
      // Navigate to order confirmation
      navigate(`/order-confirmation/${result.orderNumber}`);
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error(error || 'Failed to place order. Please try again.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-6">
          Add some products to your cart before checkout
        </p>
        <button
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Checkout"
        description="Complete your order at Fancy Tech Integration Kenya. Secure checkout for all your technology needs."
        keywords={['Checkout', 'Order', 'Payment']}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleChange}
                      className={`input-field ${errors['address.street'] ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors['address.street'] && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors['address.street']}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        className={`input-field ${errors['address.city'] ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors['address.city'] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors['address.city']}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        County *
                      </label>
                      <input
                        type="text"
                        name="address.county"
                        value={formData.address.county}
                        onChange={handleChange}
                        className={`input-field ${errors['address.county'] ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors['address.county'] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors['address.county']}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="address.postalCode"
                      value={formData.address.postalCode}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
                <div className="space-y-3">
                  {Object.entries(shippingRates).map(([method, rate]) => (
                    <label
                      key={method}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.shippingMethod === method
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shippingMethod"
                        value={method}
                        checked={formData.shippingMethod === method}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <div className="flex-grow">
                        <div className="font-semibold capitalize">
                          {method === 'standard'
                            ? 'Standard Delivery'
                            : method === 'express'
                            ? 'Express Delivery'
                            : 'Pickup from Store'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {method === 'standard'
                            ? '5-7 business days'
                            : method === 'express'
                            ? '2-3 business days'
                            : 'Available at our store'}
                        </div>
                      </div>
                      <div className="font-bold text-orange-500">
                        {rate === 0 ? 'Free' : `KES ${rate.toLocaleString()}`}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { value: 'mpesa', label: 'M-Pesa', icon: '📱' },
                    { value: 'bank_transfer', label: 'Bank Transfer', icon: '🏦' },
                    { value: 'cash_on_delivery', label: 'Cash on Delivery', icon: '💵' },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === method.value
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-semibold">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Notes</h2>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="input-field"
                  placeholder="Any special instructions or notes for your order..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-orange-500 hover:bg-orange-600 py-4 text-lg font-semibold disabled:opacity-50"
              >
                {loading ? 'Processing Order...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex gap-3">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={getImageUrl(item.images[0])}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                    )}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-600">
                        Qty: {item.quantity} × KES {item.price.toLocaleString()}
                      </p>
                      <p className="text-sm font-bold text-orange-500">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>KES {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0
                      ? 'Free'
                      : `KES ${shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">
                    KES {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link
                to="/cart"
                className="block w-full text-center btn-secondary mt-4"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
