import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/constants';

const ArticleCard = ({ article }) => {
  const categoryLabels = {
    news: 'News',
    tutorial: 'Tutorial',
    'product-review': 'Product Review',
    'company-update': 'Company Update',
    'tech-tips': 'Tech Tips',
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="card hover:shadow-lg transition-shadow duration-300"
    >
      {article.featuredImage && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={getImageUrl(article.featuredImage)}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <span className="text-xs text-orange-500 font-medium uppercase">
          {categoryLabels[article.category] || article.category}
        </span>
        <h3 className="text-lg font-semibold mt-1 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author?.name || 'Admin'}</span>
          <span>{formatDate(article.publishedAt || article.createdAt)}</span>
        </div>
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard;
