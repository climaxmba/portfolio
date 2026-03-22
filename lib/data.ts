import { ReactNode } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

export interface Skill {
  icon: ReactNode;
  name: string;
}

export const SKILLS: Skill[] = [
  { icon: <Layout size={32} />, name: 'React / Next.js' },
  { icon: <Code2 size={32} />, name: 'TypeScript' },
  { icon: <Smartphone size={32} />, name: 'PWA / Mobile' },
  { icon: <Globe size={32} />, name: 'Tailwind / SASS' },
  { icon: <Server size={32} />, name: 'Node.js' },
  { icon: <Database size={32} />, name: 'Git / Testing' },
];

export interface Project {
  title: string;
  description: string;
  mobileImage: string | null;
  desktopImage: string | null;
  isPrivateRepo: boolean;
  isClientProject: boolean;
  live: string | null;
  repository: string | null;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Battleship AI",
    description: "An advanced browser-based strategy game. I engineered a custom probability density algorithm (running on Web Workers) that allows the computer opponent to make intelligent guesses, achieving a >50% win rate against human players.",
    mobileImage: null, 
    desktopImage: null, 
    isPrivateRepo: false,
    isClientProject: false,
    live: "https://climaxmba.github.io/battleship/",
    repository: "https://github.com/climaxmba/battleship",
    tags: ["JavaScript", "Web Workers", "TDD", "Algorithms"]
  },
  {
    title: "Farm Management PWA",
    description: "A Progressive Web App built for BizGrowth Hackerz. It allows farm personnel to work offline in remote areas, submit reports via geo-location, and manage user permissions. Transformed a legacy system into a robust, field-ready tool.",
    mobileImage: null,
    desktopImage: null,
    isPrivateRepo: true,
    isClientProject: true,
    live: null,
    repository: null,
    tags: ["PWA", "React", "Geo-Location", "Offline-First"]
  }
];

interface Company {
  name: string;
  image: string | null;
  url: string;
}

export interface Experience {
  company: Company;
  role: string;
  description: string;
  period: string;
  location: string;
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: {
      name: "BizGrowth Hackerz",
      image: null, 
      url: "https://bizgrowthhackerz.com" 
    },
    role: "Frontend Engineer",
    description: "Led the transformation of a Farm Management System into a PWA with offline capabilities. Implemented user permissions and geo-location monitoring features to allow farm personnel to work effectively in remote areas.",
    period: "Oct 2024 - Feb 2025",
    location: "Remote",
    skills: ["React", "PWA", "System Design", "Geo-Location"]
  },
  {
    company: {
      name: "Programmify",
      image: null,
      url: "https://programmify.io"
    },
    role: "Frontend Developer Intern",
    description: "Collaborated with a team of interns to build a Web3 application. Selected as a top 3 intern in Frontend Development for outstanding performance, team collaboration, and technical contribution.",
    period: "Aug 2024 - Dec 2024",
    location: "Remote",
    skills: ["Collaboration", "Web3", "Mentorship", "Agile"]
  },
  {
    company: {
      name: "The Odin Project",
      image: null,
      url: "https://www.theodinproject.com"
    },
    role: "Student Developer",
    description: "Built foundational projects including a CV generator and Battleship game. Mastered Test Driven Development (TDD), algorithms, and advanced JavaScript concepts through rigorous self-paced learning.",
    period: "Jan 2023 - July 2024",
    location: "Remote",
    skills: ["JavaScript", "TDD", "Algorithms", "Data Structures"]
  }
];
