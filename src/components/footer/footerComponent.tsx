/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import React from "react";
import { useSanityFetch } from "@/hook/useSanityFetch";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";

export default function FooterComponent() {
  const { data: contact } = useSanityFetch(
    '*[_type == "contact"][0]{email, phone, social}'
  );

  return (
    <footer
      className="relative w-full min-h-[300px] p-2 md:p-5 mt-5 overflow-hidden"
      aria-label="footer"
    >
      <h5
        aria-hidden
        className="text-background-xl font-barbra text-amber-200 uppercase leading-none"
      >
        Kiinnostuitko?
      </h5>

      <div className="relative z-10">
        <article
          className="h-full relative font-cabinet flex flex-col md:items-center md:flex-row md:justify-between text-parag-xs gap-1 md:gap-5"
          aria-description="contact information"
        >
          <div className="flex flex-wrap gap-1">
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
          </div>

          <div className="flex gap-2 items-center mt-2 md:mt-0">
            {Array.isArray(contact?.social) &&
              contact.social.map((item: any, idx: number) => {
                if (item.platform === "Instagram" && item.url) {
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="px-5 py-2 rounded-full bg-navigationBackground"
                    >
                      Instagram
                    </a>
                  );
                }
                if (item.platform === "LinkedIn" && item.url) {
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="px-5 py-2 rounded-full bg-navigationBackground"
                    >
                      LinkedIn
                    </a>
                  );
                }
                return null;
              })}
          </div>
        </article>
      </div>
    </footer>
  );
}
