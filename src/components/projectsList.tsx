"use client";

import { useSanityFetch } from "@/hook/useSanityFetch";
import React from "react";

export default function ProjectList() {
  const {
    data: samples,
    loading,
    error,
  } = useSanityFetch('*[_type == "project"]{title}');
  console.log(samples);
  if (loading)
    return (
      <div className="flex items-center justify-center">
        <p className="font-cabinet text-title-md">Ladataan...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center">
        <p className="font-cabinet text-title-md">
          Virhe juttunäytteitä haettaessa, tarkista internet yhteys ja yritä
          uudelleen.
        </p>
      </div>
    );
  if (!samples || samples.length === 0)
    return (
      <div className="flex items-center justify-center mt-20 h-full">
        <p className="font-cabinet-bold text-xl">
          Projekteja ei ole vielä saatavilla.
        </p>
      </div>
    );
  return <main></main>;
}
