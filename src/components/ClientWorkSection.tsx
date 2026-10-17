import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { clientWork } from "../data/site";

const ClientWorkSection: React.FC = () => (
  <section id="work" className="section-y">
    <SectionHeading
      eyebrow="Recently delivered"
      title="Client work, live in production."
      body="One of our recent builds — from first call to launch, designed and engineered by our team."
      className="px-4"
    />

    <Reveal className="mx-auto mt-10 max-w-7xl px-3 sm:mt-16 sm:px-4">
      <article className="case-study">
        <div className="case-study__glow" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <span className="block w-36 sm:w-44">
              <img src={clientWork.logoLight} alt={clientWork.name} className="block h-auto w-full dark:hidden" />
              <img src={clientWork.logoDark} alt={clientWork.name} className="hidden h-auto w-full dark:block" />
            </span>

            <h3 className="mt-8 text-balance text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.025em] text-fg sm:text-[2.5rem]">
              A travel platform for the Himalayas, built on Next.js.
            </h3>
            <p className="mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-fg-muted sm:text-[17px]">
              {clientWork.summary}
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {clientWork.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-fg">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
              {clientWork.stack.map((tech) => (
                <li key={tech} className="case-study__chip">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={clientWork.href}>
                Visit {clientWork.host}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/#contact" variant="secondary">
                Build something like it
              </Button>
            </div>
          </div>

          <div className="tripzy">
            <div className="flex items-center gap-4">
              <img src={clientWork.ai.markLight} alt="" className="h-16 w-16 dark:hidden" />
              <img src={clientWork.ai.markDark} alt="" className="hidden h-16 w-16 dark:block" />
              <div>
                <p className="text-[12px] font-semibold text-emerald-600 dark:text-emerald-400">Built-in AI</p>
                <p className="text-[1.5rem] font-semibold tracking-[-0.02em] text-fg">{clientWork.ai.name}</p>
              </div>
            </div>
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-fg-muted">{clientWork.ai.body}</p>

            <div className="tripzy__chat" aria-hidden="true">
              <p className="tripzy__bubble tripzy__bubble--user">5 days in Uttarakhand in October, easy treks, family of four.</p>
              <p className="tripzy__bubble">
                Here&apos;s a gentle 5-day plan: Dehradun → Mussoorie → Rishikesh, with two short day treks and
                family-friendly stays. Want me to send it on WhatsApp?
              </p>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  </section>
);

export default ClientWorkSection;
