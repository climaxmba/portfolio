import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import SkillsSection from "./components/skillsSection/SkillsSection";
import ExperienceSection from "./components/experienceSection/ExperienceSection";
import ContactSection from "./components/contactSection/ContactSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
