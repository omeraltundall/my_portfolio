"use client";

import Link from "next/link";
import React, { useState } from "react";
import { navLinks, socialLinks } from "@/constants";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "motion/react";
import {
  topVariants,
  centerVariants,
  bottomVariants,
  listVariants,
  listItemVariants,
} from "@/constants/animation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl text-black">
      <div className="hidden md:flex gap-4 w-1/3">
        {navLinks.map((navLink) => (
          <NavLink link={navLink} key={navLink.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex md:w-1/2 sm:w-1/3  justify-center items-center">
        <Link
          href="/"
          className="text-sm bg-gradient-to-l from-slate-950 to-slate-800 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white">Omer</span>
          <span className="ml-1 w-16 h-8 rounded bg-white flex items-center justify-center">
            Altundal
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
        {socialLinks.map((socialLink) => (
          <Link href={socialLink.url} key={socialLink.name} target="_blank">
            <Image
              src={socialLink.imageUrl}
              alt={socialLink.name}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          aria-label="burger-button"
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-l from-slate-950 to-slate-800 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navLinks.map((navLink) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={navLink.title}
              >
                <Link href={navLink.url} onClick={()=> setIsOpen(!isOpen)}>{navLink.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
