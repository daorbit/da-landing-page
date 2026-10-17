import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const options: { key: Theme; label: string; Icon: typeof Sun }[] = [
  { key: "light", label: "Light", Icon: Sun },
  { key: "dark", label: "Dark", Icon: Moon },
];

const ThemeToggle: React.FC = () => {
  const { theme, mounted, setTheme } = useTheme();

  return (
    <div
      className="theme-toggle"
      role="radiogroup"
      aria-label="Color theme"
      data-theme={mounted ? theme : undefined}
    >
      {mounted && <span className="theme-toggle__thumb" aria-hidden="true" />}
      {options.map(({ key, label, Icon }) => {
        const active = mounted && theme === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(key)}
            className={`theme-toggle__btn ${active ? "text-accent" : "text-fg-faint hover:text-fg-muted"}`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
