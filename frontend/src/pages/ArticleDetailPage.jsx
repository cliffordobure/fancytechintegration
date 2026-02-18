import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle } from '../store/slices/articleSlice';
import SEO from '../components/SEO';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { article, loading } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticle(slug));
  }, [dispatch, slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-gray-600">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600">The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
          Back to Articles
        </Link>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const categoryLabels = {
    news: 'News',
    tutorial: 'Tutorial',
    'product-review': 'Product Review',
    'company-update': 'Company Update',
    'tech-tips': 'Tech Tips',
  };

  return (
    <>
      <SEO
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        keywords={article.seoKeywords || []}
        image={article.featuredImage ? `http://localhost:5000${article.featuredImage}` : null}
        url={`${window.location.origin}/articles/${article.slug}`}
        type="article"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <span className="text-sm text-orange-500 font-medium uppercase">
            {categoryLabels[article.category] || article.category}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By {article.author?.name || 'Admin'}</span>
            <span>•</span>
            <span>{formatDate(article.publishedAt || article.createdAt)}</span>
            {article.views > 0 && (
              <>
                <span>•</span>
                <span>{article.views} views</span>
              </>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="mb-8">
            <img
              src={`http://localhost:5000${article.featuredImage}`}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Back to Articles */}
        <div className="border-t pt-8">
          <Link
            to="/articles"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Articles
          </Link>
        </div>
      </article>
    </>
  );
};

export default ArticleDetailPage;
