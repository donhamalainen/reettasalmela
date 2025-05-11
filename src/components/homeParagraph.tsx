"use client";
import { useSanityFetch } from "@/hook/useSanityFetch";
import { PortableText } from "@portabletext/react";
import React from "react";

export default function HomeParagraph() {
  const { data, loading } = useSanityFetch('*[_type == "contact"][0]{bio}');
  const fallbackText = `Moikka! Huippua, että olet täällä. Minä olen Reetta Salmela, parikymppinen viestinnän asiantuntija ja journalisti Oulusta.

16Personalities -testin mukaan olen Protagonisti eli inspiroiva optimisti ja 94 prosenttia ekstrovertti. Lisäksi testi kertoo, että elän tunteella, mutta suunnitelmallisesti. Näin olen kuullut myös ystävieni minun kuvailevan - ”sosiaalinen ja helposti innostuva tyyppi, joka on aina menossa.”

Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo nuorena ja olen aina halunnut olla vaikuttajan asemassa. Tästä kertoo pitkä taustani erilaisen yhdistystoiminnan ja opiskelijakuntien parissa.

Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli mielenkiinto heräsi!`;

  if (loading) {
    return (
      <div className="w-full h-32 bg-neutral-200 animate-pulse rounded-xl my-8" />
    );
  }

  return data?.bio ? (
    <div className="grid grid-cols-3 mt-4">
      <article className="col-span-3 lg:col-span-2 text-parag font-cabinet">
        <PortableText value={data.bio} />
      </article>
    </div>
  ) : (
    <div className="prose prose-lg max-w-2xl mx-auto mt-10 md:mt-16 bg-white/80 rounded-xl p-6 shadow whitespace-pre-line">
      {fallbackText}
    </div>
  );
}
