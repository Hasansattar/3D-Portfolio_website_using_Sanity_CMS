import {createClient} from "next-sanity"

export const client=createClient({
  apiVersion:"2023-07-13",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "l8qe3ozn",
  useCdn:true,
  token: process.env.NEXT_PUBLIC_SANITY_ACCESSTOKEN || "skYJvH7tZaNUzIdpu6wcexlahRzapX7tgEV6T6iagCnc7WhYvvKD2odtuIevseGlMgXZO2ONi4Y3PPvEAjaTY8YzFPWHbCKVIHhlFrW305Z3z1YDD4JEGxjLklNJEDWzhAcalbgVn3F4ndDxGQcaehGmr0myjTqlORJbwgz0xha9ZgvPbVjN"
})

