import React from "react";

const products = [
  { name: "Snappixy", href: "https://snappixy.daorbit.in/" },
  { name: "The Techodio", href: "https://techodio.daorbit.in/" },
  { name: "Quantalog", href: "https://quantalog.daorbit.in" },
  { name: "Da Text Editor", href: "https://da-text-editor.daorbit.in/" },
  { name: "Da Frame Set", href: "https://da-frame-set.daorbit.in/" },
];

const TrustSection: React.FC = () => {
  return (
    <section className="border-y border-border bg-surface-subtle/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-eyebrow text-fg-faint">
          Products we&apos;ve built &amp; ship
        </p>

        {/* The list is rendered twice so the -50% translate loops seamlessly. */}
        <div className="marquee-mask mt-6 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 pr-12">
            {[...products, ...products].map((product, i) => (
              <a
                key={`${product.name}-${i}`}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= products.length}
                tabIndex={i >= products.length ? -1 : undefined}
                className="shrink-0 text-base font-medium text-fg-subtle hover:text-fg transition-colors duration-200"
              >
                {product.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
