/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSanityFetch } from "@/hook/useSanityFetch";
import { urlFor } from "@/sanity/lib/image";

export default function ReferencePopup() {
  // Hae max 4 featured referenssiä, uusimmat ensin
  const {
    data: featured,
    loading,
    error,
  } = useSanityFetch(
    '*[_type == "sample" && featured == true] | order(publishedAt desc)[0...4]{title, url, excerpt, publishedAt, image}'
  );

  if (loading) return null;
  if (error) return null;
  if (!featured || featured.length === 0) return null;
  console.log(featured);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featured.map((item: any) => (
        <Link
          key={item.title}
          href={`${item.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl shadow-lg bg-white hover:shadow-2xl transition p-6"
        >
          <div className="relative">
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                priority
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
          </div>
          <h2 className="text-xl font-cabinet-bold mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">{item.excerpt}</p>
          {item.publishedAt && (
            <span className="text-xs text-gray-400">
              {new Date(item.publishedAt).toLocaleDateString("fi-FI")}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
