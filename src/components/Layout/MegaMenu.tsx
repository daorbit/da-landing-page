"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MenuColumn, MenuLink } from "./navMenu";

interface MegaMenuProps {
  columns: MenuColumn[];
  onNavigate: (link: MenuLink) => void;
}

const badgeClass =
  "ml-2 rounded-full bg-accent-soft border border-accent-border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-accent align-middle";

/** One row: icon tile, title, and the line of description under it. */
const Row: React.FC<{ link: MenuLink; onNavigate: (link: MenuLink) => void }> = ({
  link,
  onNavigate,
}) => {
  const body = (
    <>
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-inset text-fg-muted transition-colors duration-200 group-hover/row:border-accent-border group-hover/row:bg-accent-soft group-hover/row:text-accent">
        {link.logo ? (
          <Image
            src={link.logo}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        ) : link.icon ? (
          <link.icon className="h-[18px] w-[18px]" />
        ) : null}
      </span>
      <span className="min-w-0">
        <span className="flex items-center text-sm font-semibold text-fg">
          {link.label}
          {link.badge && <span className={badgeClass}>{link.badge}</span>}
          {link.external && (
            <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-fg-faint transition-transform duration-200 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-accent" />
          )}
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-fg-subtle">
          {link.description}
        </span>
      </span>
    </>
  );

  const rowClass =
    "group/row flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors duration-200 hover:bg-surface-inset/70";

  if (link.external && link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={rowClass}
      >
        {body}
      </a>
    );
  }

  if (link.href) {
    return (
      <Link href={link.href} className={rowClass} onClick={() => onNavigate(link)}>
        {body}
      </Link>
    );
  }

  return (
    <button type="button" className={rowClass} onClick={() => onNavigate(link)}>
      {body}
    </button>
  );
};

/**
 * The dropdown panel. Rendered inside the trigger's <li>, which owns the
 * hover/focus state, so the panel opens and closes with the whole group.
 */
const MegaMenu: React.FC<MegaMenuProps> = ({ columns, onNavigate }) => {
  return (
    /* Centred on the viewport rather than on its trigger: the triggers sit at
       different offsets across the bar, and anchoring to each one made the
       panel swing left and right as you moved between them. */
    <div className="fixed left-1/2 top-[var(--header-h,4.25rem)] z-50 hidden w-max -translate-x-1/2 pt-3 md:group-hover/nav:block md:group-focus-within/nav:block">
      {/* Opaque, not glass: a translucent panel over the hero lets the headline
          read through the menu text. */}
      <div className="edge-lit grid max-w-[46rem] grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-border bg-surface-elevated p-4 shadow-[var(--shadow-lift)]">
        {columns.map((column) => (
          <div key={column.heading} className="min-w-[19rem]">
            <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-eyebrow text-fg-faint">
              {column.heading}
            </p>
            {column.links.map((link) => (
              <Row key={link.label} link={link} onNavigate={onNavigate} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
