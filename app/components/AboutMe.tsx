import { motion } from "motion/react"
import { Archivo_Black } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

export default function AboutMe() {
  return (
    <section className="relative z-10 bg-blue-600 pt-12 px-5 md:px-10" id="about-me">
      <div className="space-y-5 pb-5">
        <h1 className={`text-3xl md:text-5xl text-white ${archivoBlack.className}`}>About Me</h1>
        <p className={`text-xl`}>
          Halow
        </p>
      </div>
    </section>
  )
}