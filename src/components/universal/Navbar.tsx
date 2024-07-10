"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <header className={` p-6 poppins text-bluegray flex justify-between font-bold z-50 relative px-40 ${path == '/' ? 'bg-bg bg-opacity-80' : ''}`}>
      <div>
        <Image
          src="/assets/navbar.png"
          width={1000}
          height={1000}
          alt="owl logo"
          className="w-36"
        />
      </div>
      <nav className="flex items-center text-xl">
        <ul className="flex space-x-7">
          <li className="hover">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover">
            <Link href="/news">NEWS</Link>
          </li>
          <li className="hover">
            <Link href="/tourney">TOURNEY</Link>
          </li>
          <li className="hover">
            <Link href="/faceit">HUB</Link>
          </li>
          <li className="hover">
            <Link href="/prizes">PRIZES</Link>
          </li>
          <li className="hover">
            <Link href="/staff">STAFF</Link>
          </li>

          <li className="hover">
            <Link href="/team">TEAM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
