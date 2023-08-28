import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaGlobeEurope } from "@react-icons/all-files/fa/FaGlobeEurope";
import { MdLocationPin } from "@react-icons/all-files/md/MdLocationPin";

export const singletons = [
  {
    title: "Travel Stats",
    id: "travelStats",
    icon: FaGlobeEurope,
  },
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
