"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map the problem, the users, and the constraints — then agree on what success looks like before anyone writes code.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "A fixed scope, a timeline with milestones, and a written estimate. No open-ended hourly drift.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Weekly builds you can click through. You see progress as it happens rather than at a single reveal.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "We deploy, monitor, and keep it running — with a support line that stays open after handover.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-16 sm:py-20 md:py-28 bg-surface-subtle/60 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
            How we work
          </p>
          <h2 className="text-h2 font-semibold tracking-display text-fg mb-4">
            A process built to remove surprises
          </h2>
          <p className="text-lead text-fg-muted max-w-2xl mx-auto">
            The same four steps on every engagement, so you always know what
            happens next and what it costs.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* The connecting rule sits behind the cards on wide viewports. */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden lg:block"
            aria-hidden="true"
          >
            <div className="hairline" />
          </div>

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent-border bg-surface text-base font-semibold text-accent tabular-nums">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
