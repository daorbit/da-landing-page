import React from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Snappixy", href: "https://snappixy.daorbit.in/" },
  { name: "The Techodio", href: "https://techodio.daorbit.in/" },
  { name: "Quantalog", href: "https://quantalog.daorbit.in" },
  { name: "Da Text Editor", href: "https://da-text-editor.daorbit.in/" },
  { name: "Da Frame Set", href: "https://da-frame-set.daorbit.in/" },
];

const TrustSection: React.FC = () => {
  return (
    <section className="border-y border-border bg-surface-subtle py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-fg-faint shrink-0">
            Products we've built & ship
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {products.map((product, i) => (
              <motion.a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-sm font-medium text-fg-subtle hover:text-accent transition-colors duration-200"
              >
                {product.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
