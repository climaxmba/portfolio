import { GitHub, LinkedIn } from "../icons/Icons";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <h1>Copywrite &copy; {new Date().getFullYear()}; Climax Mba</h1>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/climaxmba/"
          target="_blank"
          title="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/climaxmba" target="_blank" title="GitHub">
          <GitHub />
        </a>
      </div>
    </footer>
  );
}
