"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
          >
            DA Orbit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Revolutionizing software development with cutting-edge solutions. We
            build the future, one orbit at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Innovative software development, cloud solutions, and digital
            transformation services that propel your business into the next
            generation.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center space-x-2 group cursor-pointer touch-manipulation"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Stats or features preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className=" bg-opacity-25 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-35 transition-all duration-300 shadow-xl"
          >
            <div className="text-4xl font-bold text-white mb-3">500+</div>
            <div className="text-white text-lg">Projects Delivered</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className=" bg-opacity-25 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-35 transition-all duration-300 shadow-xl"
          >
            <div className="text-4xl font-bold text-white mb-3">150+</div>
            <div className="text-white text-lg">Happy Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className=" bg-opacity-25 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-35 transition-all duration-300 shadow-xl"
          >
            <div className="text-4xl font-bold text-white mb-3">24/7</div>
            <div className="text-white text-lg">Support Available</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => scrollToSection("features")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center hover:border-opacity-100 transition-all duration-300"
        >
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
