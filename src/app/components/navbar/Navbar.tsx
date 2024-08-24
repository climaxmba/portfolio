"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import HashNavLink from "../hashNavLink/HashNavLink";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Image alt="Logo" src="/next.svg" width={40} height={40} />

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

      <button className="icon-wrapper">Dark Mode</button>
    </nav>
  );
}
