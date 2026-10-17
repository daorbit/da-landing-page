import React from "react";
import { ChevronRight } from "lucide-react";
import SmartLink from "./SmartLink";

interface AnnouncementPillProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const AnnouncementPill: React.FC<AnnouncementPillProps> = ({ href, label, children, className = "" }) => (
  <SmartLink
    href={href}
    className={`group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1 pl-1 pr-3 text-[13px] text-fg-muted backdrop-blur transition-colors duration-200 hover:border-border-strong hover:text-fg ${className}`}
  >
    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">{label}</span>
    {children}
    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
  </SmartLink>
);

export default AnnouncementPill;
