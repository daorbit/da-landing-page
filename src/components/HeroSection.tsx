"use client";
import React from "react";
import { motion } from "framer-motion";
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
      className="hero-wash relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="word-rise text-display font-semibold tracking-display leading-[1.08] text-fg">
          <Words text="Turn Your Idea Into" />
          <br className="hidden sm:block" />{" "}
          <Words text="Shipped Software" offset={4} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-lead text-fg-muted max-w-2xl mx-auto leading-relaxed"
        >
          DA Orbit designs, builds, and runs web platforms, mobile apps, and
          cloud infrastructure — so you launch fast and scale later without a
          rewrite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => scrollToSection("features")}
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-7 py-3 text-[15px] font-medium text-fg shadow-[var(--shadow-soft)] hover:border-border-strong transition-colors duration-200"
          >
            See what we build
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-[15px] font-medium text-accent-fg shadow-[var(--shadow-card)] hover:bg-accent-hover transition-colors duration-200"
          >
            Book A Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
