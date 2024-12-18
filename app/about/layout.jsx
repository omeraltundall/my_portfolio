import React from "react";

export const metadata = {
  title: "About",
  description: "Omer Altundal's Portfolio Website",
};

export default function AboutLayout({children}) {
  return (
    <section className="text-black w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">{children}</section>
  )
}
