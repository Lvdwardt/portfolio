import { AiFillFolderOpen } from "react-icons/ai";

import { preview } from "sanity-plugin-icon-picker";

export const Projects = {
  name: "projects",
  icon: AiFillFolderOpen,
  type: "document",
  title: "Projects",
  groups: [
    {
      name: "image",
      title: "Image",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "quote",
      type: "string",
      title: "Quote",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },

    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
    },
    {
      name: "projectImage",
      type: "image",
      title: "Project Image",
      group: "image",
    },
    {
      name: "projectImageLight",
      type: "image",
      title: "Project Image Light (optional)",
      group: "image",
      defaultValue: null,
    },

    {
      name: "translate",
      type: "string",
      title: "Translate",
      group: "image",
    },
    {
      name: "width",
      type: "string",
      title: "Width",
      group: "image",
    },
    {
      name: "grid",
      type: "string",
      title: "Grid",
      group: "image",
    },
    {
      name: "order",
      type: "string",
      title: "Order",
      group: "image",
    },
    {
      name: "workedOn",
      type: "array",
      title: "Worked On",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "work",
              type: "string",
              title: "Work",
            },
          ],
        },
      ],
    },
    {
      name: "newSkills",
      type: "array",
      title: "New Skills",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "skill",
              type: "string",
              title: "Skill",
            },
          ],
        },
      ],
    },
    {
      name: "icons",
      type: "array",
      title: "Icons",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "iconPicker",
              title: "Icon",
              options: {
                outputFormat: "react",
                providers: ["si"],
              },
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
          // show icon instead of icon name in Sanity Studio
          preview: {
            select: {
              provider: "icon.provider",
              name: "icon.name",
            },
            prepare(icon: {
              provider: string;
              name: string;
              options: { outputFormat: string };
            }) {
              return {
                title: icon.name,
                media: preview(icon),
              };
            },
          },
        },
      ],
    },
    {
      name: "githubUrl",
      type: "url",
      title: "Github URL (optional)",
      defaultValue: null,
    },
  ],
};
