"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  useEffect(() => {
    if (isDarkMode === null)
      setIsDarkMode(matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) document.body.setAttribute("data-theme-dark", "");
    else document.body.removeAttribute("data-theme-dark");
  }, [isDarkMode]);

  const handleModeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <></>
  );
}
