"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Image alt="Logo" src="/next.svg" width={40} height={40} />

      <ul className={styles.links}>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#projects">Projects</Link></li>
        <li><Link href="/#skills">Skills</Link></li>
        <li><Link href="/#experience">Experience</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>

      <button className="icon-wrapper">Dark Mode</button>
    </nav>
  );
}
