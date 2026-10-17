import React from "react";

interface OrbitMarkProps {
  size?: number;
  alt?: string;
  className?: string;
}

const OrbitMark: React.FC<OrbitMarkProps> = ({ size = 20, alt = "", className = "" }) => {
  const hidden = alt ? undefined : true;

  return (
    <>
      <img
        src="/orbit-ai-light.webp"
        alt={alt}
        aria-hidden={hidden}
        width={size}
        height={size}
        className={`block shrink-0 object-contain dark:hidden ${className}`}
      />
      <img
        src="/orbit-ai-dark.webp"
        alt={alt}
        aria-hidden={hidden}
        width={size}
        height={size}
        className={`hidden shrink-0 object-contain dark:block ${className}`}
      />
    </>
  );
};

export default OrbitMark;
