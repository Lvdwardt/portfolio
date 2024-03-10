import { FaTools } from "react-icons/fa";
import { defineType } from "sanity";

export default defineType({
  name: "uses",
  icon: FaTools,
  type: "document",
  title: "Uses",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
});
