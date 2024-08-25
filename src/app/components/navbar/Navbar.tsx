"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HashNavLink from "../hashNavLink/HashNavLink";
import styles from "./navbar.module.scss";
import { Dark, Light } from "../icons/Icons";
import NavbarProvider from "@/lib/NavbarContext";

export default function Navbar() {
  const isUserChoiceDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(isUserChoiceDark);
  
  useEffect(() => {
    if (isDarkMode) document.body.setAttribute("data-theme-dark", "");
    else document.body.removeAttribute("data-theme-dark");
  }, [isDarkMode]);

  const handleModeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <Image alt="Logo" src="/next.svg" width={40} height={40} />

      <NavbarProvider>
        <ul className={styles.links}>
          <li>
            <HashNavLink href="/#about" activeClassName={styles.active}>
              About
            </HashNavLink>
          </li>
          <li>
            <HashNavLink href="/#projects" activeClassName={styles.active}>
              Projects
            </HashNavLink>
          </li>
          <li>
            <HashNavLink href="/#skills" activeClassName={styles.active}>
              Skills
            </HashNavLink>
          </li>
          <li>
            <HashNavLink href="/#experience" activeClassName={styles.active}>
              Experience
            </HashNavLink>
          </li>
          <li>
            <HashNavLink href="/#contact" activeClassName={styles.active}>
              Contact
            </HashNavLink>
          </li>
        </ul>
      </NavbarProvider>

      <button
        title="Toggle Theme"
        className="icon-wrapper"
        onClick={handleModeSwitch}
      >
        {isDarkMode ? <Light /> : <Dark />}
      </button>
    </nav>
  );
}
