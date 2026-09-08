"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  /** Product mark, pulled from each product's own site into /public/products. */
  logo: string;
  heading: string;
  description: string;
  image?: string;
  href: string;
  points: string[];
}

const tabs: Tab[] = [
  {
    id: "quantalog",
    label: "Quantalog",
    logo: "/products/quantalog.png",
    heading: "Quantalog: Analytics You Can Embed",
    description:
      "Privacy-first, cookieless analytics with real-time dashboards, built-in SEO audits, and a multi-tenant API you can ship to your own users.",
    image: "/products-showcase/quantalog-image.png",
    href: "https://quantalog.daorbit.in",
    points: [
      "Real-time visitors, pageviews, and sessions",
      "Cookieless — no consent banner needed",
      "SEO audits and user-journey tracking",
    ],
  },
  {
    id: "qr-studio",
    label: "QR Studio",
    logo: "/products/qr-studio.png",
    heading: "QR Studio: Trackable QR Codes",
    description:
      "Generate branded QR codes for links, vCards, WiFi, and more — then watch the scans come in with per-country and per-device analytics.",
    image: "/products-showcase/qr-studio.png",
    href: "https://qr.daorbit.in/",
    points: [
      "URL, vCard, WiFi, email, phone, and SMS",
      "Custom colours, patterns, and logos",
      "Scan analytics by location and device",
    ],
  },
  {
    id: "frame-set",
    label: "Da Frame Set",
    logo: "/products/da-frame-set.svg",
    heading: "Da Frame Set: Build Frames Faster",
    description:
      "A visual builder for React layouts — drag pre-built sections onto the canvas, preview them at every breakpoint, and export clean, modular code.",
    image: "/products-showcase/frame-set.png",
    href: "https://da-frame-set.daorbit.in/",
    points: [
      "Pre-built hero, features, and pricing sections",
      "Responsive preview across devices",
      "Exports clean, modular React code",
    ],
  },
  {
    id: "text-editor",
    label: "Da Text Editor",
    logo: "/products/da-text-editor.png",
    heading: "Da Text Editor: Rich Text For React",
    description:
      "A drop-in rich-text editing component for React — formatting, structured content, and a clean API, with no editor stack to assemble yourself.",
    image: "/products-showcase/da-text-editor.png",
    href: "https://da-text-editor.daorbit.in/",
    points: [
      "Drop-in React component",
      "Structured, serialisable content",
      "Free and open to use",
    ],
  },
];

/**
 * Dark, always-dark product showcase. The tab row swaps a single panel below
 * it — the section keeps its own dark surface in both themes so it reads as a
 * deliberate band rather than an inverted mistake.
 */
const ShowcaseSection: React.FC = () => {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="showcase"
      /* Lifted, rounded slab rather than a ruled edge — on dark the hero and
         this band are near-identical blacks, so tone and radius do the
         separating that a border otherwise would. */
      className="relative z-10 -mt-10 overflow-hidden rounded-t-[2.5rem] bg-[#131417] py-20 sm:py-24 md:py-28 text-white shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.55)]"
    >
      {/* Indigo bloom at the top edge, so the slab is lit where it meets the
          hero instead of reading as a flat black rectangle. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(99,102,241,0.22), transparent 70%), radial-gradient(ellipse 50% 80% at 12% 0%, rgba(236,72,153,0.10), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-semibold tracking-display">
            Products we&apos;ve built and ship
          </h2>
          <p className="mt-4 text-base text-white/60">
            Not a case-study list — these are live products we run ourselves,
            two of them free for anyone to use.
          </p>
        </div>

        {/* Tab row */}
        <div className="mt-10 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            className="flex min-w-max items-center justify-start gap-1 border-b border-white/10 sm:justify-center"
          >
            {tabs.map((item) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(item.id)}
                  className={`relative inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  <Image
                    src={item.logo}
                    alt=""
                    width={18}
                    height={18}
                    className={`h-[18px] w-[18px] rounded object-contain transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                  />
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="showcase-underline"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0b0d] p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src={tab.logo}
                      alt={`${tab.label} logo`}
                      width={26}
                      height={26}
                      className="h-[26px] w-[26px] rounded object-contain"
                    />
                  </span>
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-display">
                  {tab.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  {tab.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {tab.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={tab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors duration-200"
                  >
                    Visit {tab.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    Build something like this
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                  {tab.image ? (
                    <Image
                      src={tab.image}
                      alt={`${tab.label} product screenshot`}
                      width={1600}
                      height={1000}
                      className="h-auto w-full"
                    />
                  ) : (
                    /* Packages have no screenshot to show, so the mark stands
                       in rather than leaving an empty dashed box. */
                    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 rounded-xl bg-white/[0.03]">
                      <Image
                        src={tab.logo}
                        alt={`${tab.label} logo`}
                        width={72}
                        height={72}
                        className="h-16 w-16 object-contain opacity-90"
                      />
                      <span className="text-xs font-medium tracking-wide text-white/40">
                        npm package
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ShowcaseSection;
