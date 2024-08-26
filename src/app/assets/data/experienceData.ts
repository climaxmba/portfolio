import { StaticImageData } from "next/image";
import programmifyLogo from "../experienceImages/Programmify.webp";
import TOPLogo from "../experienceImages/TOP.webp";

interface Experience {
  company: {
    name: string;
    image: StaticImageData;
    url: string;
  };
  role: string;
  description: string;
  period: string;
  location: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: {
      name: "Programmify",
      image: programmifyLogo,
      url: "http://www.programmify.org/",
    },
    role: "Frontend Developer Intern",
    description: `As a frontend developer intern,
      I'm actively engaged in a comprehensive program that combines hands-on project work with mentorship and team collaboration.
      During the initial phase, I work on individual projects under the guidance of experienced mentors.
      We meet twice a week for code reviews, where I receive valuable feedback and guidance to enhance my coding skills.
      Following the completion of these personal projects, we form teams and collaborate on launching a product.
      This collaborative phase allows me to apply the knowledge and skills I've acquired during the individual projects to real-world development challenges.`,
    period: "August 2024 - Present",
    location: "Remote",
    skills: ["React", "Next.js", "TypeScript", "SASS", "JavaScript", "Git"],
  },
  {
    company: {
      name: "The Odin Project",
      image: TOPLogo,
      url: "http://www.theodinproject.com/",
    },
    role: "Student Frontend Developer",
    description: `The Odin Project is an Open Source curriculum for Full-Stack web development.
      Here, I'm implementing application designs, writing unit tests to verify the functionality of web applications,
      consuming REST APIs and integrating Node packages for application functionality.`,
    period: "January 2024 - Present",
    location: "Remote",
    skills: ["React", "Git", "NPM", "Webpack", "JavaScript", "HTML", "CSS"],
  },
];

export default experiences;
