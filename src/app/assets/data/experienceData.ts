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
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
      obcaecati laboriosam magni aspernatur sapiente fugit voluptatem,
      odio blanditiis. Error dolorum earum accusamus quam itaque culpa
      officiis deleniti. Voluptates deleniti tenetur earum eligendi. Nam
      porro, provident consectetur quo iure dolore fugiat!`,
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
      So far, I'm implementing application designs, writing unit tests to verify the functionality of web applications,
      consuming REST APIs and integrating Node packages for application functionality.`,
    period: "January 2024 - Present",
    location: "Remote",
    skills: ["React", "Git", "NPM", "Webpack", "JavaScript", "HTML", "CSS"],
  },
];

export default experiences;
