// components/OurFeatures.jsx
import React from "react";
import { Rocket, Shield, Wrench, Headphones, Zap } from "lucide-react";

const OurFeatures = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across South Sudan",
      color: "orange",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All products come with warranty and support",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Professional installation services available",
      color: "orange",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      color: "blue",
    },
  ];

  const getColorClasses = (color) => {
    if (color === "orange") {
      return {
        badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
        iconBg: "bg-orange-500",
        iconShadow: "shadow-orange-500/30",
        title: "text-orange-400",
      };
    } else {
      return {
        badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
        iconBg: "bg-blue-500",
        iconShadow: "shadow-blue-500/30",
        title: "text-blue-400",
      };
    }
  };

  return (
    <section className="relative py-24 bg-gray-900">
      {/* Static background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #f97316 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Static gradient orbs – blue + orange */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header – static */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
              Why Choose F.T.I.?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to providing the best technology solutions and
            customer experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div key={index} className="relative h-full">
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 overflow-hidden">
                  {/* Static decorative shine (no animation) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0" />

                  {/* Icon – static, no rotation */}
                  <div className="relative mb-6 inline-block">
                    <div
                      className={`absolute inset-0 bg-${feature.color}-500 rounded-full blur-xl opacity-50`}
                    />
                    <div
                      className={`relative w-20 h-20 rounded-full bg-${feature.color}-500 p-4 flex items-center justify-center shadow-lg ${colors.iconShadow}`}
                    >
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-3 text-white`}>
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Static decorative zap – no animation */}
                  <div className="absolute bottom-4 right-4 text-orange-500/20">
                    <Zap size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar – static, no hover */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "1000+", label: "Products Sold" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
