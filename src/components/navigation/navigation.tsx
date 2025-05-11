import React from "react";
import NavigationAnimationItems from "./navigationAnimationItems";
import Link from "next/link";
import { MdHome } from "react-icons/md";

const NavigationLinks = [
  { name: "Työnäytteet", href: "/references" },
  { name: "Projektit", href: "/projects" },
  { name: "Galleria", href: "/gallery" },
];
export default function Navigation() {
  return (
    <header className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center shadow-2xs rounded-full min-h-[50px] bg-navigationBackground py-2 px-4 gap-2">
        <Link href="/" className="rounded-full">
          <MdHome size={24} className="text-black" />
        </Link>
        <div aria-hidden className="h-6 w-px bg-black mx-2" />
        <NavigationAnimationItems links={NavigationLinks} />
      </nav>
    </header>
  );
}
