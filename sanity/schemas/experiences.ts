/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "experiences",
  type: "document",
  title: "Experiences",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "small",
      type: "string",
      title: "Small",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
    {
      name: "hours",
      type: "string",
      title: "Hours",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "startDate",
      type: "date",
      title: "Start Date",
    },
    {
      name: "endDate",
      type: "date",
      title: "End Date",
      initialValue: null,
    },
  ],
};
