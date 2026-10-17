import React from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./ui/SectionHeading";
import StatCounter, { type Stat } from "./about/StatCounter";

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 60, suffix: "+", label: "Happy clients" },
  { value: 5, label: "Years building" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
];

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section id="about" className="section-y">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Track record"
          title="Small team. Serious output."
          body="Developers, designers and product people who would rather show you a working build than a slide deck."
        />

        <ul ref={ref} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 text-center sm:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} active={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
