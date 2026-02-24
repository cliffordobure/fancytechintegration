// pages/admin/AdminArticles.jsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fetchAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../../store/slices/articleSlice";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";
import ArticleStats from "../../components/admin/ArticleStats";
import ArticleTable from "../../components/admin/ArticleTable";
import ArticleModal from "../../components/admin/ArticleModal";
import { FileText, Plus, Sparkles, AlertCircle } from "lucide-react";

const AdminArticles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, loading, error } = useSelector((state) => state.articles);
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  // Show error toast if there's an error
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleEdit = (article) => {
    setEditingArticle(article);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await dispatch(deleteArticle(id)).unwrap();
        toast.success("Article deleted successfully");
      } catch (error) {
        toast.error(error || "Failed to delete article");
      }
    }
  };

  const handleSubmit = async (articleData) => {
    try {
      setSubmitting(true);

      if (editingArticle) {
        await dispatch(
          updateArticle({ id: editingArticle._id, articleData }),
        ).unwrap();
        toast.success("Article updated successfully");
      } else {
        await dispatch(createArticle(articleData)).unwrap();
        toast.success("Article created successfully");
      }

      // Close modal and reset form
      setShowModal(false);
      setEditingArticle(null);

      // Refresh the articles list
      await dispatch(fetchAllArticles());
    } catch (error) {
      toast.error(error || "Failed to save article");
      console.error("Submit error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingArticle(null);
  };

<<<<<<< HEAD
  // Show error state
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => dispatch(fetchAllArticles())}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Try Again
            </button>
=======
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 pt-32 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Articles</h1>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="btn-primary"
        >
          Add New Article
        </button>
      </div>

      {/* Articles Table */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Published Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {article.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        article.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {article.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.publishedAt
                      ? formatDate(article.publishedAt)
                      : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.views || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(article)}
                      className="text-primary-600 hover:text-primary-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {editingArticle ? 'Edit Article' : 'Add New Article'}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="news">News</option>
                      <option value="tutorial">Tutorial</option>
                      <option value="product-review">Product Review</option>
                      <option value="company-update">Company Update</option>
                      <option value="tech-tips">Tech Tips</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="input-field"
                    placeholder="Short description of the article"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content * (HTML supported)
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows="10"
                    className="input-field font-mono text-sm"
                    placeholder="Enter article content. HTML tags are supported (e.g., &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;a&gt;, etc.)"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You can use HTML tags for formatting. Example: &lt;p&gt;Paragraph&lt;/p&gt;, &lt;h2&gt;Heading&lt;/h2&gt;
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="tag1, tag2, tag3"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="input-field"
                  />
                  {uploading && (
                    <p className="text-sm text-gray-600 mt-1">Uploading...</p>
                  )}
                  {formData.featuredImage && (
                    <img
                      src={getImageUrl(formData.featuredImage)}
                      alt="Featured"
                      className="mt-2 h-32 w-auto object-cover rounded"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SEO Title
                    </label>
                    <input
                      type="text"
                      name="seoTitle"
                      value={formData.seoTitle}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SEO Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="seoKeywords"
                      value={formData.seoKeywords}
                      onChange={handleChange}
                      placeholder="keyword1, keyword2"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Description
                  </label>
                  <textarea
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleChange}
                    rows="2"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Publish immediately
                  </label>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingArticle ? 'Update Article' : 'Create Article'}
                  </button>
                </div>
              </form>
            </div>
>>>>>>> 62e7a9450517633c2efecd6bb5f0e7199f15ecba
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Article Management"
        description="Manage articles for Fancy Tech Integration Kenya"
      />

      <div className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Article Management
                </span>
              </h1>
              <p className="text-gray-400">
                Create, edit, and manage your blog articles and content
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="hidden md:block"
              >
                <Sparkles size={32} className="text-purple-400/30" />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setEditingArticle(null);
                  setShowModal(true);
                }}
                disabled={submitting}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                <Plus size={20} />
                Add New Article
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {!loading && <ArticleStats articles={articles} />}

          {/* Articles Table */}
          <ArticleTable
            articles={articles}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />

          {/* Article Modal */}
          <ArticleModal
            isOpen={showModal}
            onClose={handleCloseModal}
            article={editingArticle}
            onSubmit={handleSubmit}
            isSubmitting={submitting}
          />
        </div>
      </div>
    </>
  );
};

export default AdminArticles;
