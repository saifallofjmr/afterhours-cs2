import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="poppins text-bluegray flex justify-between font-bold">
      <div>
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="owl logo"
          className="w-36"
        />
      </div>
      <nav className="flex items-center">
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
