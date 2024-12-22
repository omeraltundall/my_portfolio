"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps{
  link: {
    url: string;
    title: string;
  }
}

export default function NavLink({link}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded px-3 py-1 ${
        pathname === link.url ? "bg-gradient-to-l from-slate-950 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 hover:text-black" : ""
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
