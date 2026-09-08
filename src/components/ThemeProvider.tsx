"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "da-orbit-theme";

interface ThemeContextValue {
  theme: Theme;
  /** True until the client has read the stored/system preference. */
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  mounted: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

/**
 * Runs before paint so the correct theme class is on <html> on first render —
 * without it the light palette flashes before hydration. Kept in sync with the
 * storage key and class names used below.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.style.colorScheme=t;}catch(e){}})();`;

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initial: Theme = "light";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        initial = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initial = "dark";
      }
    } catch {
      // Storage unavailable (private mode, blocked cookies) — fall back to light.
    }
    setThemeState(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  // Follow the OS only while the user has not made an explicit choice.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        // ignore
      }
      const next: Theme = event.matches ? "dark" : "light";
      setThemeState(next);
      applyTheme(next);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "light" : "dark"
    );
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, mounted, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
