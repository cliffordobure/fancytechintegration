// components/home/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const HomeHero = () => {
  return (
    <section className="relative pt-8 md:pt-2 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Simple animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 min-h-screen flex items-center pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand badge — now solid white on a glass background, no star */}
          <div className="inline-block mb-8">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-semibold text-white shadow-lg shadow-purple-500/20">
              POWERING THE FUTURE OF SOUTH SUDAN TECH
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Innovate
            </span>
            <span className="text-white">. Build.</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text">
              Integrate.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We turn complex problems into elegant solutions —
            <br className="hidden sm:block" />
            software that drives South Sudan’s digital future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-white flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full font-semibold text-lg bg-transparent border-2 border-white/30 hover:border-purple-500 transition-all duration-300"
              >
                <span className="relative text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  See Our Work
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Tech stack */}
          <div className="mb-12">
            <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
              Trusted technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
              {["React", "Node.js", "Python", "AWS", "Express", "MongoDB"].map(
                (tech) => (
                  <span key={tech} className="text-gray-300 font-mono text-sm">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60 w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
