"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { Plane } from "../icons/Icons";
import profileImage from "../../assets/profile.webp";
import styles from "./about.module.scss";

export default function About() {
  const roles = [
    "Frontend Web Developer.",
    "React Developer.",
    "Software Engineer.",
  ];
  return (
    <section id="about" className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          I am <span className={styles.name}>Climax Mba</span>,<br />a{" "}
          <ReactTyped
            className={styles.role}
            strings={roles}
            typeSpeed={180}
            backDelay={3500}
            loop
          />
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          tempora illo repudiandae? Similique saepe quo quae iusto esse officia
          quod quidem inventore, aperiam aliquam non praesentium laudantium,
          perspiciatis labore reprehenderit omnis tenetur consequatur facilis
          vitae molestias a quasi veritatis. Natus!
        </p>
        <Link href="/#contact">
          <button type="button" className="icon-btn">
            Contact Me <Plane />
          </button>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${profileImage.src})` }}
        className={styles.imageContainer}
      ></div>
    </section>
  );
}
