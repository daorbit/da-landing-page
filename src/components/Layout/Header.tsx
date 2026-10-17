import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowRight, ChevronDown } from "lucide-react";
import Logo from "../ui/Logo";
import SmartLink from "../ui/SmartLink";
import MegaMenu from "./MegaMenu";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";
import { navEntries } from "./navMenu";
import { useScrolled } from "../../hooks/useScrolled";

const navLinkClass =
  "whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium text-fg-muted transition-colors duration-200 hover:bg-surface-subtle hover:text-fg";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const scrolled = useScrolled();
  const router = useRouter();

  const dismissMenu = (el: HTMLElement) => {
    el.blur();
    setDismissed(true);
    window.setTimeout(() => setDismissed(false), 400);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined} data-menu-open={open || undefined}>
      <div className="site-header__bar">
        <div className="flex flex-1 items-center">
          <Logo onClick={() => setOpen(false)} />
        </div>

        <nav className="hidden shrink-0 items-center gap-0.5 self-stretch lg:flex" aria-label="Main">
          {navEntries.map((entry) =>
            entry.primary ? (
              <div
                key={entry.label}
                className={`mega group flex h-full items-center ${dismissed ? "mega--dismissed" : ""}`}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-fg-muted transition-colors duration-200 group-hover:bg-surface-subtle group-hover:text-fg group-focus-within:text-fg"
                >
                  {entry.label}
                  <ChevronDown
                    className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </button>
                <div className="mega__panel">
                  <div className="mega__card">
                    <MegaMenu primary={entry.primary} secondary={entry.secondary ?? []} onNavigate={dismissMenu} />
                  </div>
                </div>
                <div className="mega__scrim" aria-hidden="true" />
              </div>
            ) : (
              <SmartLink key={entry.label} href={entry.href!} className={navLinkClass}>
                {entry.label}
              </SmartLink>
            )
          )}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {!open && (
            <SmartLink
              href="/#contact"
              className="inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-cta px-4 text-[13px] font-semibold text-cta-fg transition-colors duration-200 hover:bg-cta-hover"
            >
              Start a project
              <ArrowRight className="hidden h-3 w-3 sm:block" />
            </SmartLink>
          )}
          <MenuToggle open={open} onToggle={() => setOpen((v) => !v)} />
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Header;
