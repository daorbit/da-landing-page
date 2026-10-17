import React from "react";
import { Eyebrow } from "./ui/SectionHeading";

const statement =
  "We're a small, senior team. We scope in writing, demo every week, and stay long after launch. No handoffs. No surprises. Just software that ships — and keeps working.";

const ManifestoSection: React.FC = () => (
  <section className="section-y">
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <Eyebrow>Why DA Orbit</Eyebrow>
      <p className="scroll-words mt-5 text-balance text-[1.875rem] font-semibold leading-[1.15] tracking-display sm:text-[2.75rem] lg:text-[3.5rem]">
        {statement.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            <span>{word}</span>{" "}
          </React.Fragment>
        ))}
      </p>
    </div>
  </section>
);

export default ManifestoSection;
