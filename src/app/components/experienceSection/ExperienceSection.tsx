"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Experience } from "@/lib/types";
import experiences from "@/app/assets/data/experienceData";

import styles from "./experienceSection.module.scss";

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.container}>
      <h2>Experience</h2>

      <div className={styles.timeline}>
        <div className={styles.ruler}></div>
        <ul>
          {experiences.map((experience, i) => (
            <ExperienceItem key={i} experience={experience} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 10, y: "50%" }}
      animate={visible ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ type: "tween", duration: 0.5 }}
      className={styles.about}
    >
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
    </motion.li>
  );
}
