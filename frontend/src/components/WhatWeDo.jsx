// components/WhatWeDo.jsx
import React from "react";
import {
  Code2,
  Satellite,
  Network,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, from web apps to enterprise systems.",
      color: "blue",
    },
    {
      icon: Satellite,
      title: "Starlink Kits",
      description:
        "High-speed satellite internet solutions for remote and underserved areas, with professional installation.",
      color: "orange",
    },
    {
      icon: Network,
      title: "Networking Equipment",
      description:
        "Professional networking equipment and installation services for businesses and technicians.",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Laptops & Phones",
      description:
        "Quality laptops and smartphones from leading manufacturers, with warranty and support.",
      color: "orange",
    },
    {
      icon: Smartphone,
      title: "CCTV Systems",
      description:
        "Professional CCTV systems and installation services for security and surveillance.",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    if (color === "orange") {
      return {
        iconBg: "bg-orange-500",
        iconShadow: "shadow-orange-500/30",
        text: "text-orange-400",
        border: "border-orange-500/30",
        hoverBg: "hover:bg-orange-500/5",
      };
    } else {
      return {
        iconBg: "bg-blue-500",
        iconShadow: "shadow-blue-500/30",
        text: "text-blue-400",
        border: "border-blue-500/30",
        hoverBg: "hover:bg-blue-500/5",
      };
    }
  };

  return (
    <section className="relative py-24 bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
                What We Do
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>

          {/* Services List – Modern, Card‑free Layout */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="space-y-8">
              {services.map((service, index) => {
                const colors = getColorClasses(service.color);
                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row md:items-start gap-6 p-4 rounded-xl transition-colors ${colors.hoverBg}`}
                  >
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.iconBg} p-3 shadow-lg ${colors.iconShadow} flex items-center justify-center`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link – subtle */}
                    <div className="flex-shrink-0 md:self-center">
                      <a
                        href="#"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:underline`}
                      >
                        Learn More <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider with subtle sparkle */}
            <div className="relative my-8">
              <div className="border-t border-white/10" />
              <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-gray-800 px-4">
                <Sparkles className="w-6 h-6 text-orange-500/30" />
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-orange-500/30"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
