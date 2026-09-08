"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export interface ProductSectionProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: { src: string; alt: string };
  cta: { label: string; href: string };
  /** Which side the screenshot sits on at lg and up. Alternate down the page. */
  imageSide?: "left" | "right";
  /** Alternate between the two page surfaces so sections read as bands. */
  surface?: "base" | "subtle";
}

const ProductSection: React.FC<ProductSectionProps> = ({
  name,
  tagline,
  description,
  features,
  image,
  cta,
  imageSide = "left",
  surface = "base",
}) => {
  const imageFirst = imageSide === "left";

  return (
    <section
      className={`py-16 lg:py-24 border-t border-border ${
        surface === "subtle" ? "bg-surface-subtle" : "bg-surface"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: imageFirst ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`order-2 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="rounded-2xl border border-border bg-surface-elevated shadow-[var(--shadow-card)] p-6">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: imageFirst ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`order-1 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-fg">
                  {name}
                </h2>
                <p className="text-lg text-accent font-medium">{tagline}</p>
              </div>

              <p className="text-base text-fg-muted leading-relaxed">
                {description}
              </p>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-faint mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-accent-soft border border-accent-border/50 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-fg-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-accent-fg text-sm font-medium rounded-xl shadow-[var(--shadow-card)] transition-colors duration-200"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
