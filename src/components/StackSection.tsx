import React from "react";
import Reveal from "./ui/Reveal";

const rows = [
  ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express", "PostgreSQL", "Redis", "GraphQL", "Tailwind CSS"],
  ["React Native", "AWS", "Google Cloud", "Azure", "Docker", "Vercel", "Stripe", "Razorpay", "OpenAI", "Claude"],
];

const StackSection: React.FC = () => (
  <section className="section-y-sm">
    <Reveal className="mx-auto max-w-2xl px-4 text-center">
      <h2 className="text-balance text-[1.5rem] font-semibold leading-[1.1] tracking-display text-fg sm:text-[2rem]">
        Built on a stack that scales.
      </h2>
      <p className="mt-3 text-pretty text-[15px] leading-relaxed text-fg-muted sm:text-[17px]">
        We pick per project — not one framework forced onto every problem.
      </p>
    </Reveal>

    <div className="marquee-mask mt-10 space-y-4 overflow-hidden sm:mt-12">
      {rows.map((row, r) => (
        <ul
          key={r}
          className={`marquee-track flex items-center gap-3 ${r ? "marquee-track--reverse" : ""}`}
          aria-label={r ? "Mobile, cloud and AI" : "Web stack"}
        >
          {[...row, ...row].map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= row.length || undefined} className="stack-chip">
              {name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default StackSection;
