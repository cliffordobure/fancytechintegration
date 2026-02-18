import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../store/slices/cartSlice';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleRemoveItem = (productId, productName) => {
    dispatch(removeFromCart(productId));
    toast.success('Item removed from cart');
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    dispatch(updateQuantity({ productId, quantity: parseInt(newQuantity) }));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
      toast.success('Cart cleared');
    }
  };

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="View your shopping cart at Fancy Tech Integration Kenya. Review your selected products before checkout."
        keywords={['Cart', 'Shopping Cart', 'Checkout']}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Start shopping to add items to your cart
            </p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={`http://localhost:5000${item.images[0]}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <Link
                      to={`/products/${item.slug}`}
                      className="text-xl font-semibold text-gray-900 hover:text-orange-500 mb-2 block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-700">
                          Quantity:
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity - 1)
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item._id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-16 text-center border-0 focus:ring-0"
                          />
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity + 1)
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-orange-500">
                          KES {(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">
                            KES {item.price.toLocaleString()} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item._id, item.name)}
                    className="text-red-600 hover:text-red-800 self-start md:self-center"
                    title="Remove from cart"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              <button
                onClick={handleClearCart}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Clear Cart
              </button>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>KES {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-500">
                      KES {cartTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full btn-primary mb-4 text-center"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/products"
                  className="block w-full text-center btn-secondary"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
