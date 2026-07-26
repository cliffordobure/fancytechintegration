// components/CoreValues.jsx
import React from "react";
import {
  Award,
  Lightbulb,
  Heart,
  Shield,
  Users,
  Globe2,
  Sparkles,
} from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality products and services to our customers, ensuring their satisfaction and success.",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creativity and continuously seek new ways to solve problems and improve our services.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
      color: "from-red-400 to-pink-400",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and respect for all stakeholders.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaboration to achieve common goals.",
      color: "from-purple-400 to-indigo-400",
    },
    {
      icon: Globe2,
      title: "Accessibility",
      description:
        "We ensure that our technology solutions are accessible to everyone, regardless of their background or location.",
      color: "from-teal-400 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-900">
      {/* Static background pattern – orange dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #f97316 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Static gradient orbs – blue + orange */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header – static */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
                OUR PRINCIPLES
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
                Core Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid – static, no hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="relative h-full">
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  {/* Icon with gradient circle – static, no rotation */}
                  <div className="relative mb-6 inline-block">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-full blur-lg opacity-50`}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${value.color} p-3 flex items-center justify-center`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title – static text (no gradient on hover) */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Static decorative sparkle – no rotation */}
                  <div className="absolute bottom-4 right-4 text-orange-500/10">
                    <Sparkles size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
