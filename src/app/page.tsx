import About from "./components/about/About.";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
