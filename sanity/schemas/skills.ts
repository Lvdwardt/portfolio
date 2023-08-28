import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { preview } from "sanity-plugin-icon-picker";
export const Skills = {
  name: "skills",
  icon: FaCode,
  type: "document",
  title: "Skills",
  fields: [
    //    array of skills
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
            prepare(selection: {
              icon: {
                provider: string;
                name: string;
                options: { outputFormat: string };
              };
              title: string;
            }) {
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
};
