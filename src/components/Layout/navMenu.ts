import { products, site } from "../../data/site";

export interface MenuLink {
  label: string;
  href: string;
  external?: boolean;
  logo?: string;
  badge?: string;
}

export interface MenuColumn {
  heading: string;
  links: MenuLink[];
}

export interface NavEntry {
  label: string;
  href?: string;
  primary?: MenuColumn;
  secondary?: MenuColumn[];
}

const productLinks: MenuLink[] = products.map((p) => ({
  label: p.name,
  href: p.href,
  external: true,
  logo: p.logo,
  badge: p.free ? "Free" : undefined,
}));

const startColumn: MenuColumn = {
  heading: "Get started",
  links: [
    { label: "Start a project", href: "/#contact" },
    { label: "Engagement models", href: "/#pricing" },
    { label: `Email ${site.name}`, href: `mailto:${site.email}`, external: true },
  ],
};

export const navEntries: NavEntry[] = [
  {
    label: "Services",
    primary: {
      heading: "What we build",
      links: [
        { label: "Web platforms", href: "/#services" },
        { label: "Mobile apps", href: "/#services" },
        { label: "Cloud & DevOps", href: "/#services" },
        { label: "AI features", href: "/#services" },
      ],
    },
    secondary: [
      {
        heading: "How we work",
        links: [
          { label: "Our process", href: "/#process" },
          { label: "All services", href: "/services" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      startColumn,
    ],
  },
  {
    label: "Products",
    primary: { heading: `Built in-house by ${site.name}`, links: productLinks },
    secondary: [
      {
        heading: "Explore",
        links: [
          { label: "All products", href: "/#products" },
          { label: "Free developer tools", href: "/#products" },
        ],
      },
      startColumn,
    ],
  },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blogs" },
];
