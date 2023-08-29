import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { defineType } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export default defineType({
  name: "skills",
  icon: FaCode,
  type: "document",
  title: "Skills",
  fields: [
    {
      name: "icons",
      type: "array",
      title: "Icons",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "icon",
              type: "iconPicker",
              title: "Icon",
              options: {
                storeSvg: true,
                providers: ["si"],
              },
            },
          ],
          // show icon instead of icon name
          preview: {
            select: {
              icon: "icon",
              title: "title",
            },
            prepare(selection) {
              const { icon, title } = selection;
              return {
                media: preview(icon),
                title: title,
              };
            },
          },
        },
      ],
    },
  ],
});
