import React from "react";
import { Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";

const tiers = [
  {
    name: "Project",
    price: "Fixed scope",
    description: "A defined build with a written estimate and an agreed delivery date.",
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
    description: "An ongoing senior team for products that keep evolving after launch.",
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
    description: "Architecture reviews, code audits and technical direction for your own team.",
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

const PricingSection: React.FC = () => (
  <section id="pricing" className="section-y">
    <SectionHeading
      eyebrow="Engagement models"
      title="Work with us the way that fits."
      body="Every engagement starts with a free consultation and a written estimate. No hourly surprises."
      className="px-4"
    />

    <div className="mx-auto mt-10 grid max-w-6xl gap-3 px-3 sm:mt-16 sm:px-4 md:grid-cols-3">
      {tiers.map((tier, i) => (
        <Reveal key={tier.name} delay={i as 0 | 1 | 2}>
          <article className={`tile tile--static flex h-full flex-col p-7 sm:p-8 ${tier.featured ? "tile--featured" : ""}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-semibold text-fg-muted">{tier.name}</h3>
              {tier.featured && <span className="pill-badge">Most popular</span>}
            </div>
            <p className="mt-2 text-[2rem] font-semibold leading-tight tracking-display text-fg">{tier.price}</p>
            <p className="mt-3 text-pretty text-[15px] leading-relaxed text-fg-muted">{tier.description}</p>

            <ul className="mt-7 flex-grow space-y-3 border-t border-border pt-7">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[14px] text-fg">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href="/#contact"
              variant={tier.featured ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {tier.cta}
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default PricingSection;
