// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/app/contexts/ThemeContex";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
