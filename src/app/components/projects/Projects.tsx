"use client";
import Image from "next/image";

import projects from "@/app/assets/data/projectsData";

import styles from "./projects.module.scss";
import { GitHub, Play } from "../icons/Icons";

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.header}>Featured Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.repository} className={styles.project}>
            <div className={styles.description}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.buttonsContainer}>
                <a href={project.repository} target="_blank">
                  <button className="outlined icon-btn" tabIndex={-1}><GitHub /> Source Code</button>
                </a>
                <a href={project.live} target="_blank">
                  <button className={`${styles.viewLive} icon-btn`} tabIndex={-1}><Play /> View Live</button>
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
          </div>
        ))}
      </div>
    </section>
  );
}
