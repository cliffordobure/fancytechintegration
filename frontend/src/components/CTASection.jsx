// components/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Zap, Sparkles, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Static gradient background orbs (no animation) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      {/* Static grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Static floating icons (no animation) */}
      <div className="absolute top-20 left-20 text-orange-500/10 hidden lg:block">
        <Rocket size={100} />
      </div>
      <div className="absolute bottom-20 right-20 text-blue-500/10 hidden lg:block">
        <Zap size={80} />
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Badge – orange */}
        <div className="inline-block mb-8">
          <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-6 py-3 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
            READY TO GET STARTED?
          </span>
        </div>

        {/* Main heading – blue + orange gradient */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 text-transparent bg-clip-text">
            Ready to Transform
          </span>
          <br />
          <span className="text-white">Your Technology?</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get in touch with us today and discover how Fancy Tech Integration can
          help you achieve your technology goals with our expert solutions and
          support.
        </p>

        {/* CTA Buttons – static, no hover effects */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-orange-500/30"
          >
            <Phone size={20} />
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-blue-400/50 text-white px-10 py-5 rounded-full text-lg font-semibold backdrop-blur-sm"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Trust indicators – static */}
        <div className="flex items-center justify-center gap-8 mt-16 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-orange-400" />
            No hidden fees
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-blue-400" />
            Free consultation
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-orange-400" />
            24/7 support
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
