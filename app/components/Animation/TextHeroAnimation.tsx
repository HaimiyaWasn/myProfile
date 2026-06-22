import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function TextHeroAnimation() {
  return (
    <div className="absolute inset-0 flex items-end overflow-hidden pointer-events-none">
      <motion.h3
        initial={{
          opacity: 0,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          x: ["100%", "-100%"],
        }}
        transition={{
          opacity: {
            duration: 0.3,
            delay: 1.75,
          },
          x: {
            delay: 2,
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className={`absolute bottom-0 whitespace-nowrap leading-none text-[150px] md:text-[300px] text-transparent uppercase ${archivoBlack.className}`}
        style={{
          WebkitTextStroke: "3px rgba(37, 99, 235, 0.3)",
        }}
      >
        Wasn Portfolio
      </motion.h3>
    </div>
  );
}
