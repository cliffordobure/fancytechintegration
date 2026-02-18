import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';
import { selectCartItems } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.products);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [dispatch, slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const categoryLabels = {
    starlink: 'Starlink Kit',
    networking: 'Networking Equipment',
    laptops: 'Laptop',
    phones: 'Phone',
    software: 'Software',
  };

  return (
    <>
      <SEO
        title={product.seoTitle || product.name}
        description={product.seoDescription || product.description}
        keywords={product.seoKeywords || []}
        image={product.images?.[0] ? `http://localhost:5000${product.images[0]}` : null}
        url={`${window.location.origin}/products/${product.slug}`}
        type="product"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            {product.images && product.images.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={`http://localhost:5000${product.images[0]}`}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {product.images.slice(1, 5).map((image, index) => (
                      <img
                        key={index}
                        src={`http://localhost:5000${image}`}
                        alt={`${product.name} ${index + 2}`}
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm text-orange-500 font-medium uppercase">
              {categoryLabels[product.category] || product.category}
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-orange-500">
                  KES {product.price?.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    KES {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`px-4 py-2 rounded-lg font-medium ${
                    product.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stockQuantity > 0 && (
                  <span className="text-gray-600">
                    {product.stockQuantity} units available
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  if (product.inStock) {
                    dispatch(addToCart({ product, quantity: 1 }));
                    toast.success(`${product.name} added to cart!`);
                  }
                }}
                className={`w-full py-3 rounded-lg font-medium text-white ${
                  product.inStock
                    ? 'bg-orange-500 hover:bg-orange-600'
                    : 'bg-gray-400 cursor-not-allowed'
                } transition-colors`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </dt>
                      <dd className="text-gray-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {product.brand && (
              <p className="text-gray-600">
                <span className="font-medium">Brand:</span> {product.brand}
              </p>
            )}
            {product.model && (
              <p className="text-gray-600">
                <span className="font-medium">Model:</span> {product.model}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
