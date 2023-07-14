export default {
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    {
      name: "experienceName",
      title: "Experience Name",
      type: "string",
      description: "Please enter experience name here.",
    },
    {
      name: "companyname",
      title: "Company Name",
      type: "string",
      description: "Please enter company name here.",
    },
    {
      name: "companyImg",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imgBackgroundColor",
      title: "Image background Color",
      type: "string",
      description: "Please enter Image background here.",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: "Please enter Date here.",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          name: "point1",
          title: "Point 1",
          type: "string",
          description: "Please enter point 1 here.",
        },
        {
          name: "point2",
          title: "Point 2",
          type: "string",
          description: "Please enter point 2 here.",
        },
        {
          name: "point3",
          title: "Point 3",
          type: "string",
          description: "Please enter point 3 here.",
        },
        {
          name: "point4",
          title: "Point 4",
          type: "string",
          description: "Please enter point 4 here.",
        },
      ],
    },
  ],
};
