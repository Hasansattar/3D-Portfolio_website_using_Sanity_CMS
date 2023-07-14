import createImageUrlBuilder from '@sanity/image-url'
import {client} from "@/lib/sanityClient"


const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source) => {
  return imageBuilder?.image(source)
}
