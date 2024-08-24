"use client";
import { Plane } from "../icons/Icons";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          I am <span className={styles.name}>Climax Mba</span>,{" "}
          <span className={styles.role}>Frontend Developer</span>.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          tempora illo repudiandae? Similique saepe quo quae iusto esse officia
          quod quidem inventore, aperiam aliquam non praesentium laudantium,
          perspiciatis labore reprehenderit omnis tenetur consequatur facilis
          vitae molestias a quasi veritatis. Natus!
        </p>
        <button type="button" className="icon-btn">
          Contact Me <Plane />
        </button>
      </div>
      <div className={styles.imageContainer}>
        <span>IMG</span>
      </div>
    </section>
  );
}
