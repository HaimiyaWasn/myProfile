import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

type TextHeroAnimationProps = {
  show: boolean;
}

export default function TextHeroAnimation({
  show,
}: TextHeroAnimationProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.h3
        initial={{
          opacity: 0,
          x: "50%",
        }}
        animate={
          show
            ? {
                opacity: 1,
                x: ["50%", "-100%"],
              }
            : {
                opacity: 0,
                x: "50%",
              }
        }
        transition={{
          opacity: {
            duration: 0.3,
          },
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className={`absolute bottom-5 md:bottom-0 whitespace-nowrap leading-none text-[150px] md:text-[300px] text-transparent uppercase ${archivoBlack.className}`}
        style={{
          WebkitTextStroke: "3px rgba(37, 99, 235, 0.3)",
        }}
      >
        Wasn Portfolio
      </motion.h3>
    </div>
  );
}
