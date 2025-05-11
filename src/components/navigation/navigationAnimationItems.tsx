"use client";

// This file is used to create the animation for the navigation bar
import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface NavigationItem {
  name: string;
  href: string;
}
export default function NavigationAnimationItems({
  links,
}: {
  links: NavigationItem[];
}) {
  const itemRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current.children,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
        }
      );
    }
  }, []);
  return (
    <div className="flex flex-col items-center">
      <ul
        className="font-cabinet font-extralight flex space-x-2 overflow-y-hidden"
        ref={itemRef}
      >
        {links.map((item, index) => (
          <li key={index}>
            <Link className="text-black" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
