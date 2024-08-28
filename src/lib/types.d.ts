import { type StaticImageData } from "next/image";

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

interface Project {
  title: string;
  description: string;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  live: string;
  repository: string;
}
