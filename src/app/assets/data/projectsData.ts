import { type StaticImageData } from "next/image";

import battleshipDesktop from "../projectsImages/Battleship-D.webp";
import battleshipMobile from "../projectsImages/Battleship-M.webp";
import budgetTrackerDesktop from "../projectsImages/BudgetTracker-D.webp";
import budgetTrackerMobile from "../projectsImages/BudgetTracker-M.webp";
import onlineBookstoreDesktop from "../projectsImages/OnlineBookstore-D.webp"
import onlineBookstoreMobile from "../projectsImages/OnlineBookstore-M.webp"
import roamTnTDesktop from "../projectsImages/RoamTnT-D.webp";
import roamTnTMobile from "../projectsImages/RoamTnT-M.webp";

interface Project {
  title: string;
  description: string;
  mobileImage: StaticImageData;
  desktopImage: StaticImageData;
  live: string;
  repository: string;
}

const projects: Project[] = [
  {
    title: "Online Bookstore",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde, reiciendis incidunt soluta ipsam atque minus placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque laborum ducimus veritatis recusandae?",
    mobileImage: onlineBookstoreMobile,
    desktopImage: onlineBookstoreDesktop,
    live: "https://climaxmba-bookstore.netlify.app/",
    repository: "https://github.com/climaxmba/online-bookstore",
  },
  {
    title: "Roam Travel & Tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde, reiciendis incidunt soluta ipsam atque minus placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque laborum ducimus veritatis recusandae?",
    mobileImage: roamTnTMobile,
    desktopImage: roamTnTDesktop,
    live: "https://climaxmba-roamtnt.netlify.app/",
    repository: "https://github.com/climaxmba/roam-tnt",
  },
  {
    title: "Battleship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde, reiciendis incidunt soluta ipsam atque minus placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque laborum ducimus veritatis recusandae?",
    mobileImage: battleshipMobile,
    desktopImage: battleshipDesktop,
    live: "https://climaxmba.github.io/battleship",
    repository: "https://github.com/climaxmba/battleship/",
  },
  {
    title: "Budget Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde, reiciendis incidunt soluta ipsam atque minus placeat, earum dicta voluptatem a alias ea, facere corrupti! Atque laborum ducimus veritatis recusandae?",
    mobileImage: budgetTrackerMobile,
    desktopImage: budgetTrackerDesktop,
    live: "https://climaxmba.github.io/budget-tracker/",
    repository: "https://github.com/climaxmba/budget-tracker",
  },
];

export default projects;
