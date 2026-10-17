export const site = {
  name: "DA Orbit",
  legalName: "DA Orbit",
  url: "https://www.daorbit.in",
  email: "daorbit2k25@gmail.com",
  location: "Delhi, India",
  description:
    "A senior product studio that designs, builds and runs web platforms, mobile apps and cloud infrastructure — and ships its own products too.",
  socials: [
    { label: "X", href: "https://x.com/daorbit2k25" },
    { label: "GitHub", href: "https://github.com/daorbit" },
    { label: "LinkedIn", href: "https://linkedin.com/company/daorbit" },
  ],
};

export type Tone = "blue" | "green" | "violet" | "amber";

export interface Product {
  id: string;
  name: string;
  logo: string;
  shot: string;
  href: string;
  host: string;
  tone: Tone;
  tagline: string;
  title: string;
  body: string;
  free?: boolean;
}

export const products: Product[] = [
  {
    id: "quantalog",
    name: "Quantalog",
    logo: "/products/quantalog.png",
    shot: "/products-showcase/quantalog-image.png",
    href: "https://quantalog.daorbit.in",
    host: "quantalog.daorbit.in",
    tone: "blue",
    tagline: "Privacy-first analytics you can embed anywhere.",
    title: "Analytics without the cookie banner.",
    body: "Real-time dashboards, SEO audits and a multi-tenant API you can ship to your own users.",
  },
  {
    id: "qr-studio",
    name: "QR Studio",
    logo: "/products/qr-studio.png",
    shot: "/products-showcase/qr-studio.png",
    href: "https://qr.daorbit.in/",
    host: "qr.daorbit.in",
    tone: "green",
    tagline: "Branded, trackable QR codes with scan analytics.",
    title: "QR codes that report back.",
    body: "Branded codes for links, vCards and Wi-Fi — with scans broken down by country and device.",
  },
  {
    id: "frame-set",
    name: "Da Frame Set",
    logo: "/products/da-frame-set.svg",
    shot: "/products-showcase/frame-set.png",
    href: "https://da-frame-set.daorbit.in/",
    host: "da-frame-set.daorbit.in",
    tone: "violet",
    tagline: "Visual builder that exports clean React code.",
    title: "Drag. Preview. Export React.",
    body: "Drop pre-built sections on a canvas, check every breakpoint, and export clean, modular code.",
    free: true,
  },
  {
    id: "text-editor",
    name: "Da Text Editor",
    logo: "/products/da-text-editor.png",
    shot: "/products-showcase/da-text-editor.png",
    href: "https://da-text-editor.daorbit.in/",
    host: "da-text-editor.daorbit.in",
    tone: "amber",
    tagline: "A drop-in rich-text editor for React apps.",
    title: "Rich text, minus the setup.",
    body: "A drop-in React editor with structured, serialisable content and a clean API.",
    free: true,
  },
];
