import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { Eyebrow } from "./ui/SectionHeading";

const steps = [
  {
    title: "Discovery",
    body: "We map the problem, the users and the constraints — then agree on what success looks like before anyone writes code.",
  },
  {
    title: "Planning",
    body: "A fixed scope, a timeline with milestones, and a written estimate. No open-ended hourly drift.",
  },
  {
    title: "Development",
    body: "Weekly builds you can click through. You see progress as it happens, not at a single big reveal.",
  },
  {
    title: "Launch & support",
    body: "We deploy, monitor and keep it running — with a support line that stays open after handover.",
  },
];

const ProcessSection: React.FC = () => (
  <section id="process" className="section-y">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
      <Reveal className="lg:sticky lg:top-24 lg:self-start">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-3 text-balance text-h2 font-semibold leading-[1.06] tracking-display text-fg">
          A process built to remove surprises.
        </h2>
        <p className="mt-5 text-pretty text-lead leading-normal text-fg-muted">
          The same four steps on every engagement, so you always know what happens next and what it costs.
        </p>
        <Button href="/#contact" variant="ghost" className="mt-6 text-[15px]">
          Start with a free consultation
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>

      <ol className="process-list">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={1} className="process-step">
            <span className="process-step__num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-[1.375rem] font-semibold tracking-tight text-fg sm:text-[1.75rem]">{step.title}</h3>
              <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-fg-muted sm:text-[17px]">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
