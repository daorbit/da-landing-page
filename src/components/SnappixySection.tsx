import React from "react";
import ProductSection from "./ProductSection";

const SnappixySection: React.FC = () => (
  <ProductSection
    name="Snappixy"
    tagline="AI Image Magic"
    description="Transform your creative vision into reality with Snappixy's cutting-edge AI technology. Our powerful image generation and editing platform empowers creators, designers, and businesses to produce stunning visuals effortlessly."
    features={[
      "AI-powered image generation and editing",
      "Intuitive drag-and-drop interface",
      "Professional-grade templates and assets",
      "Real-time collaboration tools",
      "Export in multiple formats (PNG, JPG, SVG)",
      "Advanced editing tools and filters",
    ]}
    image={{ src: "/snappixy.png", alt: "Snappixy - AI Image Magic" }}
    cta={{ label: "Try Snappixy Now", href: "https://snappixy.daorbit.in/" }}
    imageSide="left"
    surface="subtle"
  />
);

export default SnappixySection;
