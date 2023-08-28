// singleton

import { FaGlobeEurope } from "@react-icons/all-files/fa/FaGlobeEurope";

export const TravelStats = {
  name: "travelStats",
  icon: FaGlobeEurope,
  type: "document",
  title: "Travel Stats",
  fields: [
    {
      name: "countries",
      type: "number",
      title: "Countries",
    },
    {
      name: "capitals",
      type: "number",
      title: "Capitals",
    },
    {
      name: "airports",
      type: "number",
      title: "Airports",
    },
  ],
};
