"use client";

import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

type Journey = {
  id: number;
  year: number;
  title: string;
  description: string;
};

type Props = {
  journeys: Journey[];
};

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function PersonalJourneyClient({ journeys }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-blue-600 min-h-screen py-24 px-6 md:px-12"
      id="personal-journey"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-6xl text-white pb-3 ${archivoBlack.className}`}
          >
            Personal Journey
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A brief timeline of my growth, experiences, and passion for creating
            digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
