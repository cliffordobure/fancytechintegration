import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import { fetchAllArticles } from '../../store/slices/articleSlice';
import api from '../../services/api';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { articles } = useSelector((state) => state.articles);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 100 }));
    dispatch(fetchAllArticles());
    fetchOrders();
  }, [dispatch]);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get('/orders', { params: { limit: 100 } });
      setOrders(data.orders || data || []);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const publishedArticles = articles.filter((a) => a.published);
  const draftArticles = articles.filter((a) => !a.published);
  const activeProducts = products.filter((p) => p.status === 'active');
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the Fancy Tech Integration Kenya admin panel</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-primary-600">{products.length}</p>
          <Link
            to="/admin/products"
            className="text-sm text-primary-600 hover:text-primary-700 mt-2 inline-block"
          >
            Manage →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Active Products</h3>
          <p className="text-3xl font-bold text-green-600">{activeProducts.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Published Articles</h3>
          <p className="text-3xl font-bold text-blue-600">{publishedArticles.length}</p>
          <Link
            to="/admin/articles"
            className="text-sm text-primary-600 hover:text-primary-700 mt-2 inline-block"
          >
            Manage →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Draft Articles</h3>
          <p className="text-3xl font-bold text-yellow-600">{draftArticles.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-orange-600">{orders.length}</p>
          <Link
            to="/admin/orders"
            className="text-sm text-primary-600 hover:text-primary-700 mt-2 inline-block"
          >
            Manage →
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              to="/admin/products"
              className="block w-full btn-primary text-center"
            >
              Manage Products
            </Link>
            <Link
              to="/admin/articles"
              className="block w-full btn-secondary text-center"
            >
              Manage Articles
            </Link>
            <Link
              to="/admin/orders"
              className="block w-full btn-secondary text-center"
            >
              Manage Orders
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <p className="text-gray-600 mb-2">
            {featuredProducts.length} products are currently featured
          </p>
          <Link
            to="/admin/products"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Manage Featured Products →
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-600">No products yet. Create your first product!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.slice(0, 5).map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      KES {product.price?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
