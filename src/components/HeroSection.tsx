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
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
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
          className="glass edge-lit inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-fg-muted"
        >
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Software solutions &amp; digital transformation
        </motion.span>

        <h1 className="word-rise text-gradient mt-7 text-display font-semibold tracking-display leading-[1.04]">
          <Words text="We build the future," />
          <br className="hidden sm:block" />{" "}
          <Words text="one orbit at a time." offset={4} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-lead text-fg-muted max-w-2xl mx-auto leading-relaxed"
        >
          DA Orbit designs and ships custom web platforms, mobile apps, and
          cloud infrastructure for teams that need to move fast and scale
          without rework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => scrollToSection("features")}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-cta hover:bg-cta-hover text-cta-fg text-sm font-medium rounded-xl shadow-[var(--shadow-card)] transition-all duration-200"
          >
            <span>Explore our work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="glass edge-lit inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-fg text-sm font-medium hover:border-border-strong transition-all duration-200"
          >
            Talk to us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border pt-10"
        >
          {[
            { value: "50+", label: "Projects delivered" },
            { value: "60+", label: "Happy clients" },
            { value: "24/7", label: "Support available" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold tracking-tight text-fg">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-fg-subtle">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
