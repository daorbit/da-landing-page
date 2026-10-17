import React from "react";
import Reveal from "./ui/Reveal";
import Marquee from "./ui/Marquee";
import BrandMark from "./ui/BrandMark";
import { platformStack, webStack, type Tech } from "../data/stack";

const TechChip: React.FC<{ tech: Tech }> = ({ tech }) => (
  <span className="stack-chip" role="listitem">
    {tech.brand ? (
      <BrandMark icon={tech.brand} />
    ) : (
      tech.icon && <tech.icon className="h-5 w-5 text-fg-muted" aria-hidden="true" />
    )}
    {tech.name}
  </span>
);

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

    <div className="mt-10 space-y-4 sm:mt-12">
      <Marquee label="Web stack">
        {webStack.map((tech) => (
          <TechChip key={tech.name} tech={tech} />
        ))}
      </Marquee>
      <Marquee label="Mobile, cloud and AI" reverse slow>
        {platformStack.map((tech) => (
          <TechChip key={tech.name} tech={tech} />
        ))}
      </Marquee>
    </div>
  </section>
);

export default StackSection;
