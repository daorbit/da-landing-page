import React from "react";
import { ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import SmartLink from "../ui/SmartLink";
import ThemeToggle from "../ThemeToggle";
import { products, site } from "../../data/site";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Web platforms" },
      { href: "/#services", label: "Mobile apps" },
      { href: "/#services", label: "Cloud & DevOps" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Our products",
    links: products.map((p) => ({ href: p.href, label: p.name })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/#process", label: "Process" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/blogs", label: "Blog" },
    ],
  },
  {
    title: "Connect",
    links: site.socials.map((s) => ({ href: s.href, label: s.label })),
  },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-6 sm:pt-14 lg:px-10">
      <div className="mb-12 flex flex-col gap-5 border-b border-border pb-10 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:pb-14">
        <p className="text-balance text-[1.75rem] font-semibold leading-tight tracking-display text-fg sm:text-[2.25rem]">
          Have an idea? <span className="text-fg-faint">Let&apos;s build it.</span>
        </p>
        <Button href="/#contact" size="lg" className="self-start sm:self-auto">
          Start a project
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-fg-muted">{site.description}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-fg-muted">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Taking new projects
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-[13px] font-semibold text-fg">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <SmartLink href={link.href} className="text-[13px] text-fg-muted transition-colors hover:text-fg">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="footer-wordmark mt-12 sm:mt-20" aria-hidden="true">
        {site.name}
      </p>

      <div className="flex flex-col gap-5 border-t border-border py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-8">
        <nav aria-label="Legal" className="lg:order-2">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-center lg:gap-x-8">
            {legal.map((link) => (
              <li key={link.label}>
                <SmartLink href={link.href} className="text-[13px] text-fg transition-colors hover:text-fg-muted lg:text-[14px]">
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-4 lg:contents">
          <p className="text-[13px] text-fg-muted lg:order-1 lg:text-[14px]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="lg:order-3">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-4xl pb-8 text-[11px] leading-relaxed text-fg-faint sm:pb-10 sm:text-center">
        {site.name} is a product and engineering studio based in {site.location}. For project enquiries or anything
        else, write to{" "}
        <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-fg">
          {site.email}
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
