"use client";

import experiences from "@/app/assets/data/experienceData";

import styles from "./experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.container}>
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience, i) => (
          <li key={i}>
            <h3>{experience.role}</h3>
            <p className={styles.company}>
              <a href={experience.company.url}>{experience.company.name}</a>
            </p>
            <p className={styles.periodLocation}>
              {experience.period} | {experience.location}
            </p>
            <p className={styles.description}>{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
