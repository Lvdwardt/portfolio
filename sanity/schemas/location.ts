// singleton

import { MdLocationPin } from "@react-icons/all-files/md/MdLocationPin";

export const Location = {
  name: "location",
  icon: MdLocationPin,
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
