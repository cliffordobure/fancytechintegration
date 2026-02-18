import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/slices/articleSlice';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

const ArticlesPage = () => {
  const dispatch = useDispatch();
  const { articles, loading, totalPages, currentPage } = useSelector(
    (state) => state.articles
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (category) params.category = category;
    if (search) params.search = search;
    params.page = searchParams.get('page') || 1;

    dispatch(fetchArticles(params));
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
    { value: '', label: 'All Articles' },
    { value: 'news', label: 'News' },
    { value: 'tutorial', label: 'Tutorials' },
    { value: 'product-review', label: 'Product Reviews' },
    { value: 'company-update', label: 'Company Updates' },
    { value: 'tech-tips', label: 'Tech Tips' },
  ];

  return (
    <>
      <SEO
        title="Articles"
        description="Read the latest articles, tutorials, product reviews, and tech tips from Fancy Tech Integration Kenya. Stay updated with technology trends and solutions."
        keywords={['Articles', 'Tech News', 'Tutorials', 'Product Reviews', 'Tech Tips']}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Articles & Blog</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
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

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
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

export default ArticlesPage;
