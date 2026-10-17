import React from "react";
import { BarChart3, BrainCircuit, Cloud, Code, CreditCard, Gauge, Globe, LifeBuoy, Lock, Plug, Search, Smartphone } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Marquee from "./ui/Marquee";
import ServiceTile, { type Service } from "./services/ServiceTile";
import { CodeVisual, UptimeVisual } from "./services/ServiceVisuals";

const services: Service[] = [
  {
    icon: Code,
    title: "Web platforms",
    body: "Full-stack products on React, Next.js and Node — typed end to end, fast on day one and easy to extend on day 500.",
    tone: "tone-indigo",
    fx: "fx-nudge",
    span: "wide",
    visual: <CodeVisual />,
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    body: "One React Native codebase, shipped to both app stores.",
    tone: "tone-pink",
    fx: "fx-bob",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "AWS, Azure and GCP with infrastructure as code and CI from the first commit.",
    tone: "tone-sky",
    fx: "fx-bob",
  },
  {
    icon: BrainCircuit,
    title: "AI features",
    body: "Retrieval, agents and assistants wired into the product you already have.",
    tone: "tone-amber",
    fx: "fx-pulse",
  },
  {
    icon: Search,
    title: "SEO & performance",
    body: "Technical audits and Core Web Vitals work that survives real traffic.",
    tone: "tone-emerald",
    fx: "fx-pulse",
  },
  {
    icon: LifeBuoy,
    title: "Support that stays",
    body: "Monitoring, maintenance and on-call after you ship — the same team that built it, not a ticket queue.",
    tone: "tone-violet",
    fx: "fx-spin",
    span: "full",
    visual: <UptimeVisual />,
  },
];

const capabilities = [
  { icon: Gauge, label: "Performance" },
  { icon: Lock, label: "Security" },
  { icon: Plug, label: "Integrations" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Globe, label: "Internationalisation" },
];

const FeaturesSection: React.FC = () => (
  <section id="services" className="section-y">
    <SectionHeading
      eyebrow="Services"
      title={
        <>
          Everything you need
          <br className="hidden sm:block" /> to ship and scale.
        </>
      }
      body="One senior team across the whole stack. No handoffs, no gaps, no juggling four vendors to get one product live."
      className="px-4"
    />

    <div className="mx-auto mt-10 grid max-w-7xl gap-3 px-3 sm:mt-16 sm:px-4 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal
          key={service.title}
          delay={(i % 3) as 0 | 1 | 2}
          className={service.span === "wide" ? "lg:col-span-2" : service.span === "full" ? "lg:col-span-3" : ""}
        >
          <ServiceTile service={service} />
        </Reveal>
      ))}
    </div>

    <Marquee label="Also included" className="mx-auto mt-10 max-w-7xl">
      {capabilities.map(({ icon: Icon, label }) => (
        <span key={label} className="stack-chip" role="listitem">
          <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
          {label}
        </span>
      ))}
    </Marquee>
  </section>
);

export default FeaturesSection;
