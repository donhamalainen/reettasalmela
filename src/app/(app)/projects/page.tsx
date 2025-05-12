import ProjectsPopup from "@/components/projects/projectsPopup";
import React from "react";

export default function Projects() {
  return (
    <main className="min-h-dvh max-w-container mx-auto p-2 md:p-5">
      <section className="">
        <div className="mb-4">
          <h1 className="font-barbra text-title text-popColor uppercase">
            Projektit
          </h1>
        </div>

        <ProjectsPopup />
      </section>
    </main>
  );
}
