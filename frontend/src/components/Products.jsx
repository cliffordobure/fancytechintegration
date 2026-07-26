// components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowRight, Star } from "lucide-react";
import ProductCard from "./ProductCard";

const Products = ({ products = [] }) => {
  const store = useSelector((state) => state.products || {});
  const storeProducts = store.products || [];
  const productsLoading = store.loading || false;

  const items = products.length ? products : storeProducts;

  const featuredProducts = items
    .filter((p) => p.featured && p.status === "active")
    .slice(0, 8);
  const allActiveProducts = items
    .filter((product) => product.status === "active")
    .slice(0, 12);

  return (
    <>
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="relative py-24 bg-gray-900">
          {/* Static background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Static decorative element */}
          <div className="absolute top-20 right-20 text-purple-500/10">
            <Star size={80} />
          </div>

          <div className="relative container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-yellow-400">
                  ⭐ FEATURED PRODUCTS ⭐
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
                  Featured Products
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Handpicked products that stand out for their quality and value
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* View All Button – completely static */}
            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-orange-500/30"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Products Section */}
      {allActiveProducts.length > 0 && (
        <section className="relative py-24 bg-gray-800">
          {/* Static background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #8b5cf6 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Static decorative orb */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

          <div className="relative container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-purple-400">
                  OUR COLLECTION
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Our Products
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Browse our complete collection of technology products
              </p>
            </div>

            {productsLoading ? (
              <div className="text-center py-20">
                {/* Static loader – no spinning */}
                <div className="inline-block w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full" />
                <p className="mt-4 text-gray-400">Loading products...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {allActiveProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                {/* Browse All Button – completely static */}
                <div className="text-center">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-500/30"
                  >
                    Browse All Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
