// components/CategoriesSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CategoriesSection = ({ categoryInfo }) => {
  return (
    <section className="relative py-24 bg-gray-900">
      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Static gradient orbs (no animation) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative container mx-auto px-4">
        {/* Section Header – static */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
              PRODUCT CATEGORIES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              Our Product Categories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of technology solutions designed to meet all
            your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categoryInfo).map(([key, info]) => (
            <div key={key} className="relative h-full">
              <Link
                to={`/products?category=${key}`}
                className="relative block h-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              >
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

                  {/* Static icon – no floating */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl">
                    {info.icon}
                  </div>

                  {/* Category badge – orange */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {info.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {info.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {info.description}
                  </p>

                  {/* Explore link – static, orange */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400">
                    Explore {info.title}
                    <ArrowRight size={16} />
                  </span>

                  {/* Static decorative icon – no rotation */}
                  <div className="absolute bottom-4 right-4 text-orange-500/20">
                    <Sparkles size={24} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
