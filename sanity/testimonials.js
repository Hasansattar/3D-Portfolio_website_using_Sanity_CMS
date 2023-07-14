export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",

  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "string",
      description: "Please enter testimonial here.",
    },
    {
      name: "testimonialName",
      title: "Testimonial Name",
      type: "string",
      description: "Please enter testimonial name here.",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Please enter designation here.",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "Please enter company name here.",
    },
    {
      name: "img",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
