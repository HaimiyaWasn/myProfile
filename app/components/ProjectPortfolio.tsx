"use client"

import { motion } from "motion/react"
import { Archivo_Black } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"]
})

export default function ProjectPortfolio() {
  return (
    <section className="relative bg-white min-h-screen flex flex-col justify-around px-7 md:px-16" id="works-project">
      <motion.h1 
        initial={{
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          x: 0,
        }}
        viewport={{
          once: false,
          margin: "-3% 0px -3% 0px"
        }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.175, 1],
        }}
        className={`text-3xl md:text-5xl text-black pb-3 ${archivoBlack.className}`}
      >
        Works Project
      </motion.h1>
    </section>
  )
}