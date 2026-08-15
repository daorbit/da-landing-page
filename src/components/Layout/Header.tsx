"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform bg-white/95 backdrop-blur-md text-gray-900 ${
        scrolled ? "shadow-sm border-b border-gray-200" : "border-b border-transparent"
      }`}
      style={{
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div
            className="logo cursor-pointer flex items-center gap-2"
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
            <span className="text-lg font-semibold tracking-tight text-gray-900">DA Orbit</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none m-0 p-0 gap-8">
            {navItems.map((item, index) => (
              <li key={item.href || item.id}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-medium text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className="font-medium text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer touch-manipulation text-gray-700 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
