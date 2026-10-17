import React, { useState } from "react";
import Reveal from "./ui/Reveal";
import FaqItem from "./faq/FaqItem";
import { faqs } from "../data/faqs";
import { site } from "../data/site";


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
