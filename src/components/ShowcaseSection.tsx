import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProductTile from "./showcase/ProductTile";
import { products } from "../data/site";

const ShowcaseSection: React.FC = () => (
  <section id="products" className="section-y">
    <SectionHeading
      eyebrow="Built in-house"
      title="The proof is in production."
      body="Alongside client work, we build and run our own products — the same engineering we bring to your project, live for anyone to try."
      className="px-4"
    />

    <div className="mx-auto mt-10 grid max-w-[90rem] gap-3 px-3 sm:mt-16 sm:px-4 lg:grid-cols-2">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % 2) as 0 | 1}>
          <ProductTile product={product} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default ShowcaseSection;
