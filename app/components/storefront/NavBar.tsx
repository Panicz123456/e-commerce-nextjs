import Image from "next/image";
import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Shoe<span className="text-primary">Panicz</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>
      <div className="flex items-center">
        
      </div>
    </nav>
  );
};
