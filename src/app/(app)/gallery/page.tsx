import React from "react";
import GalleryList from "@/components/gallery/galleryList";

export default function Gallery() {
  return (
    <main className="min-h-dvh max-w-container mx-auto p-2 md:p-5">
      <section>
        <div className="mb-4">
          <h1 className="font-barbra text-title text-popColor uppercase">
            Galleria
          </h1>
        </div>

        <GalleryList />
      </section>
    </main>
  );
}
