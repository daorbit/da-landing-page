import React from "react";

const GlowCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div onMouseMove={onMouseMove} className={`glow-card ${className}`}>
      <span className="glow-layer" aria-hidden="true" />
      {children}
    </div>
  );
};

export default GlowCard;
