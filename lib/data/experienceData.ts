import { Experience } from "@/lib/types";
import bizGrowthHackerzLogo from "@/assets/experienceImages/BizGrowthHackerz.webp";
import CDTCLogo from "@/assets/experienceImages/CDTC.webp";
import programmifyLogo from "@/assets/experienceImages/Programmify.webp";
import TOPLogo from "@/assets/experienceImages/TOP.webp";

const experiences: Experience[] = [
  {
    company: {
      name: "TheBizGrowthHackerz",
      image: bizGrowthHackerzLogo,
      url: "https://bizgrowthhackerz.com/",
    },
    role: "Frontend Engineer",
    description: `I built a Farm Management System alongside the team. Based on the client’s feedback and requests, 
      we transformed it to a Progressive Web App, allowing farm personnel to use the application in remote areas, (e.g on-site, in the farm).
      I implemented features to allow offline submission for farm reports, user permissions for authorization, notifications and geo-location for monitoring.
      I was also involved in re-building a portfolio website to match the given requirements and implementing the designs for a Farm Monitoring System.`,
    period: "October 2024 - February 2025",
    location: "Remote",
    skills: ["TypeScript", "Next.js", "React", "TailwindCSS"],
  },
  {
    company: {
      name: "CapacityDey Tech Club",
      image: CDTCLogo,
      url: "https://capacitydey.org/",
    },
    role: "Frontend Engineer - Contributor",
    description: `At CapacityDey Tech Club, I worked alongside fellow Frontend Engineers,
      Product Designers and Backend Engineers to build a Software Product to revolutionize healthcare across Africa.`,
    period: "October 2024 - February 2025",
    location: "Remote",
    skills: ["TypeScript", "React", "TailwindCSS"],
  },
  {
    company: {
      name: "Programmify",
      image: programmifyLogo,
      url: "https://www.programmify.org/",
    },
    role: "Frontend Developer - Intern",
    description: `This internship combines hands-on project work with mentorship and team collaboration.
      During the initial phase, I worked on individual projects under the guidance of experienced mentors.
      We met twice a week for code reviews, where I receive valuable feedback and guidance.
      During the final phase, I was assigned to work with a team of fellow interns to build a Web3 application.
      Eventually, I was selected as one of the top 3 interns in Frontend Development,
      and I am happy I was able to make valuable connections before the end of the program.`,
    period: "August 2024 - December 2024",
    location: "Remote",
    skills: ["React", "Next.js", "TypeScript", "SASS", "JavaScript", "Git"],
  },
  {
    company: {
      name: "The Odin Project",
      image: TOPLogo,
      url: "https://www.theodinproject.com/",
    },
    role: "Student Frontend Developer",
    description: `TheOdinProject is a curriculum for Full-Stack Web Development.
      During my time here, I built a CV/Resume application that allows users to write and save/print their resume using a drag and drop interface in the browser.
      I also built an in-browser game, Battleship. The game has a computer player that uses a powerful algorithm to boost its chances of beating a human player to over 50%!
      Right now I’m moving forward to become a Full-Stack Engineer by learning PostgreSQL for databases and ExpressJS (with Node) for server-side development.
      I will build projects like a Messaging App and Blog API.`,
    period: "January 2023 - July 2024",
    location: "Remote",
    skills: ["React", "Vite", "Webpack", "JavaScript", "HTML", "CSS", "Git"],
  },
];

export default experiences;
