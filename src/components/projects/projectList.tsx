import {
  SiDocker,
  SiGoogleplay,
  SiReact,
  SiExpo,
  SiGooglemybusiness,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiFramer,
} from "react-icons/si";
import { ProjectList } from "../../types";

const projectList: ProjectList[] = [
  {
    id: "janskapsalon",
    title: "Jans kapsalon",
    coverImage: "/images/jk.webp",
    projectImage: "/images/jk.webp",
    url: "https://janskapsalon.vercel.app/",
    translate: "translate-y-[10px] sm:translate-y-[-96px]",
    width: "w-[162px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "Jans kapsalon is a website made for a fictional hairdresser. The goal of the website is to find information about the hairdresser, and to be able to book an appointment. The hairdresser also needs a management system to view appointments and change data.",
    workedOn: [
      { work: "I made the design for the website" },
      { work: "I realised the design with React and Tailwind" },
      { work: "I made the website public and put the company on Google Maps" },
    ],
    newSkills: [
      { skill: "Building a website with React" },
      { skill: "Styling a website with Tailwind CSS" },
      { skill: "Publishing a website with Docker and Nginx Proxy Manager" },
      { skill: "Putting a company on Google Maps" },
      {
        skill: "Using the Google Places API to fetch reviews and company info",
      },
    ],
    icons: [
      { icon: <SiDocker /> },
      { icon: <SiReact /> },
      { icon: <SiTailwindcss /> },
      { icon: <SiGooglemybusiness /> },
    ],
  },
  {
    id: "fly-n",
    title: "Fly-n",
    coverImage: "/images/fly-n.webp",
    projectImage: "/images/fly-n-pf.webp",
    url: "https://play.google.com/store/apps/details?id=com.leonvdw.flyn",
    translate: "translate-y-[10px] sm:translate-y-0",
    width: "w-[90px]",
    grid: "col-span-1 row-span-2",
    order: "order-1",
    description:
      "Fly-n is an international travel app that allows you to find and book door-to-door trips. The aim of Fly-n is to combine different travel providers to create a comprehensive travel itinerary. You will be redirected to book tickets.",
    workedOn: [
      { work: "I made the design for the app" },
      { work: "I helped realising the design in React Native" },
      { work: "I published the app on the Play Store" },
      { work: "I drafted the Terms of Service" },
      {
        work: "I pitched the idea to big companies for possible collaborations",
      },
    ],
    newSkills: [
      { skill: "Building an application with React Native" },
      { skill: "Styling an application with React Native Paper" },
      { skill: "What it takes to publish an app on the Play Store" },
      { skill: "The drafting of a Terms of Service" },
    ],
    icons: [
      { icon: <SiReact /> },
      { icon: <SiGoogleplay /> },
      { icon: <SiExpo /> },
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio",
    coverImage: "/images/portfolio.webp",
    projectImage: "/images/portfolio.webp",
    url: "https://leonvdwnl",
    translate: "translate-y-0 ",
    width: "w-[120px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "This website is my portfolio. It is a place where I can show my work and skills. I made this website to show my skills and to learn new things. I made this website with Next.js and Tailwind CSS. I also used Framer Motion for animations.",
    workedOn: [
      { work: "I made the design for the website" },
      { work: "I realised the design with Next.js and Tailwind CSS" },
    ],
    newSkills: [
      { skill: "Building a website with Next.js" },
      { skill: "Using Framer Motion for animations" },
    ],
    icons: [
      { icon: <SiNextdotjs /> },
      { icon: <SiTailwindcss /> },
      { icon: <SiGithub /> },
      { icon: <SiFramer /> },
    ],
  },
];
export default projectList;
