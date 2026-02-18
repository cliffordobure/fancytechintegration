import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { fetchArticles } from '../store/slices/articleSlice';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import category1 from '../assets/pngwing.com (15).png';
import category2 from '../assets/pngwing.com (16).png';
import category3 from '../assets/pngwing.com (17).png';
import category4 from '../assets/pngwing.com (18).png';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading: productsLoading } = useSelector((state) => state.products);
  const { articles, loading: articlesLoading } = useSelector((state) => state.articles);
  const [categoryProducts, setCategoryProducts] = useState({});

  useEffect(() => {
    // Fetch all products first
    dispatch(fetchProducts({ limit: 100 }));
    // Fetch recent articles
    dispatch(fetchArticles({ limit: 3 }));
  }, [dispatch]);

  // Filter products by category
  useEffect(() => {
    const categories = ['starlink', 'networking', 'laptops', 'phones'];
    const filtered = {};
    categories.forEach((category) => {
      const categoryProds = products
        .filter((p) => p.category === category && p.status === 'active')
        .slice(0, 4);
      if (categoryProds.length > 0) {
        filtered[category] = categoryProds;
      }
    });
    setCategoryProducts(filtered);
  }, [products]);

  // Get featured products and also show all active products
  const featuredProducts = products.filter((p) => p.featured && p.status === 'active').slice(0, 8);
  const allActiveProducts = products.filter((p) => p.status === 'active').slice(0, 12);
  const recentArticles = articles.slice(0, 3);

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Sold' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Kenya',
    },
    {
      icon: '🛡️',
      title: 'Quality Guaranteed',
      description: 'All products come with warranty and support',
    },
    {
      icon: '💼',
      title: 'Expert Installation',
      description: 'Professional installation services available',
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support',
    },
  ];

  const categoryInfo = {
    starlink: {
      title: 'Starlink Kits',
      description: 'High-speed satellite internet solutions for remote and urban areas',
      icon: '🛰️',
      image: category1,
    },
    networking: {
      title: 'Networking Equipment',
      description: 'Professional networking solutions for businesses and technicians',
      icon: '🔌',
      image: category2,
    },
    laptops: {
      title: 'Laptops',
      description: 'Quality laptops from leading manufacturers for all your needs',
      icon: '💻',
      image: category3,
    },
    phones: {
      title: 'Phones & Accessories',
      description: 'Latest smartphones and accessories at competitive prices',
      icon: '📱',
      image: category4,
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description="Fancy Tech Integration Kenya - Your trusted partner for Starlink Kits, Networking Equipment, Laptops, Phones, and Software Solutions. Quality technology products and services in Kenya."
        keywords={['Fancy Tech Integration Kenya', 'F.T.I. Kenya', 'Technology Solutions', 'Starlink', 'Networking', 'Laptops', 'Phones']}
      />

      {/* Hero Slider Section */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          <Link
            to="/products"
            className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base shadow-lg transform hover:scale-105 transition-all"
          >
            Browse Products
          </Link>
          <Link
            to="/contact"
            className="btn-secondary bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 text-base font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of technology solutions designed to meet all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(categoryInfo).map(([key, info]) => (
              <Link
                key={key}
                to={`/products?category=${key}`}
                className="group card p-0 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-5xl">
                    {info.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{info.title}</h3>
                  <p className="text-gray-600 mb-4">{info.description}</p>
                  <span className="text-orange-500 font-semibold group-hover:underline">
                    Explore {info.title} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {Object.entries(categoryProducts).map(([category, categoryProds]) => {
        if (!categoryProds || categoryProds.length === 0) return null;
        const info = categoryInfo[category];
        return (
          <section key={category} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={info.image}
                      alt={info.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{info.icon}</span>
                      <h2 className="text-4xl font-bold">{info.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg">{info.description}</p>
                  </div>
                </div>
                <Link
                  to={`/products?category=${category}`}
                  className="hidden md:block text-orange-500 hover:text-orange-600 font-semibold text-lg"
                >
                  View All →
                </Link>
              </div>
              {productsLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryProds.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
              <div className="text-center mt-8">
                <Link
                  to={`/products?category=${category}`}
                  className="inline-block text-orange-500 hover:text-orange-600 font-semibold text-lg md:hidden"
                >
                  View All {info.title} →
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
              <p className="text-lg text-gray-600">
                Handpicked products that stand out for their quality and value
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/products"
                className="inline-block btn-primary bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Products Section - Show all active products */}
      {allActiveProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Products</h2>
              <p className="text-lg text-gray-600">
                Browse our complete collection of technology products
              </p>
            </div>
            {productsLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                <p className="mt-4 text-gray-600">Loading products...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {allActiveProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/products"
                    className="inline-block btn-primary bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
                  >
                    View All Products
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose F.T.I.?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best technology solutions and customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Articles</h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest technology trends and insights
              </p>
            </div>
            {articlesLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {recentArticles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/articles"
                    className="inline-block text-orange-500 hover:text-orange-600 font-semibold text-lg"
                  >
                    Read All Articles →
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Get in touch with us today and discover how Fancy Tech Integration can help
            you achieve your technology goals with our expert solutions and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-10 py-4 text-lg font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
