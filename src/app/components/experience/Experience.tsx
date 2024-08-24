"use client";

import experiences from "@/app/assets/data/experienceData";
import Image from "next/image";

import styles from "./experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2>Experience</h2>

      <div className={styles.timeline}>
        <div className={styles.ruler}></div>
        <ul>
          {experiences.map((experience, i) => (
            <li key={i}>
              <h3>{experience.role}</h3>
              <a href={experience.company.url} className={styles.company}>
                <Image
                  alt="Company's Logo"
                  src={experience.company.image.src}
                  height={38}
                  width={38}
                />
                {experience.company.name}
              </a>
              <p className={styles.periodLocation}>
                {experience.period} | {experience.location}
              </p>
              <p className={styles.description}>{experience.description}</p>
              <div className={styles.skillContainer}>
                <h4>Skills:</h4>
                <ul className={styles.skills}>
                  {experience.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
