import React from "react";
import ProductSection from "./ProductSection";

const TheTechodioSection: React.FC = () => (
  <ProductSection
    name="The Techodio"
    tagline="AI-Powered Audio Intelligence"
    description="Revolutionize your audio content creation with The Techodio's advanced AI technology. Our intelligent platform transforms how you create, edit, and distribute podcasts, audiobooks, and digital audio content with unprecedented ease and quality."
    features={[
      "AI-powered content suggestions and recommendations",
      "Latest tech-related audio content and podcasts",
      "Multi-language audio support and accessibility",
      "Mini player for seamless listening experience",
      "Fully responsive design across all devices",
      "Curated tech news and insights in audio format",
    ]}
    image={{
      src: "/theTechodio.png",
      alt: "The Techodio - AI Audio Intelligence",
    }}
    cta={{
      label: "Explore The Techodio",
      href: "https://techodio.daorbit.in/",
    }}
    imageSide="right"
    surface="base"
  />
);

export default TheTechodioSection;
