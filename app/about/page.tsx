"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { Ballet } from "next/font/google";
import { skills } from "@/constants";

const ballet = Ballet({
  subsets: ["latin-ext"],
});

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  
  const educationRef = useRef<HTMLDivElement>(null);
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:pl-20 xl:pl-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/my_photo.jpg"
              alt="my photo"
              width={112}
              height={112}
              priority
              unoptimized
              className="w-64 h-96 rounded-3xl object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-xl">Hello, I&apos;m Ömer. I&apos;ve been working in front end web development for 2 years.</p>
            {/* BIOGRAPHY SIGN*/}
            <div className="self-end">
              <p className={`${ballet.className} text-2xl`}>OmerAltundal</p>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded p-2 text-sm cursor-pointer bg-gradient-to-l from-slate-950 to-slate-800 text-white hover:from-white hover:to-white hover:text-black"
                >
                  {skill.name}
                </div>
              ))}
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-medium rounded-b-lg rounded-s-lg">
                    Intern Front-End Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="px-1 py-3 text-sm italic">
                    As an intern, I made frontend web application with javascript framework.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="px-1 py-3 text-red-400 text-sm font-medium">
                    2021 - 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-medium w-fit">
                    Wiki Software
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-medium rounded-b-lg rounded-s-lg">
                    Intern Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="px-1 py-3 text-sm italic">
                    I made internship as a Fullstack Web Developer.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="px-1 py-3 text-red-400 text-sm font-medium">
                    2022 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-medium w-fit">
                    Atık Nakit
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={educationRef}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* GRADUATE TITLE */}
                  <div className="bg-white p-3 font-medium rounded-b-lg rounded-s-lg">
                    Computer Engineering
                  </div>
                  {/* JOB DESC */}
                  <div className="px-1 py-3 text-sm italic">
                    <span className="font-bold">GPA:</span> 3.34{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="px-1 py-3 text-red-400 text-sm font-medium">
                    2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-medium w-fit">
                    Çukurova University
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white px-1 py-3 font-medium rounded-b-lg rounded-s-lg">
                    High School
                  </div>
                  {/* JOB DATE */}
                  <div className="px-1 py-3 text-red-400 text-sm font-medium">
                    2017{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-medium w-fit">
                    Toki Şehit Ozan Onur İlgen Anatolian High School
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
