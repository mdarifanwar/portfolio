"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="theme-toggle" aria-hidden="true">
        <Sun size={16} strokeWidth={1.8} />
      </div>
    );
  }

  const currentTheme = theme || resolvedTheme || "dark";
  const isDark = currentTheme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={16} strokeWidth={1.8} /> : <MoonStar size={16} strokeWidth={1.8} />}
    </button>
  );
}