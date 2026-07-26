// components/checkout/OrderSummary.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Truck, Shield } from "lucide-react";

const OrderSummary = ({ cartItems, subtotal, shipping, total }) => {
  return (
    <div className="sticky top-24">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h2 className="text-2xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">
            Order Summary
          </span>
        </h2>

        <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                {item.images && item.images[0] && (
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-gray-400">
                  Qty: {item.quantity} × ${item.price}
                </p>
              </div>
              <span className="text-sm font-semibold text-orange-400">
                ${(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 space-y-2">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Shipping</span>
            <span className="text-green-400">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="border-t border-white/10 pt-2 mt-2">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-white">Total</span>
              <span className="text-orange-400">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Truck size={14} className="text-orange-400" />
            <span>Free shipping on orders over $50,000</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Shield size={14} className="text-orange-400" />
            <span>Secure checkout guaranteed</span>
          </div>
        </div>

        <Link
          to="/cart"
          className="block mt-4 text-center text-sm text-orange-400 hover:underline"
        >
          ← Return to Cart
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
