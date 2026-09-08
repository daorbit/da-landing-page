"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-subtle transition-colors duration-200 hover:border-accent-border hover:text-accent cursor-pointer ${className}`}
    >
      {/* Both icons render; opacity swaps so there is no layout shift.
          Before mount neither is shown, keeping SSR and client markup equal. */}
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && !isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-50 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-50 opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
