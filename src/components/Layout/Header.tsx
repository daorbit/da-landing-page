"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle";
import MegaMenu from "./MegaMenu";
import { navEntries, type MenuLink } from "./navMenu";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (router.pathname !== '/') {
      router.push('/#' + sectionId);
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleMenuNavigate = (link: MenuLink) => {
    if (link.id) {
      scrollToSection(link.id);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      /* At the top the bar is fully transparent so the hero's wash runs
         unbroken through it; it only grows a surface once you scroll. */
      className={`fixed top-0 left-0 right-0 z-50 text-fg transition-all duration-300 will-change-transform ${
        scrolled
          ? "border-b border-border bg-surface/90 backdrop-blur-xl shadow-[var(--shadow-soft)]"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <nav>
        {/* Three columns of equal weight so the nav sits optically centred in
            the bar regardless of how wide the logo or the actions get. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <div
            className="logo cursor-pointer flex items-center gap-2.5"
            onClick={() => {
              if (router.pathname !== '/') {
                router.push('/');
              } else {
                scrollToSection("hero");
              }
            }}
          >
            <img
              src="/favicon.png"
              alt="DA Orbit Logo"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-[19px] font-bold tracking-[-0.02em] text-fg">
              DA Orbit
            </span>
          </div>

          {/* Desktop Navigation. Each entry with columns is a hover/focus group
              that owns its own dropdown panel. */}
          <ul className="hidden md:flex list-none m-0 p-0 gap-2 justify-center">
            {navEntries.map((entry, index) => (
              <li
                key={entry.label}
                className="group/nav relative flex items-center"
              >
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="rounded-lg px-3.5 py-2 font-medium text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 font-medium text-sm text-fg-muted transition-colors duration-200 group-hover/nav:text-fg group-focus-within/nav:text-fg"
                    >
                      {entry.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/nav:rotate-180" />
                    </button>
                    <MegaMenu
                      columns={entry.columns!}
                      onNavigate={handleMenuNavigate}
                      align={index === 0 ? "left" : "center"}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />

            <a
              href="mailto:daorbit2k25@gmail.com"
              className="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-fg-muted hover:text-fg transition-colors duration-200"
            >
              Contact
            </a>

            {/* White pill on light, inverted on dark — the one button in the
                bar, kept neutral so the hero's indigo CTA stays the loudest
                thing on the page. */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden md:inline-flex items-center rounded-full border border-border bg-surface-elevated px-5 py-2 text-sm font-medium text-fg shadow-[var(--shadow-soft)] hover:border-border-strong transition-colors duration-200 cursor-pointer"
            >
              Start a project
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted hover:border-accent-border hover:text-accent transition-colors duration-200 cursor-pointer touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
