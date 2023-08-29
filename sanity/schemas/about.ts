import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { defineType } from "sanity";

export default defineType({
  name: "about",
  icon: FaUser,
  type: "document",
  title: "About",
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "memojis",
      type: "object",
      title: "Memoji",
      fields: [
        {
          name: "darkMemoji",
          type: "image",
          title: "Dark Memoji",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
              validation(rule) {
                return rule.required();
              },
            },
          ],
        },
        {
          name: "lightMemoji",
          type: "image",
          title: "Light Memoji",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
              validation(rule) {
                return rule.required();
              },
            },
          ],
        },
      ],
    },
    {
      name: "text",
      type: "object",
      title: "Text",
      fields: [
        {
          name: "text",
          type: "array",
          of: [{ type: "block" }],
          title: "Text",
        },
        {
          name: "mobileText",
          type: "array",
          of: [{ type: "block" }],
          title: "Mobile Text",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "slug.current",
    },
  },
});
