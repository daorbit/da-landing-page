import React from "react";
import { ArrowUpRight } from "lucide-react";
import SmartLink from "../ui/SmartLink";
import type { MenuColumn } from "./navMenu";

interface MegaMenuProps {
  primary: MenuColumn;
  secondary: MenuColumn[];
  onNavigate: (el: HTMLElement) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ primary, secondary, onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => onNavigate(e.currentTarget);

  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] gap-12 px-12 pb-14 pt-8">
      <div>
        <p className="menu-reveal text-[12px] text-fg-faint">{primary.heading}</p>
        <ul className="mt-4 space-y-2.5">
          {primary.links.map((link) => (
            <li key={link.label} className="menu-reveal">
              <SmartLink
                href={link.href}
                onClick={handleClick}
                className="group/link inline-flex items-center gap-3 text-[24px] font-semibold leading-tight tracking-tight text-fg transition-colors hover:text-accent"
              >
                {link.logo && <img src={link.logo} alt="" className="h-6 w-6 rounded-md object-contain" />}
                {link.label}
                {link.badge && <span className="pill-badge">{link.badge}</span>}
                {link.external && (
                  <ArrowUpRight className="h-4 w-4 text-fg-faint transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent" />
                )}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      {secondary.map((col) => (
        <div key={col.heading}>
          <p className="menu-reveal text-[12px] text-fg-faint">{col.heading}</p>
          <ul className="mt-4 space-y-3">
            {col.links.map((link) => (
              <li key={link.label} className="menu-reveal">
                <SmartLink
                  href={link.href}
                  onClick={handleClick}
                  className="text-[14px] font-medium text-fg transition-colors hover:text-accent"
                >
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
