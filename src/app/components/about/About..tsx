"use client";
import Link from "next/link";
import { Plane } from "../icons/Icons";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          I am <span className={styles.name}>Climax Mba</span>,<br />
          a Frontend <span className={styles.role}>React</span> Developer.
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
      <div className={styles.imageContainer}>
        <span>IMG</span>
      </div>
    </section>
  );
}
