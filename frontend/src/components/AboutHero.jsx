// components/about/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Users,
  Rocket,
  Globe,
  Shield,
  Cpu,
  ArrowRight,
  Award,
  Briefcase,
  ShoppingCart,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden py-24 lg:py-32">
      {/* Static background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#00ffff22 1px, transparent 1px), linear-gradient(90deg, #00ffff22 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Static floating tech icons (no animation) */}
      <div className="absolute top-20 left-[10%] text-blue-400 opacity-15">
        <Code2 size={60} />
      </div>
      <div className="absolute bottom-20 right-[10%] text-orange-400 opacity-15">
        <Cpu size={70} />
      </div>
      <div className="absolute top-40 right-[15%] text-blue-400 opacity-15">
        <Shield size={50} />
      </div>
      <div className="absolute bottom-40 left-[15%] text-orange-400 opacity-15">
        <Globe size={55} />
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-4 flex items-center min-h-[70vh]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge/Tag – orange */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/30">
              ⚡ Since 2021 • Innovating Tomorrow
            </span>
          </div>

          {/* Main heading – blue + orange gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
              We Don't Just Write Code,
            </span>
            <br />
            <span className="text-white">We Build Digital</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">
              Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A team of passionate innovators, problem solvers, and tech
            enthusiasts dedicated to transforming complex challenges into
            elegant, scalable solutions that drive business growth.
          </p>

          {/* CTA Buttons – static, no hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/products">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30">
                Explore Our Products
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link to="/contact">
              <span className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm">
                Ask for a Quote
              </span>
            </Link>
          </div>

          {/* Stats Grid – static, no hover or scale */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Briefcase,
                value: "150+",
                label: "Projects Delivered",
                color: "blue",
              },
              {
                icon: Users,
                value: "500+",
                label: "Happy Clients",
                color: "orange",
              },
              {
                icon: Award,
                value: "98%",
                label: "Client Satisfaction",
                color: "orange",
              },
              {
                icon: ShoppingCart,
                value: "1000+",
                label: "Items Sold",
                color: "blue",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <stat.icon
                  className={`w-8 h-8 text-${stat.color}-400 mb-3 mx-auto`}
                />
                <div
                  className={`text-2xl font-bold text-${stat.color}-400 mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator – completely static (no motion) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
