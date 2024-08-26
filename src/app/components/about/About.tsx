"use client";
import profileImage from "../../assets/profile.webp";
import Link from "next/link";
import { Plane } from "../icons/Icons";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.header}>About Me</h1>
        
        <p>
          {`I am a collaborative team player with a proven track record of contributing
          to Open-Source projects. Eager to apply my technical skills and
          problem-solving abilities to real-world projects.
          My solid foundation in JavaScript and React equips me to contribute
          meaningfully to a variety of projects. I'm excited to join a dynamic
          team and leverage my skills to create innovative solutions.`}
        </p>
        <Link href="/#contact">
          <button type="button" className="icon-btn">
            Contact Me <Plane />
          </button>
        </Link>
      </div>

      <div
        role="img"
        style={{ backgroundImage: `url(${profileImage.src})` }}
        className={styles.imageContainer}
      ></div>
    </section>
  );
}
