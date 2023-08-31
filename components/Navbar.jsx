"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-between w-full pt-3 mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="./assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
          alt="Prompotopia"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
    </nav>
  );
};

export default Navbar;
