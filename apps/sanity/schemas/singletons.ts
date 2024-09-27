import { FaGlobeEurope, FaCode } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export const singletons = [
  {
    title: "Location",
    id: "location",
    icon: MdLocationPin,
  },
  {
    title: "Skills",
    id: "skills",
    icon: FaCode,
  },
  {
    title: "Travel Data",
    id: "travelData",
    icon: FaGlobeEurope,
  },
];

export const singletonTypes = new Set(
  singletons.map((singleton) => singleton.id)
);
