import { motion } from "motion/react";

type PuddingAnimationProps = {
  show: boolean,
}

export default function PuddingAnimationTopLeft({
  show,
}: PuddingAnimationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
        y: -40,
      }}
      animate={{
        opacity: show ? 1 : 0,
        borderRadius: [
          "50% 50% 50% 50% / 50% 50% 50% 50%",
          "70% 30% 58% 42% / 42% 63% 37% 58%",
          "35% 65% 40% 60% / 65% 35% 70% 30%",
          "62% 38% 70% 30% / 30% 70% 35% 65%",
          "42% 58% 35% 65% / 60% 40% 68% 32%",
          "65% 35% 55% 45% / 45% 60% 40% 55%",
          "50% 50% 50% 50% / 50% 50% 50% 50%",
        ],

        x: [0, 40, -30, 25, -15, 0],
        y: [0, -30, 20, -15, 10, 0],

        scaleX: [1, 1.12, 0.9, 1.08, 0.95, 1],
        scaleY: [1, 0.88, 1.15, 0.94, 1.06, 1],

        rotate: [0, 8, -6, 4, -2, 0],
      }}
      transition={{
        opacity: {
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        },
        borderRadius: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute -left-24 -top-32 w-64 h-72 md:-left-40 md:-top-48 md:w-150 md:h-125 bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.25)] drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]"
    />
  );
}
