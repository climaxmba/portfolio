import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 transition-colors duration-300">
        <Header />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
  );
}
