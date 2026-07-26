// components/contact/ContactHero.jsx
import React from "react";
import { MessageSquare } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
      {/* Static background pattern – orange dots */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Static gradient orbs – orange and blue */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      {/* Static floating icon (no animation) */}
      <div className="absolute top-40 right-40 text-orange-500/10 hidden lg:block">
        <MessageSquare size={80} />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Badge – orange */}
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
            GET IN TOUCH
          </span>
        </div>

        {/* Heading – orange + blue gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 text-transparent bg-clip-text">
            Let's Connect
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a question? Need support? We're here to help you with all your
          technology needs.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
