import ReferenceList from "@/components/reference/referenceList";
import ReferencePopup from "@/components/reference/referencePopup";
import { Metadata } from "next";
import React from "react";

// Metadata
export const metadata: Metadata = {
  title: "Juttunäytteet | Reetta Salmela",
  description: "Portfolio of Reetta Salmela, journalist.",
  keywords: ["portfolio", "journalist", "Reetta Salmela"],
  authors: [{ name: "Reetta Salmela", url: "https://reettasalmela.fi" }],
  creator: "Don Hämäläinen",
  publisher: "Reetta Salmela",
  openGraph: {
    type: "website",
    locale: "fi-FI",
    siteName: "Reetta Salmela",
    url: "https://reettasalmela.fi",
  },
};

export default function References() {
  return (
    <main className="h-full min-h-dvh p-2 md:p-5">
      <section className="">
        <div className="mb-4">
          <h1 className="font-barbra text-title text-popColor uppercase">
            Juttunäytteet
          </h1>
        </div>

        <ReferencePopup />
      </section>
      <ReferenceList />
    </main>
  );
}
