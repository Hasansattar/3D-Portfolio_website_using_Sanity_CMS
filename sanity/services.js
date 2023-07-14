export default {
  name: "services",
  title: "Services",
  type: "document",

  fields: [
    {
      name: "serviceName",
      title: "Service Name",
      type: "string",
      description: "Please enter Service name here.",
    },
    {
      name: "ServiceImg",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
