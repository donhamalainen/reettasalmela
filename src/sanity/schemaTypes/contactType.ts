import { defineType, defineField } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Yhteystiedot",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nimi", type: "string" }),
    defineField({ name: "email", title: "Sähköposti", type: "string" }),
    defineField({ name: "phone", title: "Puhelin", type: "string" }),
    defineField({
      name: "bio",
      title: "Esittely",
      type: "blockContent", // <-- käytä blockContent-tyyppiä
    }),
    defineField({
      name: "image",
      title: "Kuva",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cv",
      title: "CV (PDF)",
      type: "file",
      options: { accept: ".pdf" },
      description: "Lisää CV PDF-tiedostona.",
    }),
    defineField({
      name: "social",
      title: "Sosiaalinen media",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Alusta", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
});
