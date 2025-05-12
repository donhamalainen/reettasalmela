/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSanityFetch } from "@/hook/useSanityFetch";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

function isPortrait(img: any) {
  const ref = img?.asset?._ref;
  if (!ref) return false;
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) return false;
  const width = parseInt(match[1], 10);
  const height = parseInt(match[2], 10);
  return height > width;
}

export default function GalleryList() {
  const [selected, setSelected] = useState<any | null>(null);
  const [modalImgLoaded, setModalImgLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { data: gallery, loading } = useSanityFetch(
    `*[_type == "gallery"][0].images`
  );

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="bg-gray-200 animate-pulse shadow h-[200px] md:h-[250px]"
              />
            ))
          : gallery.map((img: any, idx: number) => {
              const portrait = isPortrait(img);
              const imgKey = img._key || idx;
              return (
                <li
                  key={imgKey}
                  className={`relative overflow-hidden cursor-pointer ${
                    portrait ? "row-span-2 h-full" : "min-h-[200px] h-[350px]"
                  }`}
                  onClick={() => {
                    setSelected(img);
                    setModalImgLoaded(false);
                  }}
                  style={portrait ? { gridRowEnd: "span 2" } : undefined}
                >
                  {!loadedImages[imgKey] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
                  )}

                  <Image
                    src={urlFor(img).url()}
                    alt="Gallery"
                    fill
                    priority
                    className="object-cover"
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [imgKey]: true }))
                    }
                    sizes="90vw"
                  />
                </li>
              );
            })}
      </ul>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-20"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-3xl">
            {!modalImgLoaded && (
              <div className="absolute inset-0 bg-gray-400 animate-pulse rounded z-10" />
            )}
            <Image
              src={urlFor(selected).width(1200).url()}
              alt="Gallery selected image that user clicked"
              fill
              className="object-contain rounded"
              onClick={() => setSelected(null)}
              onLoadingComplete={() => setModalImgLoaded(true)}
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
