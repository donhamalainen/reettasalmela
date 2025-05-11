/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import React from "react";
import { useSanityFetch } from "@/hook/useSanityFetch";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

export default function FooterComponent() {
  const { data: contact } = useSanityFetch(
    '*[_type == "contact"][0]{email, phone}'
  );

  return (
    <footer
      className="relative w-full min-h-96 p-2 md:p-5 mt-5 overflow-hidden bg-amber-100"
      aria-label="footer"
    >
      {/* Sisältö */}
      <div className="relative z-10 w-fit">
        <h4 className="font-barbra text-popColor text-title-md uppercase">
          Ota yhteyttä
        </h4>
        <article
          className="mt-5 h-full relative font-cabinet-bold flex flex-col text-parag-sm"
          aria-description="contact information"
        >
          <a
            href={`mailto:${contact?.email ?? "reetta.salmela03@gmail.com"}`}
            aria-label="email"
          >
            {contact?.email ?? "reetta.salmela03@gmail.com"}
          </a>
          {contact?.phone && (
            <a
              href={`tel:${contact.phone ?? "+358451309989"}`}
              aria-label="phone number"
            >
              {contact.phone ?? "+358451309989"}
            </a>
          )}
        </article>
      </div>
    </footer>
  );
}
