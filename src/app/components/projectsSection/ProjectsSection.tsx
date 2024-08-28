"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Project } from "@/lib/types";
import projects from "@/app/assets/data/projectsData";
import { GitHub, Play } from "../icons/Icons";

import styles from "./projectsSection.module.scss";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.header}>Featured Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, i) => (
          <ProjectItem
            key={project.repository}
            project={{ ...project, index: i }}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectItemProps extends Project {
  // `index` for animation
  index: number;
}

function ProjectItem({ project }: { project: ProjectItemProps }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const x = project.index % 2 === 0 ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={visible ? { opacity: 1, x: 0 } : undefined}
      transition={{ type: "tween", duration: 0.6 }}
      className={styles.project}
    >
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.buttonsContainer}>
          <a href={project.repository} target="_blank">
            <button
              title="View source code"
              className="outlined icon-btn"
              tabIndex={-1}
            >
              <GitHub /> Source Code
            </button>
          </a>
          <a href={project.live} target="_blank">
            <button
              title="Open in new tab"
              className={`${styles.viewLive} icon-btn`}
              tabIndex={-1}
            >
              <Play /> View Live
            </button>
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.desktop}>
          <Image src={project.desktopImage} alt="" />
          <div className={styles.mobile}>
            <Image src={project.mobileImage} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
