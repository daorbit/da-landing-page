"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle";

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

  const handleNavigation = (item: any) => {
    if (item.id) {
      scrollToSection(item.id);
    } else {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "features" },
    { label: "About", id: "about" },
    { label: "Blog", href: "/blogs" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contacts", id: "contact" },
  ];

  return (
    <header
      className={`glass-strong fixed top-0 left-0 right-0 z-50 text-fg transition-all duration-300 will-change-transform backdrop-blur-xl ${
        scrolled
          ? "border-b border-border shadow-[var(--shadow-soft)]"
          : "border-b border-transparent"
      }`}
      style={{
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
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
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
            <span className="text-lg font-semibold tracking-tight text-fg">
              DA Orbit
            </span>
          </div>

          {/* Desktop Navigation — a single inset pill keeps the bar visually
              anchored instead of floating free-standing links. */}
          <ul className="hidden md:flex list-none m-0 p-1 gap-1 rounded-full border border-border bg-surface-inset/70">
            {navItems.map((item) => (
              <li key={item.href || item.id}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-1.5 font-medium text-sm text-fg-muted hover:bg-surface-elevated hover:text-fg transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="rounded-full px-4 py-1.5 font-medium text-sm text-fg-muted hover:bg-surface-elevated hover:text-fg transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden md:inline-flex items-center rounded-lg bg-cta px-4 py-2 text-sm font-medium text-cta-fg hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
            >
              Get in touch
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
