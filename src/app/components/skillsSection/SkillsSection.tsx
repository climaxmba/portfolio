"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import skills from "@/app/assets/data/skillsData";
import styles from "./skillsSection.module.scss";

export default function SkillsSection() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section id="skills" className={styles.container}>
      <h2>What I work with</h2>
      <motion.ul
        ref={ref}
        initial={{ opacity: 0, y: "30%" }}
        animate={visible ? { opacity: 1, y: 0 } : undefined}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className={styles.skillList}
      >
        {skills.map((skill, index) => {
          const itemAnimation = {
            hidden: { opacity: 0, y: "40%" },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.05, duration: 0.5 },
            },
          };
          return (
            <motion.li
              key={skill.text}
              initial="hidden"
              animate={visible ? "visible" : "hidden"}
              variants={itemAnimation}
            >
              <skill.Icon />
              <span>{skill.text}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
