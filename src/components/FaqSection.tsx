import React, { useState } from "react";
import Reveal from "./ui/Reveal";
import FaqItem, { type Faq } from "./faq/FaqItem";
import { site } from "../data/site";

const faqs: Faq[] = [
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
      "Primarily the MERN stack — MongoDB, Express, React and Node — plus Next.js, React Native for mobile, and AWS, Azure or Google Cloud for infrastructure. We pick per project rather than forcing one stack onto every problem.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. A large share of our work is taking over, auditing or extending software someone else built. We start with a codebase review so you get an honest read on what's worth keeping.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of post-launch support. Beyond that, most clients move to a retainer for monitoring, maintenance and ongoing feature work.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Full ownership of the source, the repositories and the infrastructure accounts transfers to you at handover.",
  },
];

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-h2 font-semibold leading-[1.04] tracking-display text-fg">
            Got questions
            <br />
            about <span className="text-accent">{site.name}</span>?
          </h2>
          <p className="mt-5 max-w-xs text-lead leading-snug text-fg-muted">Answers before you ask.</p>
          <p className="mt-4 text-[14px] text-fg-muted">
            Still unsure?{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-fg underline underline-offset-4 hover:text-fg-muted">
              Email us
            </a>{" "}
            — a human replies.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <ul className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                id={`faq-${i}`}
                item={faq}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default FaqSection;
