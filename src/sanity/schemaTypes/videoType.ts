import { defineType, defineField } from "sanity";

export const videoType = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Otsikko", type: "string" }),
    defineField({ name: "videoUrl", title: "Videon URL", type: "url" }),
    defineField({ name: "description", title: "Kuvaus", type: "text" }),
    defineField({
      name: "thumbnail",
      title: "Pikkukuva",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
