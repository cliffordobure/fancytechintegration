import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, totalPages, currentPage } = useSelector(
    (state) => state.products
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (category) params.category = category;
    if (search) params.search = search;
    params.page = searchParams.get('page') || 1;

    dispatch(fetchProducts(params));
  }, [dispatch, category, search, searchParams]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchParams({ ...(cat && { category: cat }) });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (category) params.category = category;
    if (search) params.search = search;
    setSearchParams(params);
  };

  const categories = [
    { value: '', label: 'All Products' },
    { value: 'starlink', label: 'Starlink Kits' },
    { value: 'networking', label: 'Networking Equipment' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'phones', label: 'Phones' },
    { value: 'software', label: 'Software' },
  ];

  return (
    <>
      <SEO
        title="Products"
        description="Browse our wide range of technology products including Starlink Kits, Networking Equipment, Laptops, Phones, and Software Solutions in Kenya."
        keywords={['Products', 'Starlink', 'Networking Equipment', 'Laptops', 'Phones', 'Software']}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field"
              />
            </div>
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="input-field md:w-64"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        params.set('page', page);
                        setSearchParams(params);
                      }}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
