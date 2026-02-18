import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { selectCartItemsCount } from '../store/slices/cartSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-500">F.T.I.</span>
            <span className="text-sm font-semibold text-primary-700 hidden sm:inline">
              Fancy Tech Integration
            </span>
            <span className="text-sm text-gray-600 hidden md:inline">Kenya</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/articles"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            {userInfo && userInfo.role === 'admin' ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="btn-primary text-sm"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
