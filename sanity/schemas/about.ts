import { FaUser } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";

export const About = {
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
              validation: (Rule: { required: () => unknown }) =>
                Rule.required(),
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
              validation: (Rule: { required: () => unknown }) =>
                Rule.required(),
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
};
