"use client";

import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";


const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function TechStack() {
  return (
    <section
      className="relative bg-blue-600 py-7 md:py-12 px-7 md:px-17 scroll-mt-15"
      id="about-me"
    >
      <div className="space-y-10">
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
          className={`text-3xl md:text-5xl text-white ${archivoBlack.className}`}
        >
          Tech Stack
        </motion.h1>
      </div>
    </section>
  );
}
