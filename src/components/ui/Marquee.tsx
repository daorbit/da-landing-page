import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  slow?: boolean;
  label?: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, reverse, slow, label, className = "" }) => (
  <div
    className={`marquee ${reverse ? "marquee--reverse" : ""} ${slow ? "marquee--slow" : ""} ${className}`}
    aria-label={label}
    role={label ? "list" : undefined}
  >
    <div className="marquee__group">{children}</div>
    <div className="marquee__group" aria-hidden="true">
      {children}
    </div>
  </div>
);

export default Marquee;
