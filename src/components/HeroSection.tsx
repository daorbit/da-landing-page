import React from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import GoogleReviewsLink from "./ui/GoogleReviewsLink";
import StatCounter, { type Stat } from "./about/StatCounter";
import HeroShowcase from "./hero/HeroShowcase";
import { site } from "../data/site";

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 60, suffix: "+", label: "Clients served" },
  { value: 5, label: "Years building" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
];

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="hero" className="hero relative isolate overflow-hidden">

      <div className="relative mx-auto max-w-5xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="rise rise-1 inline-flex items-center gap-2 text-[14px] font-medium text-fg-muted">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Software development company · {site.location}
        </p>

        <h1 className="rise rise-2 mx-auto mt-6 max-w-4xl text-balance text-hero font-semibold leading-[1.02] tracking-hero text-fg">
          We design and build software <span className="hero__muted">that businesses run on.</span>
        </h1>

        <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-pretty text-lead leading-[1.55] text-fg-muted">
          Web platforms, mobile apps, cloud and AI — scoped in writing, demoed every week, and supported long after
          launch.
        </p>

        <div className="rise rise-4 mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/#contact" size="lg">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
          <Button href="/#work" variant="secondary" size="lg">
            See our work
          </Button>
        </div>
      </div>

      <div className="rise rise-5 relative mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6">
        <HeroShowcase />
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between">
          <ul ref={ref} className="grid w-full grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 lg:w-auto lg:gap-x-16">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} active={inView} />
            ))}
          </ul>
          <GoogleReviewsLink variant="card" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
