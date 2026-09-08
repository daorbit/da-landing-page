"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MonitorSmartphone, PenLine } from "lucide-react";
import GlowCard from "./GlowCard";

/**
 * Free, publicly usable developer tools. These ship without a screenshot asset,
 * so the cards lead with an icon rather than a product image.
 */
const tools = [
  {
    name: "Da Text Editor",
    tagline: "A rich-text editor for React",
    description:
      "A drop-in rich-text editing component for React apps — formatting, structured content, and a clean API, with no editor stack to assemble yourself.",
    href: "https://da-text-editor.daorbit.in/",
    icon: PenLine,
  },
  {
    name: "Da Frame Set",
    tagline: "Device mockup frames for React",
    description:
      "React components that wrap your web content in realistic device frames, so screenshots and live demos present the way your marketing pages need them to.",
    href: "https://da-frame-set.daorbit.in/",
    icon: MonitorSmartphone,
  },
];

const OpenToolsSection: React.FC = () => {
  return (
    <section
      id="tools"
      className="spotlight relative py-16 sm:py-20 md:py-24 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
            Free to use
          </p>
          <h2 className="text-h2 font-semibold tracking-display text-fg mb-4">
            Developer tools, open to everyone
          </h2>
          <p className="text-lead text-fg-muted max-w-2xl mx-auto">
            Small pieces we built for our own projects and released for anyone
            to use — no signup, no licence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="glass edge-lit group flex h-full flex-col rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-accent-soft border border-accent-border">
                    <tool.icon className="w-5 h-5 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-fg-faint transition-all duration-200 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                  {tool.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {tool.tagline}
                </p>
                <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                  {tool.description}
                </p>

                <span className="mt-6 inline-flex w-fit items-center rounded-full border border-border bg-surface-inset px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-fg-faint">
                  Free · React
                </span>
              </GlowCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenToolsSection;
