export default {
  name: "projects",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    },
    {
      name: "projectname",
      title: "Project Name",
      type: "string",
      description: "Please enter project name here.",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Please enter project description here.",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Write category for project here, example (fullstack, frontend, web3)",
    },
    {
      name: "sourcecodeLink",
      title: "SourceCodeLink",
      type: "string",
      description: "Project code source code URL here",
    },
    {
      name: "liveUrl",
      title: "LiveURL",
      type: "string",
      description: "Project's URL here",
    },
    {
      name: "projectImg",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tagName",
          title: "Tag Name",
          type: "string",
          description: "Please enter Tag name here.",
        },
      ],
    },
    {
      name: "tagsColor",
      title: "Tags Color",
      type: "array",
      of: [
        {
          name: "color",
          title: "Color",
          type: "string",
          description: "Please enter Tags Color here.",
        },
      ],
    },
  ],
};
