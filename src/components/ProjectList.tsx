"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
  { id: 3, name: "Project 3" },
  { id: 4, name: "Project 4" },
  { id: 5, name: "Project 5" },
];

export function ProjectList() {
  return (
    <div className="relative">
      <div className="overflow-y-scroll overflow-x-hidden touch-pan-y">
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.id} className="border-b-2 border-neutral-200 py-2">
              <p className="text-smallParagraph text-black">{project.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
