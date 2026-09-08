import {
  BookOpen,
  Building2,
  Cloud,
  Code,
  LayoutTemplate,
  LifeBuoy,
  Mail,
  MonitorSmartphone,
  PenLine,
  Search,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface MenuLink {
  label: string;
  description: string;
  /** In-page section id, or an href for a route / external product. */
  id?: string;
  href?: string;
  external?: boolean;
  icon: LucideIcon;
  badge?: string;
}

export interface MenuColumn {
  heading: string;
  links: MenuLink[];
}

export interface NavEntry {
  label: string;
  /** A plain link when there are no columns to open. */
  href?: string;
  columns?: MenuColumn[];
}

/**
 * Desktop navigation. Entries with `columns` open a mega-menu panel; the rest
 * are plain links. The mobile drawer flattens the same data.
 */
export const navEntries: NavEntry[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Platforms",
        links: [
          {
            label: "Snappixy",
            description: "AI image generation and editing for creators.",
            href: "https://snappixy.daorbit.in/",
            external: true,
            icon: Sparkles,
          },
          {
            label: "The Techodio",
            description: "AI-powered audio intelligence and tech podcasts.",
            href: "https://techodio.daorbit.in/",
            external: true,
            icon: MonitorSmartphone,
          },
          {
            label: "Quantalog",
            description: "Privacy-first analytics you can embed anywhere.",
            href: "https://quantalog.daorbit.in",
            external: true,
            icon: Search,
          },
        ],
      },
      {
        heading: "Free developer tools",
        links: [
          {
            label: "Da Text Editor",
            description: "A drop-in rich-text editor for React apps.",
            href: "https://da-text-editor.daorbit.in/",
            external: true,
            icon: PenLine,
            badge: "FREE",
          },
          {
            label: "Da Frame Set",
            description: "Device mockup frames for React demos.",
            href: "https://da-frame-set.daorbit.in/",
            external: true,
            icon: LayoutTemplate,
            badge: "FREE",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        heading: "What we build",
        links: [
          {
            label: "MERN Development",
            description: "Full-stack web platforms on Mongo, Express, React, Node.",
            id: "features",
            icon: Code,
          },
          {
            label: "Mobile Applications",
            description: "Native and cross-platform apps for iOS and Android.",
            id: "features",
            icon: Smartphone,
          },
          {
            label: "Cloud & SEO",
            description: "Scalable infrastructure and organic growth strategy.",
            id: "features",
            icon: Cloud,
          },
        ],
      },
      {
        heading: "How we work",
        links: [
          {
            label: "Our Process",
            description: "Discovery, planning, development, launch.",
            id: "process",
            icon: Building2,
          },
          {
            label: "24/7 Support",
            description: "Round-the-clock maintenance after you ship.",
            id: "features",
            icon: LifeBuoy,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          {
            label: "Blog",
            description: "Insights on technology, business, and shipping software.",
            href: "/blogs",
            icon: BookOpen,
          },
          {
            label: "FAQ",
            description: "Timelines, pricing, ownership, and what happens after launch.",
            id: "faq",
            icon: LifeBuoy,
          },
        ],
      },
      {
        heading: "Company",
        links: [
          {
            label: "About DA Orbit",
            description: "Who we are and how we got here.",
            id: "about",
            icon: Building2,
          },
          {
            label: "Contact",
            description: "Free consultation and project estimate.",
            id: "contact",
            icon: Mail,
          },
        ],
      },
    ],
  },
];
