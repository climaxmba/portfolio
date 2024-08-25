"use client";
import { ReactTyped } from "react-typed";
import styles from "./hero.module.scss";
import { GitHub, LinkedIn } from "../icons/Icons";

export default function Hero() {
  const roles = [
    "Frontend Developer.",
    "React Developer.",
    "Software Engineer.",
  ];

  return (
    <section id="hero" className={styles.container}>
      <h1 className={styles.header}>
        I am <span className={styles.name}>Climax Mba</span>,<br />
        <ReactTyped
          className={styles.role}
          strings={roles}
          typeSpeed={180}
          backDelay={3500}
          loop
        />
      </h1>
      <p>
        {`I'm Looking to build awesome things and collaborate with awesome people. 🙂`}
        <br />
        {`Let's create something amazing together! 🔥`}
      </p>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/climaxmba/"
          target="_blank"
          title="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/climaxmba" target="_blank" title="GitHub">
          <GitHub />
        </a>
      </div>
      <span className={styles.scroll}>Scroll 👇</span>
    </section>
  );
}
