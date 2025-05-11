import { defineType, defineField } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projekti",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nimi", type: "string" }),
    // defineField({
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //     slugify: (input: string) =>
    //       input
    //         .toLowerCase()
    //         .replace(/ä/g, "a")
    //         .replace(/ö/g, "o")
    //         .replace(/å/g, "a")
    //         .replace(/\u00AD/g, "") // Poista pehmeät tavuviivat (soft hyphen)
    //         .replace(/[^\w\s]/g, "") // Poista kaikki erikoismerkit, jätä välilyönnit
    //         .replace(/\s+/g, "-") // Korvaa kaikki välilyönnit yhdysmerkillä
    //         .replace(/-+/g, "-") // Yhdistä useat viivat yhdeksi
    //         .replace(/^-|-$/g, "") // Poista alusta/lopusta viivat
    //         .trim(),
    //   },
    // }),
    defineField({
      name: "url",
      title: "Jutun osoite",
      type: "url",
      description: "Linkki julkaistuun juttuun (jos saatavilla)",
    }),
    defineField({ name: "description", title: "Kuvaus", type: "text" }),
    defineField({ name: "startDate", title: "Aloituspäivä", type: "date" }),
    defineField({ name: "endDate", title: "Päättymispäivä", type: "date" }),
    defineField({
      name: "image",
      title: "Kuva",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
