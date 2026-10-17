import React from "react";
import SmartLink from "./SmartLink";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const variants: Record<Variant, string> = {
  primary: "bg-cta text-cta-fg hover:bg-cta-hover",
  secondary: "text-fg ring-1 ring-inset ring-border-strong hover:bg-surface-subtle",
  accent: "bg-accent text-accent-fg hover:bg-accent-hover",
  ghost: "text-accent hover:underline hover:underline-offset-4",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[14px]",
  lg: "h-11 px-6 text-[15px] sm:h-12 sm:px-7",
};

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => (
  <SmartLink
    href={href}
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${variant === "ghost" ? "" : sizes[size]} ${className}`}
  >
    {children}
  </SmartLink>
);

export default Button;
