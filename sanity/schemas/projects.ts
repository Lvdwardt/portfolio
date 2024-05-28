import { AiFillFolderOpen } from "react-icons/ai";
import { defineType } from "sanity";

import { preview } from "sanity-plugin-icon-picker";

export default defineType({
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
      name: "featured",
      type: "boolean",
      title: "Featured",
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
    { name: "hasBg", type: "boolean", title: "Has Background" },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
    },
    {
      name: "position",
      type: "number",
      title: "Position",
      description: "Position in the grid the projects page",
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
                storeSvg: true,
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
              icon: "icon",
            },
            prepare({ icon, name }) {
              return {
                title: name,
                media: preview(icon),
              };
            },
          },
        },
      ],
    },
    {
      name: "media",
      type: "array",
      title: "Media",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "media",
              type: "image",
              title: "Media",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    },
    {
      name: "githubUrl",
      type: "url",
      title: "Github URL (optional)",
    },
  ],
});
