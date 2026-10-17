import React from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const Eyebrow: React.FC<{ children: React.ReactNode; dot?: boolean }> = ({ children, dot }) => (
  <p className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent sm:text-[17px]">
    {dot && <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
    {children}
  </p>
);

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
}) => {
  const centered = align === "center";

  return (
    <Reveal className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance text-h2 font-semibold leading-[1.06] tracking-display text-fg">
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-pretty text-lead leading-normal text-fg-muted ${centered ? "mx-auto" : ""}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
