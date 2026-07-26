// components/CoreValues.jsx – Minimalist Grid with Numbers
import React from "react";
import { Award, Lightbulb, Heart, Shield, Users, Globe2 } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Award,
      number: "01",
      title: "Excellence",
      description:
        "Delivering the highest quality products and services to our customers, ensuring their satisfaction and success.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Innovation",
      description:
        "Embracing creativity and continuously seeking new ways to solve problems and improve our services.",
    },
    {
      icon: Heart,
      number: "03",
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Integrity",
      description:
        "Conducting business with honesty, transparency, and respect for all stakeholders.",
    },
    {
      icon: Users,
      number: "05",
      title: "Collaboration",
      description:
        "Believing in the power of teamwork and collaboration to achieve common goals.",
    },
    {
      icon: Globe2,
      number: "06",
      title: "Accessibility",
      description:
        "Making technology solutions accessible to everyone, regardless of background or location.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-900">
      {/* Background pattern + orbs */}
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
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

        {/* Grid with Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const isOrange = index % 2 === 0;
            const numberColor = isOrange
              ? "text-orange-500/20"
              : "text-blue-500/20";
            const iconBg = isOrange ? "bg-orange-500" : "bg-blue-500";
            const titleColor = isOrange ? "text-orange-400" : "text-blue-400";

            return (
              <div
                key={index}
                className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                {/* Large Number (background) */}
                <div
                  className={`absolute top-4 right-6 text-7xl font-bold ${numberColor} select-none`}
                >
                  {value.number}
                </div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl ${iconBg} p-3 mb-4 flex items-center justify-center shadow-lg`}
                >
                  <value.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
