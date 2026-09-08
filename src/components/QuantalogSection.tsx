import React from "react";
import ProductSection from "./ProductSection";

const QuantalogSection: React.FC = () => (
  <ProductSection
    name="Quantalog"
    tagline="Real-time analytics you can embed"
    description="A privacy-first analytics platform with real-time dashboards, built-in SEO audits, and a multi-tenant API. See who visits, find what's holding your pages back, and ship it all to your own users."
    features={[
      "Real-time visitor and pageview dashboards",
      "Cookieless tracking, no consent banner required",
      "Built-in SEO audits with Core Web Vitals scoring",
      "Custom events, funnels, and conversion goals",
      "Embeddable API for white-label analytics",
    ]}
    image={{
      src: "/quantalog-logo.png",
      alt: "Quantalog - Real-time Web Analytics",
    }}
    cta={{ label: "Explore Quantalog", href: "https://quantalog.daorbit.in" }}
    imageSide="left"
    surface="subtle"
  />
);

export default QuantalogSection;
