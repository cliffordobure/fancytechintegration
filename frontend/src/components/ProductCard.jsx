import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      dispatch(addToCart({ product, quantity: 1 }));
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error('Product is out of stock');
    }
  };

  const categoryLabels = {
    starlink: 'Starlink Kit',
    networking: 'Networking',
    laptops: 'Laptop',
    phones: 'Phone',
    software: 'Software',
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <Link to={`/products/${product.slug}`} className="flex-grow">
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {product.images && product.images.length > 0 ? (
            <img
              src={`http://localhost:5000${product.images[0]}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          {product.featured && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        <div className="p-4">
          <span className="text-xs text-orange-500 font-medium uppercase">
            {categoryLabels[product.category] || product.category}
          </span>
          <h3 className="text-lg font-semibold mt-1 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-orange-500">
                KES {product.price?.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  KES {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {!product.inStock && (
              <span className="text-xs text-red-600 font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 rounded-lg font-medium text-white transition-colors ${
            product.inStock
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
