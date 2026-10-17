import React from "react";
import { ArrowRight } from "lucide-react";
import Words from "./Words";
import Button from "./ui/Button";
import AnnouncementPill from "./ui/AnnouncementPill";
import HeroOrbit from "./hero/HeroOrbit";

const promises = ["Fixed-scope estimates", "Weekly demo builds", "You own the code", "Support after launch"];

const HeroSection: React.FC = () => (
  <section id="hero" className="hero relative isolate overflow-hidden">
    <div className="hero__glow" aria-hidden="true" />
    <HeroOrbit />

    <div className="relative z-10 mx-auto flex min-h-[40rem] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[52rem] sm:px-6">
      <AnnouncementPill href="/#contact" label="Open" className="rise rise-1">
        Now taking new projects
      </AnnouncementPill>

      <h1 className="word-rise mt-7 text-balance text-hero font-semibold leading-[1.02] tracking-hero text-fg">
        <Words text="We build software" />{" "}
        <Words text="that ships." offset={3} className="text-brand-gradient" />
      </h1>

      <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-pretty text-lead leading-[1.55] text-fg-muted">
        DA Orbit is a software development company. We design, build and run web platforms, mobile apps and
        cloud infrastructure — so you launch fast and scale without a rewrite.
      </p>

      <div className="rise rise-4 mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button href="/#contact" size="lg">
          Start a project
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
        <Button href="/#services" variant="secondary" size="lg">
          Explore services
        </Button>
      </div>

      <ul className="rise rise-5 mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[13px] text-fg-faint">
        {promises.map((label, i) => (
          <li key={label} className="flex items-center gap-3">
            {i > 0 && <span className="h-[3px] w-[3px] rounded-full bg-border-strong" aria-hidden="true" />}
            {label}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HeroSection;
