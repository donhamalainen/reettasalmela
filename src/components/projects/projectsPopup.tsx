/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSanityFetch } from "@/hook/useSanityFetch";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
export default function ProjectsPopup() {
  const {
    data: projects,
    loading,
    error,
  } = useSanityFetch(
    '*[_type == "project"] | order(publishedAt desc){title, url, description, publishedAt, image}'
  );

  if (loading) return <div>Ladataan projekteja...</div>;
  if (error) return <div>Virhe: {error.message}</div>;
  if (!projects || projects.length === 0)
    return <div>Ei projekteja löytynyt.</div>;

  return (
    <div className="space-y-4">
      {projects.map((project: any) => (
        <div
          key={project.title}
          className="flex gap-4 items-center rounded-lg bg-white p-2"
        >
          {project.image && (
            <div className="relative w-24 aspect-[3/2] flex-shrink-0">
              <Image
                src={urlFor(project.image).url()}
                alt={project.title}
                fill
                className="object-contain rounded"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base truncate">
              {project.title}
            </h3>
            {project.publishedAt && (
              <span className="text-xs text-gray-400 block mb-1">
                {new Date(project.publishedAt).toLocaleDateString("fi-FI")}
              </span>
            )}
            {project.description && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {project.description}
              </p>
            )}
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-popColor text-xs font-semibold hover:underline"
              >
                Katso projekti
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
