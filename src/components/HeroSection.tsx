"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Words from "./Words";

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
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 -top-72 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-60"
        aria-hidden="true"
      >
        <div className="aurora h-full w-full rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600"
        >
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
          Software solutions & digital transformation
        </motion.span>

        <h1 className="word-rise mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
          <Words text="We build the future," />
          <br className="hidden sm:block" />{" "}
          <Words text="one orbit at a time." offset={4} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          DA Orbit designs and ships custom web platforms, mobile apps, and
          cloud infrastructure for teams that need to move fast and scale
          without rework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => scrollToSection("features")}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Explore our work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-gray-100 pt-10"
        >
          <div>
            <div className="text-3xl font-semibold text-gray-900">50+</div>
            <div className="mt-1 text-sm text-gray-500">Projects delivered</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-gray-900">60+</div>
            <div className="mt-1 text-sm text-gray-500">Happy clients</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-gray-900">24/7</div>
            <div className="mt-1 text-sm text-gray-500">Support available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
