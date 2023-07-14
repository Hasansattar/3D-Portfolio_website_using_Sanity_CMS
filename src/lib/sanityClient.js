import {createClient} from "next-sanity"

export const client=createClient({
  apiVersion:"2023-07-13",
  dataset:"production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
  token:process.env.NEXT_PUBLIC_SANITY_ACCESSTOKEN
})

