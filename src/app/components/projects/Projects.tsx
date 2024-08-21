"use client";
import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.description}>
            <h3>Shopping Cart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum unde, reiciendis incidunt soluta ipsam atque minus
              placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque
              laborum ducimus veritatis recusandae?
            </p>
            <div className={styles.buttonsContainer}>
              <button className={styles.sourceCode}>Source Code</button>
              <button className={styles.viewLive}>View Live</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.desktop}>
              Desktop<div className={styles.mobile}>Mobile</div>
            </div>
          </div>
        </div>
        
        <div className={styles.project}>
          <div className={styles.description}>
            <h3>Shopping Cart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum unde, reiciendis incidunt soluta ipsam atque minus
              placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque
              laborum ducimus veritatis recusandae?
            </p>
            <div className={styles.buttonsContainer}>
              <button className={styles.sourceCode}>Source Code</button>
              <button className={styles.viewLive}>View Live</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.desktop}>
              Desktop<div className={styles.mobile}>Mobile</div>
            </div>
          </div>
        </div>
        
        <div className={styles.project}>
          <div className={styles.description}>
            <h3>Shopping Cart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum unde, reiciendis incidunt soluta ipsam atque minus
              placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque
              laborum ducimus veritatis recusandae?
            </p>
            <div className={styles.buttonsContainer}>
              <button className={styles.sourceCode}>Source Code</button>
              <button className={styles.viewLive}>View Live</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.desktop}>
              Desktop<div className={styles.mobile}>Mobile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
