/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSanityFetch } from "@/hook/useSanityFetch";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IoIosArrowForward } from "react-icons/io";

export default function ReferenceList() {
  const {
    data: samples,
    loading,
    error,
  } = useSanityFetch(
    '*[_type == "sample" && (!defined(featured) || featured == false)] | order(publishedAt desc){title, url, excerpt, publishedAt, image}'
  );

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
          Julkaisuja ei ole vielä saatavilla.
        </p>
      </div>
    );

  return (
    <div className="mt-8 space-y-4">
      {samples.map((item: any) => (
        <Link
          key={item.title}
          href={`${item.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-4 rounded-lg transition bg-white shadow group"
        >
          <div className="relative w-24 h-16 flex-shrink-0">
            {item.image && (
              <Image
                src={urlFor(item.image)
                  .width(240)
                  .height(160)
                  .fit("clip")
                  .url()}
                alt={item.title}
                fill
                className="object-cover rounded-md"
                sizes="96px"
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate transition-colors">
              {item.title}
            </h3>
            {item.publishedAt && (
              <span className="text-xs text-gray-400 block mb-1">
                {new Date(item.publishedAt).toLocaleDateString("fi-FI")}
              </span>
            )}
            {item.excerpt && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.excerpt}
              </p>
            )}
          </div>
          <span className="flex items-center gap-1 ml-2 font-semibold text-black text-sm shrink-0 group-hover:translate-x-1 transition-transform">
            Lue <IoIosArrowForward size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
