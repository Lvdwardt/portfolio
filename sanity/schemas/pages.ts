// schema to define SEO for each page
// Path: sanity/schemas/pages.ts

import { FaFile } from "@react-icons/all-files/fa/FaFile";

export const Pages = {
  name: "pages",
  icon: FaFile,
  type: "document",
  title: "Pages",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "seo",
    },
    {
      name: "title",
      type: "string",
      description: "The title of the page",
      title: "Title",
      group: "seo",
      validations: [
        {
          rule: "minLength",
          value: 65,
        },
      ],
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      group: "seo",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      group: "seo",
    },
  ],
};
