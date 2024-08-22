import { type StaticImageData } from "next/image";

import battleshipDesktop from "../projectsImages/Battleship-D.webp";
import battleshipMobile from "../projectsImages/Battleship-M.webp";
import budgetTrackerDesktop from "../projectsImages/BudgetTracker-D.webp";
import budgetTrackerMobile from "../projectsImages/BudgetTracker-M.webp";
import onlineBookstoreDesktop from "../projectsImages/OnlineBookstore-D.webp";
import onlineBookstoreMobile from "../projectsImages/OnlineBookstore-M.webp";
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
    description: `Discover a vast collection of books, conveniently organized into categories.
      Search for titles or explore featured deals. Enjoy discounts and have books delivered right to your doorstep.`,
    mobileImage: onlineBookstoreMobile,
    desktopImage: onlineBookstoreDesktop,
    live: "https://climaxmba-bookstore.netlify.app/",
    repository: "https://github.com/climaxmba/online-bookstore",
  },
  {
    title: "Roam Travel & Tours",
    description: `Roam Travels & Tours simulates a travel booking platform designed to inspire and simplify your travel experiences.
      Built with React and TypeScript, the application offers a seamless user interface booking travel packages.
      Key features include flights search, a detailed view of travel packages with price, description, ratings including information on hotels an tours when applicable`,
    mobileImage: roamTnTMobile,
    desktopImage: roamTnTDesktop,
    live: "https://climaxmba-roamtnt.netlify.app/",
    repository: "https://github.com/climaxmba/roam-tnt",
  },
  {
    title: "Battleship",
    description: `Engage in a classic naval battle against a formidable computer opponent in this visually captivating in-browser game.
      Strategically deploy your ships on a grid, then attempt to sink the computer's fleet by targeting specific coordinates.
      The intuitive interface, with its vibrant colors and sound effects, enhances the gaming experience.
      With advanced algorithms, the computer boasts a winning percentage exceeding 50%. Experience the thrill of victory or the sting of defeat as you test your tactical skills in this digital showdown.`,
    mobileImage: battleshipMobile,
    desktopImage: battleshipDesktop,
    live: "https://climaxmba.github.io/battleship",
    repository: "https://github.com/climaxmba/battleship/",
  },
  {
    title: "Budget Tracker",
    description: `This intuitive budget tracker is designed to empower you to take control of your finances.
      With a clean and user-friendly interface, you can easily monitor your income,
      expenses, and overall balance. The app's key features include comprehensive tracking, real-time updates, flexible budgeting, and easy transaction management.
      By utilizing this budget tracker, you can make informed financial decisions, reduce unnecessary spending, and achieve your financial objectives.`,
    mobileImage: budgetTrackerMobile,
    desktopImage: budgetTrackerDesktop,
    live: "https://climaxmba.github.io/budget-tracker/",
    repository: "https://github.com/climaxmba/budget-tracker",
  },
];

export default projects;
