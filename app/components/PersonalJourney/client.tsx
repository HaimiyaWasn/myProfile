"use client";

import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

type Journey = {
  id: number;
  year: number | string;
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

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-slate-700 -translate-x-1/2" />
          <div className="space-y-10">
            {journeys.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.25,
                }}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-slate-950 -translate-x-1/2 z-10" />

                <div className="ml-12 md:ml-0 md:w-[45%]">
                  <div className="rounded-2xl border border-white/10 bg-white backdrop-blur-md p-6 hover:border-red-500/50 transition-all duration-300">
                    <span className="text-sm text-blue-600 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-black mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
