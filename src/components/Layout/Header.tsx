"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "features" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        scrolled
          ? "bg-white bg-opacity-95 backdrop-blur-md shadow-lg text-gray-700"
          : "bg-black bg-opacity-30 backdrop-blur-sm text-white"
      }`}
      style={{
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="logo cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              // src="/favicon.png"
              src={!scrolled ? "/darkFavicon.png" : "/favicon.png"}
              alt="DA Orbit Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none m-0 p-0 gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-300 hover:text-purple-600 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-gray-700" : "text-white drop-shadow-lg"
                  }`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer touch-manipulation ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white drop-shadow-lg hover:bg-white hover:bg-opacity-20"
            }`}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
