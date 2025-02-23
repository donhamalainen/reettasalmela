import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="p-5 flex flex-row justify-between">
      <Link href={"/"}>
        <p className="text-sm">❤️ Reetta Salmela</p>
      </Link>

      <nav>
        <ul className="flex gap-5 text-sm">
          <li>
            <Link href={"/about"}>Tietoa</Link>
          </li>
          <li>
            <Link href={"/about"}>Galleria</Link>
          </li>
          <li>
            <Link href={"/about"}>Projektit</Link>
          </li>
          <li>
            <Link href={"/about"}>Ansioluettelo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
