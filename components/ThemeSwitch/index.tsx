"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  useEffect(() => {
    if (isDarkMode === null)
      setIsDarkMode(matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDarkMode]);

  const handleModeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={handleModeSwitch}
      className="p-2 text-neutral-500 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
