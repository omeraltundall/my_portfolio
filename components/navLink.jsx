"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathname === link.url ? "bg-black text-white" : ""
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
