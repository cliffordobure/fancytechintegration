import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-orange-500">F.T.I.</span>
              <h3 className="text-xl font-bold text-white">Fancy Tech Integration</h3>
              <p className="text-sm text-gray-400">Kenya</p>
            </div>
            <p className="text-gray-400">
              Leading provider of technology solutions, Starlink Kits, Networking
              Equipment, Laptops, and Phones in Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/products?category=starlink"
                  className="hover:text-white transition-colors"
                >
                  Starlink Kits
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=networking"
                  className="hover:text-white transition-colors"
                >
                  Networking Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=laptops"
                  className="hover:text-white transition-colors"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=phones"
                  className="hover:text-white transition-colors"
                >
                  Phones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:sales@fancytechintegration-kenya.com" className="hover:text-white transition-colors">
                  sales@fancytechintegration-kenya.com
                </a>
              </li>
              <li>
                <a href="tel:+254759466446" className="hover:text-white transition-colors">
                  +254 759 466 446
                </a>
              </li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fancy Tech Integration Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
