"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

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
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.08),_transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
          Software solutions & digital transformation
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
          We build the future,
          <br className="hidden sm:block" /> one orbit at a time.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          DA Orbit designs and ships custom web platforms, mobile apps, and
          cloud infrastructure for teams that need to move fast and scale
          without rework.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => scrollToSection("features")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
          >
            <span>Explore our work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-gray-100 pt-10">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
