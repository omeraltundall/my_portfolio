"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const router = useRouter();

  return (
    <motion.div
      className="h-full -mt-6"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="hero photo"
            priority
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS AND LINKS */}
          <div className="w-full flex gap-4">
            <Link
              target="_blank"
              className="p-4 rounded-lg ring-1 ring-emerald-600 bg-emerald-400 text-white hover:bg-emerald-200"
              href={"/Omer_Altundal_CV.pdf"}
            >
              My Resume
            </Link>
            <Button
              variant={"black"}
              size={"special"}
              onClick={() => router.push("/portfolio")}
            >
              View My Work
            </Button>
            <Button
              variant={"ghost"}
              size={"special"}
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
