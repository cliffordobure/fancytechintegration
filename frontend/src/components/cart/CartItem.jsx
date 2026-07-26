// components/cart/CartItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import { getImageUrl } from "../../utils/constants";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  // Helper to strip HTML tags and trim
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "").trim();
  };

  return (
    <div className="relative">
      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            {item.images && item.images.length > 0 ? (
              <>
                <img
                  src={getImageUrl(item.images[0])}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-grow">
            <Link
              to={`/products/${item.slug}`}
              className="text-xl font-semibold text-white mb-2 inline-block"
            >
              {item.name}
            </Link>

            {/* Description – stripped of HTML tags */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {stripHtml(item.description)}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Quantity:</span>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-lg">
                  <button
                    onClick={() =>
                      onQuantityChange(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    className={`px-3 py-2 rounded-l-lg ${
                      item.quantity <= 1
                        ? "text-gray-600 cursor-not-allowed"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Minus size={16} />
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      onQuantityChange(item._id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 text-center bg-transparent border-0 text-white focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    onClick={() =>
                      onQuantityChange(item._id, item.quantity + 1)
                    }
                    className="px-3 py-2 rounded-r-lg text-white hover:bg-white/10"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-400">
                  $ {(item.price * item.quantity).toLocaleString()}
                </p>
                {item.quantity > 1 && (
                  <p className="text-sm text-gray-500">
                    $ {item.price.toLocaleString()} each
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item._id, item.name)}
            className="absolute top-4 right-4 md:relative md:top-auto md:right-auto text-red-400"
            title="Remove from cart"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
