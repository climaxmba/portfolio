"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-300 backdrop-blur-md flex justify-center border-neutral-200 dark:border-neutral-800
        ${
          isScrolled
            ? "top-4 inset-x-4 md:inset-x-8 lg:inset-x-12 rounded-2xl bg-white/90 dark:bg-neutral-900/90 shadow-xl border border-neutral-200/60 dark:border-neutral-800/60"
            : "top-0 inset-x-0"
        }`}
        // bg-white/80 dark:bg-neutral-950/80 border-b
      >
        <div className="w-full max-w-7xl px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              C
            </div>
            <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Climax Mba
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink id="home" label="Home" scrollToSection={scrollToSection} />
            <NavLink
              id="about"
              label="About"
              scrollToSection={scrollToSection}
            />
            <NavLink
              id="projects"
              label="Projects"
              scrollToSection={scrollToSection}
            />
            <NavLink
              id="experience"
              label="Experience"
              scrollToSection={scrollToSection}
            />
            <NavLink
              id="contact"
              label="Contact"
              isButton={true}
              scrollToSection={scrollToSection}
            />

            {/* Dark Mode Toggle */}
            <ThemeSwitch />
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitch />
            <button
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden z-100 size-screen fixed inset-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg p-4 flex flex-col gap-4 shadow-xl overflow-hidden transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-10 mt-16">
          <NavLink id="home" label="Home" scrollToSection={scrollToSection} />
          <NavLink id="about" label="About" scrollToSection={scrollToSection} />
          <NavLink
            id="projects"
            label="Projects"
            scrollToSection={scrollToSection}
          />
          <NavLink
            id="experience"
            label="Experience"
            scrollToSection={scrollToSection}
          />
          <NavLink
            id="contact"
            label="Contact"
            isButton={true}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </>
  );
}
