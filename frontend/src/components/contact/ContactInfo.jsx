// components/contact/ContactInfo.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const ContactInfo = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
      label: "Facebook",
      bg: "from-blue-500 to-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
      label: "Twitter",
      bg: "from-blue-400 to-cyan-400",
    },
    {
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-500",
      label: "LinkedIn",
      bg: "from-blue-600 to-blue-700",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
      label: "Instagram",
      bg: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      href: "#",
      color: "hover:text-green-500",
      label: "WhatsApp",
      bg: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Connect With Us
        </span>
      </h2>

      <p className="text-gray-400 mb-6">
        Follow us on social media for the latest updates, tech news, and
        exclusive offers.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${social.bg} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}
            />
            <div
              className={`relative w-full aspect-square rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center gap-1 ${social.color} hover:bg-white/10 transition-all duration-300`}
            >
              <social.icon
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors">
                {social.label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Decorative message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20"
      >
        <p className="text-sm text-gray-300 text-center">
          <span className="text-purple-400 font-semibold">
            ✨ Quick Response:
          </span>{" "}
          We typically reply within 2-4 hours on all social platforms!
        </p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
