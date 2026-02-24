// components/contact/ContactMap.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-64 relative overflow-hidden group">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.846296276494!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2b7f1d8b7%3A0x3b3d5b5c5c5c5c5c!2sNairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        className="grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
};

export default ContactMap;
