"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/**
 * Engagement models rather than fixed prices — the work is scoped per project,
 * so quoting a number here would be fiction. Each tier ends in the same
 * consultation CTA.
 */
const tiers = [
  {
    name: "Project",
    price: "Fixed scope",
    description:
      "A defined build with a written estimate and an agreed delivery date.",
    features: [
      "Discovery and technical scoping",
      "Fixed-price written estimate",
      "Weekly demo builds",
      "30 days post-launch support",
    ],
    cta: "Get an estimate",
    featured: false,
  },
  {
    name: "Retainer",
    price: "Monthly",
    description:
      "An ongoing senior team for products that keep evolving after launch.",
    features: [
      "Dedicated project manager",
      "Reserved engineering capacity",
      "Priority turnaround on changes",
      "24/7 monitoring and support",
      "Quarterly architecture review",
    ],
    cta: "Talk to us",
    featured: true,
  },
  {
    name: "Consulting",
    price: "Advisory",
    description:
      "Architecture reviews, code audits, and technical direction for your own team.",
    features: [
      "Codebase and architecture audit",
      "Performance and cost review",
      "Hiring and team structure advice",
      "Written findings and roadmap",
    ],
    cta: "Book a review",
    featured: false,
  },
];

const PricingSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="spotlight relative py-16 sm:py-20 md:py-28 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
            Engagement models
          </p>
          <h2 className="text-h2 font-semibold tracking-display text-fg mb-4">
            Work with us the way that fits
          </h2>
          <p className="text-lead text-fg-muted max-w-2xl mx-auto">
            Every engagement starts with a free consultation and a written
            estimate. No hourly surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass edge-lit relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
                tier.featured
                  ? "border-accent-border shadow-[var(--shadow-lift)]"
                  : "shadow-[var(--shadow-soft)]"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-fg">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-fg">{tier.name}</h3>
              <p className="mt-1 text-2xl font-semibold tracking-display text-accent">
                {tier.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {tier.description}
              </p>

              <ul className="mt-6 flex-grow space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-soft">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    <span className="text-sm text-fg-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                  tier.featured
                    ? "bg-cta text-cta-fg hover:bg-cta-hover shadow-[var(--shadow-card)]"
                    : "border border-border bg-surface-elevated text-fg hover:border-border-strong"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
