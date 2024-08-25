"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HashNavLink from "../hashNavLink/HashNavLink";
import styles from "./navbar.module.scss";
import { Close, Dark, GitHub, Light, LinkedIn, Menu } from "../icons/Icons";
import NavbarProvider from "@/lib/NavbarContext";
import Icon from "@mdi/react";
import {
  mdiBriefcaseVariant,
  mdiClose,
  mdiEmailVariant,
  mdiFolderOpen,
  mdiTools,
  mdiTooltipAccount,
} from "@mdi/js";

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
      <Image alt="Logo" src="/logo.webp" width={40} height={40} />

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

      <div className={styles.mobileSeperator}></div>

      <button
        title="Toggle Theme"
        className="icon-wrapper"
        onClick={handleModeSwitch}
      >
        {isDarkMode ? <Light /> : <Dark />}
      </button>

      <MobileMenu />
    </nav>
  );
}

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <button className="icon-wrapper" onClick={() => setMenuOpen(true)}>
        <Menu />
      </button>

      {menuOpen ? (
        <div className={styles.menu}>
          <button onClick={() => setMenuOpen(false)} className="icon-wrapper">
            <Icon path={mdiClose} />
          </button>

          <h1>Climax Mba</h1>

          <NavbarProvider>
            <ul className={styles.links}>
              <li onClick={() => setMenuOpen(false)}>
                <HashNavLink href="/#about" activeClassName={styles.active}>
                  <Icon path={mdiTooltipAccount} />
                  About
                </HashNavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <HashNavLink href="/#projects" activeClassName={styles.active}>
                  <Icon path={mdiFolderOpen} />
                  Projects
                </HashNavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <HashNavLink href="/#skills" activeClassName={styles.active}>
                  <Icon path={mdiTools} />
                  Skills
                </HashNavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <HashNavLink
                  href="/#experience"
                  activeClassName={styles.active}
                >
                  <Icon path={mdiBriefcaseVariant} />
                  Experience
                </HashNavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <HashNavLink href="/#contact" activeClassName={styles.active}>
                  <Icon path={mdiEmailVariant} />
                  Contact
                </HashNavLink>
              </li>
            </ul>
          </NavbarProvider>

          <div className={styles.connect}>
            <p>Connect with me</p>
            <div>
              <a
                href="https://www.linkedin.com/in/climaxmba/"
                target="_blank"
                title="LinkedIn"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/climaxmba"
                target="_blank"
                title="GitHub"
              >
                <GitHub />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
