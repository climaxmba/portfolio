"use client";

import skills from "@/app/assets/data/skillsData";
import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.container}>
      <h2>What I work with</h2>
      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <li key={skill.text}>
            <skill.Icon />
            <span>{skill.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
