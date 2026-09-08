"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Closing call to action. Full-bleed dark band, left-aligned copy, two pills.
 * `backgroundImage` points at a photo when one exists in /public; until then
 * the gradient below stands in without looking like a broken image.
 */
const BACKGROUND_IMAGE: string | null = null;

const CtaSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0b0d]">
      {BACKGROUND_IMAGE ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
            aria-hidden="true"
          />
          {/* Scrim so the copy keeps its contrast over any photo. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/85 to-transparent"
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 100% at 85% 50%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(ellipse 60% 100% at 100% 100%, rgba(236,72,153,0.22), transparent 60%)",
          }}
          aria-hidden="true"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="max-w-xl">
          <h2 className="text-h2 font-semibold tracking-display text-white">
            Ready to Build
            <br />
            Your Next Product?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Launch faster and scale further with a senior team that stays after
            the handover. Start with a free consultation and a written estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-medium text-[#0a0b0d] hover:bg-white/90 transition-colors duration-200"
            >
              Book A Consultation
            </button>
            <a
              href="mailto:daorbit2k25@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-[15px] font-medium text-white hover:bg-accent-hover transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
