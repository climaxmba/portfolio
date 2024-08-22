"use client";

import experiences from "@/app/assets/data/experienceData";

import styles from "./experience.module.scss";
import Image from "next/image";

export default function Experience() {
  return (
    <section className={styles.container}>
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience, i) => (
          <li key={i}>
            <h3>{experience.role}</h3>
            <a href={experience.company.url} className={styles.company}>
              <Image
                alt="Company's Logo"
                src={experience.company.image.src}
                height={30}
                width={30}
              />
              {experience.company.name}
            </a>
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
