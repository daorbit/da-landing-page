import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import type { Product } from "../../data/site";

const ProductTile: React.FC<{ product: Product }> = ({ product }) => (
  <article className={`product-tile tone-${product.tone}`}>
    <div className="flex flex-col items-center px-6 pt-10 text-center sm:pt-14">
      <p className="inline-flex items-center gap-2 text-[15px] font-semibold text-fg-muted">
        <img src={product.logo} alt="" className="h-5 w-5 rounded object-contain" />
        {product.name}
        {product.free && <span className="pill-badge">Free</span>}
      </p>
      <h3 className="mt-3 text-balance text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg sm:text-[2.5rem]">
        {product.title}
      </h3>
      <p className="mt-3 max-w-md text-pretty text-[15px] text-fg-muted sm:text-[17px]">{product.body}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        <Button href={product.href}>
          Visit {product.name}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Button>
        <Button href="/#contact" variant="secondary">
          Build one like it
        </Button>
      </div>
    </div>

    <div className="product-tile__frame">
      <img src={product.shot} alt={`${product.name} screenshot`} loading="lazy" className="product-tile__shot" />
    </div>
  </article>
);

export default ProductTile;
