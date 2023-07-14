export default {
  name: "technologies",
  title: "Technologies",
  type: "document",

  fields: [
    {
      name: "technologyName",
      title: "Technology Name",
      type: "string",
      description: "Please enter technology name here.",
    },
    {
      name: "technologyImage",
      title: "Technology Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
