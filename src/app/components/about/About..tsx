"use client";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          tempora illo repudiandae? Similique saepe quo quae iusto esse officia
          quod quidem inventore, aperiam aliquam non praesentium laudantium,
          perspiciatis labore reprehenderit omnis tenetur consequatur facilis
          vitae molestias a quasi veritatis. Natus!
        </p>
        <button type="button">Contact Me</button>
      </div>
      <div className={styles.imageContainer}>
        <span>IMG</span>
      </div>
    </section>
  );
}
