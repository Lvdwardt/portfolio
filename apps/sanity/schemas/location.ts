// singleton

import { MdLocationPin } from "react-icons/md";
import { defineType } from "sanity";

export default defineType({
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
});
