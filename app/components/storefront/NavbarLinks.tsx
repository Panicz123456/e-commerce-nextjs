'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
  {
    id: 4,
    name: "Kids",
    href: "/products/kids",
  },
];

export const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-4 ml-5">
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            pathname === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group p-2 font-medium rounded-md"
          )}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
