import React from "react";
import Link from "next/link";

interface SmartLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  ariaLabel?: string;
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

const SmartLink: React.FC<SmartLinkProps> = ({ href, className, children, onClick, ariaLabel }) => {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};

export default SmartLink;
