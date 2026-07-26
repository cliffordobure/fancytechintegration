// components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { getImageUrl } from "../utils/constants";
import toast from "react-hot-toast";
import { ShoppingCart, Star, Zap } from "lucide-react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      dispatch(addToCart({ product, quantity: 1 }));
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error("Product is out of stock");
    }
  };

  const categoryLabels = {
    starlink: "Starlink Kit",
    networking: "Networking",
    laptop: "Laptop",
    phone: "Phone",
    software: "Software",
    accesspoint: "Access Point",
    cctv: "CCTV System",
    router: "Router",
  };

  // Helper to strip HTML tags and trim
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "").trim();
  };

  return (
    <div className="relative h-full">
      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
        {/* Image container */}
        <Link to={`/products/${product.slug}`} className="block">
          <div className="relative h-56 overflow-hidden bg-gray-900">
            {product.images && product.images.length > 0 ? (
              <img
                src={getImageUrl(product.images[0])}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

            {/* Featured badge */}
            {product.featured && (
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  <Star size={12} />
                  Featured
                </span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {categoryLabels[product.category] || product.category}
            </div>

            {/* Stock status badge */}
            {!product.inStock && (
              <div className="absolute bottom-4 left-4 right-4">
                <span className="block bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full text-center">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Product details */}
        <div className="p-5">
          <Link to={`/products/${product.slug}`} className="block">
            <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Description – stripped of HTML tags */}
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {stripHtml(product.description)}
          </p>

          {/* Price section */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-orange-400">
                ${product.price?.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="text-orange-400/50">
              <Zap size={20} />
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 ${
              product.inStock
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            <ShoppingCart size={18} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>

        {/* Decorative icon */}
        <div className="absolute bottom-2 right-2 text-orange-500/10">
          <Star size={32} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
