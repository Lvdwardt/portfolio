// singleton

import { PinIcon } from "@sanity/icons";

export const Location = {
  name: "location",
  icon: PinIcon,
  type: "document",
  title: "Location",
  fields: [
    {
      name: "currentLocation",
      type: "geopoint",
      title: "Current Location",
      description: "Please do not choose your exact location",
    },
  ],
};
