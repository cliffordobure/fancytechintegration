// components/contact/SupportCTA.jsx
import React from "react";
import { Headphones, Phone } from "lucide-react";

const SupportCTA = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon circle – static, no animation */}
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 p-4 mx-auto">
              <Headphones className="w-full h-full text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">
              Need Immediate Assistance?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-8">
            Our support team is available 24/7 to help you with any urgent
            issues.
          </p>

          <a
            href="tel:+254759466446"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-orange-500/30"
          >
            <Phone size={20} />
            Call Us Now: +211 920 532 819
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
