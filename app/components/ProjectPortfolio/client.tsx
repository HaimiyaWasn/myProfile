"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import Project1 from "@/public/img/projectPortfolio/Project1.jpg";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function ProjectPortfolioCLient() {
  return (
    <section
      id="works-project"
      className="relative bg-slate-900 min-h-screen flex flex-col justify-center px-7 md:px-16 py-18"
    >
      <motion.h1
        initial={{
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          x: 0,
        }}
        viewport={{
          once: false,
          margin: "-3% 0px -3% 0px",
        }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.175, 1],
        }}
        className={`text-3xl md:text-5xl text-white pb-3 mb-14 ${archivoBlack.className}`}
      >
        Works Project
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          margin: "-15% 0px 015% 0px",
        }}
        transition={{
          duration: 0.75,
        }}
        whileHover={{
          y: -7,
        }}
        className="group grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl border border-white/25 bg-white/ backdrop-blur-md overflow-hidden p-5 md:p-7"
      >
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={Project1}
            alt="Image Project 1"
            className="w-full h-62.5 md:h-87.5 object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <span className="text-blue-400 text-sm uppercase tracking-[0.3em]">
            Frontend Development
          </span>
          <h2
            className={`text-2xl md:text-3xl text-white ${archivoBlack.className}`}
          >
            O2H Official Site
          </h2>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            Personal portfolio website for Orang-orangan Halimawan (O2H)
            developed using Next.js and Tailwind CSS with a modern, responsive,
            and interactive user experience.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "TailwindCSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="pt-4 flex flex-col md:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1">
              View Demo
              <FiExternalLink size={18} />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-600 bg-transparent text-white transition-all hover:bg-slate-800 hover:-translate-y-1">
              View Github
              <FiGithub size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
