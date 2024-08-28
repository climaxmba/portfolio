"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profileImage from "../../assets/profile.webp";
import { Plane } from "../icons/Icons";

import styles from "./aboutSection.module.scss";

export default function About() {
  const ref = useRef(null);
  const visible = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <section id="about" className={styles.container}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: "20%" }}
        animate={visible ? { opacity: 1, y: 0 } : undefined}
        transition={{ type: "tween", duration: 1 }}
        className={styles.about}
      >
        <h1 className={styles.header}>About Me</h1>

        <p>
          {`I am a collaborative team player with a proven track record of contributing
          to Open-Source projects. Eager to apply my technical skills and
          problem-solving abilities to real-world projects.
          My solid foundation in JavaScript and React equips me to contribute
          meaningfully to a variety of projects. I'm excited to join a dynamic
          team and leverage my skills to create innovative solutions.`}
        </p>

        <a href="/#contact">
          <button title="Contact Me" type="button" className="icon-btn">
            Contact Me <Plane />
          </button>
        </a>
      </motion.div>

      <div
        role="img"
        title="Author's Image"
        style={{ backgroundImage: `url(${profileImage.src})` }}
        className={styles.imageContainer}
      ></div>
    </section>
  );
}
