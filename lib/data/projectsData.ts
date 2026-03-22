import { Project } from "@/lib/types";
import battleshipDesktop from "@/assets/projectsImages/Battleship-D.webp";
import battleshipMobile from "@/assets/projectsImages/Battleship-M.webp";
import budgetTrackerDesktop from "@/assets/projectsImages/BudgetTracker-D.webp";
import budgetTrackerMobile from "@/assets/projectsImages/BudgetTracker-M.webp";
import agroMonitorDesktop from "@/assets/projectsImages/AgroMonitor-D.webp";
import agroMonitorMobile from "@/assets/projectsImages/AgroMonitor-M.webp";
import onlineBookstoreDesktop from "@/assets/projectsImages/OnlineBookstore-D.webp";
import onlineBookstoreMobile from "@/assets/projectsImages/OnlineBookstore-M.webp";
import readMeBlogDesktop from "@/assets/projectsImages/ReadMeBlog-D.webp";
import readMeBlogMobile from "@/assets/projectsImages/ReadMeBlog-M.webp";
import roamTnTDesktop from "@/assets/projectsImages/RoamTnT-D.webp";
import roamTnTMobile from "@/assets/projectsImages/RoamTnT-M.webp";

const projects: Project[] = [
  {
    title: "Readme Blog",
    description: `This blog serves as a comprehensive resource hub for software engineers of all levels.
    It offers a clean, intuitive interface for exploring in-depth articles on programming languages, algorithms, data structures, and more.
    ReadMe Blog offers syntax formatting & highlighting in code examples, wishlist to store your favorite articles and a feeback form for each blog.`,
    mobileImage: readMeBlogMobile,
    desktopImage: readMeBlogDesktop,
    live: "https://climaxmba-readme-blog.netlify.app/",
    repository: "https://github.com/climaxmba/readme-blog",
    isPrivateRepo: false,
    isClientProject: false,
    tags: ["React", "TypeScript", "SASS", "Netlify"]
  },
  {
    title: "Matrix AgroMonitor",
    description: `Matrix AgroMonitor is a robust Farm Management Platform.
      Features includes offline submission for farm reports,
      user permissions for authorization, notifications, weather forecast and geo-location for monitoring.
      It is currently being used by a company in the agricultural industry.`,
    mobileImage: agroMonitorMobile,
    desktopImage: agroMonitorDesktop,
    isPrivateRepo: true,
    isClientProject: true,
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    title: "Online Bookstore",
    description: `Discover a vast collection of books, conveniently organized into categories.
      Search for titles or explore featured deals. Enjoy discounts and have books delivered right to your doorstep.`,
    mobileImage: onlineBookstoreMobile,
    desktopImage: onlineBookstoreDesktop,
    live: "https://climaxmba-bookstore.netlify.app/",
    repository: "https://github.com/climaxmba/online-bookstore",
    isPrivateRepo: false,
    isClientProject: false,
    tags: ["React", "SASS", "Tailwind"]
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
    isPrivateRepo: false,
    isClientProject: false,
    tags: ["React", "SASS", "TypeScript"]
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
    isPrivateRepo: false,
    isClientProject: false,
    tags: ["React", "TypeScript", "SASS"]
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
    isPrivateRepo: false,
    isClientProject: false,
    tags: ["JavaScript", "CSS", "HTML"]
  },
];

export default projects;
