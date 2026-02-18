import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../store/slices/orderSlice';
import { getImageUrl } from '../utils/constants';
import SEO from '../components/SEO';

const OrderConfirmationPage = () => {
  const { orderNumber } = useParams();
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderNumber) {
      dispatch(fetchOrder(orderNumber));
    }
  }, [dispatch, orderNumber]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        <p className="mt-4 text-gray-600">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find an order with that number.
        </p>
        <Link to="/products" className="btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <SEO
        title={`Order Confirmation - ${order.orderNumber}`}
        description={`Order confirmation for ${order.orderNumber} at Fancy Tech Integration Kenya`}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Success Message */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-green-700">
              Thank you for your order. We've received your order and will begin
              processing it right away.
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Order Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Number & Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Order Details</h2>
                  <p className="text-gray-600">Order Number: {order.orderNumber}</p>
                  <p className="text-sm text-gray-500">
                    Placed on {formatDate(order.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      order.orderStatus
                    )}`}
                  >
                    {order.orderStatus.charAt(0).toUpperCase() +
                      order.orderStatus.slice(1)}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">Order Status</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                    {item.image && (
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-orange-500 font-semibold mt-1">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="text-gray-700">
                <p className="font-semibold">{order.customer.name}</p>
                <p>{order.customer.address.street}</p>
                <p>
                  {order.customer.address.city}, {order.customer.address.county}
                </p>
                {order.customer.address.postalCode && (
                  <p>{order.customer.address.postalCode}</p>
                )}
                <p>{order.customer.address.country}</p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>KES {order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {order.shipping === 0
                      ? 'Free'
                      : `KES ${order.shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">
                    KES {order.total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Payment Info */}
              <div className="border-t pt-4 space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                  <p className="font-semibold capitalize">
                    {order.paymentMethod.replace('_', ' ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getPaymentStatusColor(
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus.charAt(0).toUpperCase() +
                      order.paymentStatus.slice(1)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Shipping Method</p>
                  <p className="font-semibold capitalize">
                    {order.shippingMethod === 'standard'
                      ? 'Standard Delivery'
                      : order.shippingMethod === 'express'
                      ? 'Express Delivery'
                      : 'Pickup from Store'}
                  </p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold mb-3">What's Next?</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>
                      You'll receive an email confirmation shortly
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>
                      {order.paymentMethod === 'mpesa'
                        ? 'Complete M-Pesa payment when prompted'
                        : order.paymentMethod === 'cash_on_delivery'
                        ? 'Pay cash when your order is delivered'
                        : 'Complete payment via bank transfer'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">3.</span>
                    <span>We'll notify you when your order ships</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 space-y-3">
                <Link to="/products" className="block w-full btn-primary text-center">
                  Continue Shopping
                </Link>
                <Link
                  to="/contact"
                  className="block w-full btn-secondary text-center"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
