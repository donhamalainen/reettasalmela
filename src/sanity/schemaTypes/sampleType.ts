import { defineType, defineField } from "sanity";

export const sampleType = defineType({
  name: "sample",
  title: "Juttunäyte",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Otsikko", type: "string" }),
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
    defineField({
      name: "publishedAt",
      title: "Julkaisupäivä",
      type: "datetime",
    }),
    defineField({ name: "excerpt", title: "Ingressi", type: "text" }),
    defineField({
      name: "body",
      title: "Sisältö",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Kuva",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Nosta esille",
      type: "boolean",
      description: "Valitse max 4, jotka näkyvät isompana referenssiherossa.",
      validation: (Rule) =>
        Rule.custom(async (featured, context) => {
          if (!featured) return true;
          const { getClient } = context;
          const client = getClient({ apiVersion: "2023-05-03" });
          if (!context.document) return true;
          const count = await client.fetch(
            'count(*[_type == "sample" && featured == true && !(_id in [$id])])',
            { id: context.document._id }
          );
          if (count >= 4) {
            return "Vain 4 referenssiä voi olla nostettuna hero-osioon!";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      featured: "featured",
      publishedAt: "publishedAt",
      media: "image",
    },
    prepare(selection) {
      const { title, featured, publishedAt, media } = selection;
      return {
        title,
        media,
        subtitle: [
          featured ? "🌟 NOSTETTU" : null,
          publishedAt
            ? new Date(publishedAt).toLocaleDateString("fi-FI")
            : "Ei päivämäärää annettu",
        ]
          .filter(Boolean)
          .join(" • "),
      };
    },
  },
});
