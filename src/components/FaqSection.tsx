"use client";
import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most builds run six to twelve weeks from kickoff to launch, depending on scope. We give you a milestone timeline in writing after discovery, before any code is written.",
  },
  {
    question: "How do you price work?",
    answer:
      "Project work is quoted as a fixed scope with a written estimate. Retainers are billed monthly for reserved capacity. Either way you know the number before we start — we don't bill open-ended hours.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Primarily the MERN stack — MongoDB, Express, React, and Node — plus Next.js, React Native for mobile, and AWS, Azure, or Google Cloud for infrastructure. We pick per project rather than forcing one stack onto every problem.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. A large share of our work is taking over, auditing, or extending software someone else built. We start with a codebase review so you get an honest read on what's worth keeping.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of post-launch support. Beyond that, most clients move to a retainer for monitoring, maintenance, and ongoing feature work.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Full ownership of the source, the repositories, and the infrastructure accounts transfers to you at handover.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-28 bg-surface-subtle/60 border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
            Questions
          </p>
          <h2 className="text-h2 font-semibold tracking-display text-fg mb-4">
            Answers before you ask
          </h2>
          <p className="text-lead text-fg-muted max-w-2xl mx-auto">
            Still unsure about something? The consultation is free — bring the
            question there.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass edge-lit group rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm font-semibold text-fg">
                {faq.question}
                <Plus
                  className="h-4 w-4 shrink-0 text-fg-faint transition-transform duration-200 group-open:rotate-45 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
