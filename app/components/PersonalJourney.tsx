"use client"

import { motion } from "motion/react"
import { Archivo_Black } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

export default function PersonalJourney() {
  return (
    <section className="relative bg-blue-600 min-h-screen" id="personal-journey">
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: false,
            margin: "-3% 0px -3% 0px",
          }}
          transition={{
            duration: 1,
            ease: [0.77, 0, 0.175, 1],
          }}
          className={`text-3xl md:text-5xl text-white pb-3 ${archivoBlack.className}`}
        >
          Personal Journey
        </motion.h1>
      </div>
    </section>
  )
}