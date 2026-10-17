import React from "react";
import { ArrowRight, Clock, Globe, ImageIcon, KeyRound, PanelRight, ShieldCheck } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import OrbitMark from "./orbit/OrbitMark";
import OrbitChatPreview from "./orbit/OrbitChatPreview";
import { orbitAi } from "../data/site";

const points = [
  {
    icon: PanelRight,
    title: "Lives in the side panel",
    body: "Orbit opens beside whatever tab you are on, so you never leave the page to ask about it.",
  },
  {
    icon: Globe,
    title: "Follows the site you're on",
    body: "Suggestions change with the tab, and your saved conversations come with you.",
  },
  {
    icon: ImageIcon,
    title: "Reads and draws images",
    body: "Attach a screenshot and ask what's wrong with it, or ask Orbit to draw something. Same chat, no separate tool.",
  },
  {
    icon: Clock,
    title: "Answers at 2am",
    body: "The questions that would otherwise wait for a reply are answered while you are still on the page.",
  },
  {
    icon: ShieldCheck,
    title: "More than one model",
    body: "Pick the model you prefer. If one is slow or rate-limited, Orbit answers with the next one automatically.",
  },
  {
    icon: KeyRound,
    title: "Set up in a minute",
    body: "Install from the Chrome Web Store, connect your workspace, and ask away.",
  },
];

const OrbitAiSection: React.FC = () => (
  <section id="orbit-ai" className="section-y">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="orbit-ai">
        <div className="orbit-ai__glow" aria-hidden="true" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <Reveal>
            <div className="orbit-ai__badge">
              <OrbitMark size={72} alt={orbitAi.name} />
            </div>
            <p className="mt-6 inline-flex items-center gap-2.5">
              <span className="pill-badge">New</span>
              <span className="text-[15px] font-semibold text-accent">{orbitAi.name} for Chrome</span>
            </p>
            <h2 className="mt-4 text-balance text-h2 font-semibold leading-[1.06] tracking-display text-fg">
              An AI assistant on every tab you open.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lead leading-normal text-fg-muted">
              Orbit is our own AI assistant — built, shipped and run by DA Orbit. It sits in Chrome&apos;s side
              panel and answers questions about whatever page you&apos;re on.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={orbitAi.extension} size="lg">
                Add to Chrome
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                Build AI into your product
              </Button>
            </div>
            <p className="mt-3 text-[12px] text-fg-faint">Free. Works in Chrome, Edge and Brave.</p>
          </Reveal>

          <Reveal delay={1}>
            <OrbitChatPreview />
          </Reveal>
        </div>

        <ul className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <li key={title} className="group bg-surface-elevated p-6 transition-colors duration-200 hover:bg-surface">
              <div className="flex items-center gap-2.5">
                <Icon
                  className="h-4 w-4 shrink-0 text-fg-faint transition-colors duration-200 group-hover:text-accent"
                  aria-hidden="true"
                />
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-fg">{title}</h3>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OrbitAiSection;
