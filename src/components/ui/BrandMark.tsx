import React from "react";
import type { SimpleIcon } from "simple-icons";

const isDark = (hex: string) => {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.3;
};

const BrandMark: React.FC<{ icon: SimpleIcon; className?: string }> = ({ icon, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
    fill={isDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
  >
    <path d={icon.path} />
  </svg>
);

export default BrandMark;
