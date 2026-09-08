"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * PLACEHOLDER CONTENT — none of these are real clients or real quotes.
 * They exist so the section's layout can be reviewed before real
 * testimonials arrive. Replace every entry, then delete `isPlaceholder`
 * below so the sample banner and watermarks stop rendering.
 */
const isPlaceholder = true;

const testimonials = [
  {
    quote:
      "Sample placeholder copy standing in for a real client quote about delivery speed and code quality. Replace before launch.",
    name: "Sample Name",
    role: "Sample Role, Example Co.",
    initials: "SN",
  },
  {
    quote:
      "Sample placeholder copy standing in for a real client quote about the team's communication during a build. Replace before launch.",
    name: "Sample Name",
    role: "Sample Role, Example Co.",
    initials: "SN",
  },
  {
    quote:
      "Sample placeholder copy standing in for a real client quote about post-launch support and maintenance. Replace before launch.",
    name: "Sample Name",
    role: "Sample Role, Example Co.",
    initials: "SN",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="spotlight relative py-16 sm:py-20 md:py-28 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
            Client stories
          </p>
          <h2 className="text-h2 font-semibold tracking-display text-fg mb-4">
            Teams that shipped with us
          </h2>
          <p className="text-lead text-fg-muted max-w-2xl mx-auto">
            What it&apos;s like to work with DA Orbit, in our clients&apos; words.
          </p>

          {isPlaceholder && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
              Sample content — placeholder quotes, not real clients
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass edge-lit relative flex h-full flex-col rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-soft)]"
            >
              {isPlaceholder && (
                <span className="absolute right-4 top-4 rounded-full border border-border bg-surface-inset px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-fg-faint">
                  Sample
                </span>
              )}

              <Quote className="h-6 w-6 text-accent" aria-hidden="true" />

              <blockquote className="mt-4 flex-grow text-sm leading-relaxed text-fg-muted">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-border bg-accent-soft text-xs font-semibold text-accent">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-fg">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-fg-subtle">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
