import { defineType, defineField } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Kuvagalleria",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Otsikko", type: "string" }),
    defineField({
      name: "images",
      title: "Kuvat",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description:
        "Lisää kuvia ja muuta järjestystä. Poistaminen ei ole sallittua.",
    }),
  ],
});
