export default{
  name:"achievements",
  title:"Achievements",
  type:"document",

  fields:[
    {
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    },
    {
      name:"achievementName",
      title:"Achievement Name",
      type:"string",
      description:"Please enter achievement name here."
    },
    {
      name: "achievementImg",
      title: "Achievement Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "liveUrl",
      title: "LiveURL",
      type: "string",
      description: "Achievemnet URL here",
    },

  ]
}