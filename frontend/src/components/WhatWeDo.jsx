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
      description: "Custom software solutions tailored to your business needs.",
      color: "blue",
    },
    {
      icon: Satellite,
      title: "Starlink Kits",
      description:
        "High-speed satellite internet solutions for remote and underserved areas.",
      color: "orange",
    },
    {
      icon: Network,
      title: "Networking Equipment",
      description:
        "Professional networking equipment and installation services for technicians.",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Laptops & Phones",
      description:
        "Quality laptops and smartphones from leading manufacturers.",
      color: "orange",
    },
    {
      icon: Smartphone,
      title: "CCTV Systems",
      description: "Professional CCTV systems and installation services.",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    if (color === "orange") {
      return {
        bg: "bg-orange-500",
        gradient: "from-orange-400 to-orange-600",
        text: "text-orange-400",
        border: "border-orange-500/30",
        shadow: "shadow-orange-500/30",
      };
    } else {
      return {
        bg: "bg-blue-500",
        gradient: "from-blue-400 to-blue-600",
        text: "text-blue-400",
        border: "border-blue-500/30",
        shadow: "shadow-blue-500/30",
      };
    }
  };

  return (
    <section className="relative py-24 bg-gray-900">
      {/* Static background pattern – orange dots */}
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

      {/* Static gradient orbs – blue + orange */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header – static */}
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div key={index} className="relative h-full">
                  <div className="relative h-full bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    {/* Icon with gradient background – static */}
                    <div
                      className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${colors.gradient} p-3`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-3 text-white`}>
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn more link – static, no hover */}
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 text-sm ${colors.text}`}
                    >
                      Learn more <ArrowRight size={14} />
                    </a>

                    {/* Static decorative sparkle – no rotation */}
                    <div
                      className={`absolute top-4 right-4 ${colors.text} opacity-20`}
                    >
                      <Sparkles size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA – static button, orange primary */}
          <div className="text-center mt-16">
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
    </section>
  );
};

export default WhatWeDo;
