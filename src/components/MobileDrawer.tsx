import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navEntries, type MenuLink } from './Layout/navMenu';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (link: MenuLink) => void;
}

const rowClass =
  'group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-surface-subtle';

/** One drawer row — the same shape as a mega-menu row, stacked full width. */
const Row: React.FC<{ link: MenuLink; onNavigate: (link: MenuLink) => void }> = ({
  link,
  onNavigate,
}) => {
  const body = (
    <>
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-inset text-fg-muted group-hover:border-accent-border group-hover:text-accent transition-colors">
        <link.icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center text-sm font-semibold text-fg">
          {link.label}
          {link.badge && (
            <span className="ml-2 rounded-full border border-accent-border bg-accent-soft px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-accent">
              {link.badge}
            </span>
          )}
          {link.external && (
            <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-fg-faint" />
          )}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-fg-subtle">
          {link.description}
        </span>
      </span>
    </>
  );

  if (link.external && link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={rowClass}
        onClick={() => onNavigate(link)}
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

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  return (
    <div
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
      className="md:hidden fixed top-0 right-0 h-full w-[22rem] max-w-[88vw] bg-surface border-l border-border shadow-2xl z-50 overflow-y-auto"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface p-4 pt-6">
        <h2 className="text-lg font-semibold text-fg">Menu</h2>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-subtle hover:text-accent hover:border-accent-border transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <nav className="px-3 py-4">
        {navEntries.map((entry) =>
          entry.columns ? (
            <div key={entry.label} className="mb-5">
              <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-eyebrow text-fg-faint">
                {entry.label}
              </p>
              {entry.columns.flatMap((column) =>
                column.links.map((link) => (
                  <Row key={link.label} link={link} onNavigate={onNavigate} />
                ))
              )}
            </div>
          ) : (
            <Link
              key={entry.label}
              href={entry.href!}
              onClick={() => onNavigate({ label: entry.label, href: entry.href } as MenuLink)}
              className="block rounded-xl px-3 py-3 text-sm font-semibold text-fg hover:bg-surface-subtle transition-colors"
            >
              {entry.label}
            </Link>
          )
        )}

        <a
          href="#contact"
          onClick={() => onNavigate({ label: 'Contact', id: 'contact' } as MenuLink)}
          className="mt-3 flex items-center justify-center rounded-full bg-cta px-5 py-3 text-sm font-medium text-cta-fg hover:bg-cta-hover transition-colors"
        >
          Start a project
        </a>
      </nav>
    </div>
  );
};

export default MobileDrawer;
