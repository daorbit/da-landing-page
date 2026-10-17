import React from "react";
import { useInView } from "react-intersection-observer";

type Tag = "div" | "li" | "article" | "section" | "figure";

interface RevealProps {
  children: React.ReactNode;
  as?: Tag;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  id?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, as: Component = "div", delay = 0, className = "", id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  return (
    <Component
      ref={ref}
      id={id}
      data-inview={inView || undefined}
      className={`reveal ${delay ? `reveal-d${delay}` : ""} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Reveal;
