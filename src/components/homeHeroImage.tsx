"use client";
import { useSanityFetch } from "@/hook/useSanityFetch";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HomeHeroImage() {
  const { data, loading } = useSanityFetch('*[_type == "contact"][0]{image}');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [objectPosition, setObjectPosition] = useState("center");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setObjectPosition("left 50%");
      } else if (window.innerWidth < 1024) {
        setObjectPosition("left");
      } else if (window.innerWidth < 1085) {
        setObjectPosition("left");
      } else {
        setObjectPosition("left 50% top 50%");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading || !data?.image) {
    return <div className="relative bg-neutral-200 animate-pulse rounded-xl" />;
  }

  return (
    <div className="relative w-full h-[var(--imageHeightScale)]">
      {!imgLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse rounded-xl z-0" />
      )}
      <Image
        src={urlFor(data.image).url()}
        alt="My hero image where I am smiling and looking at the tree in the background"
        fill
        className="object-cover transition-opacity duration-500 rounded-4xl object-center"
        priority
        onLoad={() => setImgLoaded(true)}
        style={{ opacity: imgLoaded ? 1 : 0 }}
        objectPosition={objectPosition}
      />
    </div>
  );
}
