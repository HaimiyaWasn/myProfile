"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Archivo_Black, Bebas_Neue } from "next/font/google";

import DekstopBottomLeftLine from "./HeroLines/DekstopBottomLeftLine";
import DekstopTopRightLine from "./HeroLines/DekstopTopRightLine";
import MobileBottomLeftLine from "./HeroLines/MobileBottomLeftLine";
import MobileTopRightLine from "./HeroLines/MobileTopRightLine";
import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 2250);

    return () => {
      clearTimeout(lineTimer);
    };
  }, []);

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <div className="relative h-full">
        <Image
          src={BackgroundDekstop}
          alt="Background Dekstop"
          fill
          priority
          className={`hidden md:block object-cover transition-all duration-1500 ease-in-out ${
            isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
          }`}
        />
        <Image
          src={BackgroundMobile}
          alt="Background Mobile"
          fill
          priority
          className={`block md:hidden object-cover transition-all duration-1500 ease-in-out ${
            isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
          }`}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-6 w-full">
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "150%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1,
                }}
                className={`text-7xl md:text-9xl text-blue-600 uppercase ${archivoBlack.className}`}
              >
                Hello World!
              </motion.h1>
            </div>
            <motion.h2
              initial={{
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
              }}
              animate={{
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
              }}
              transition={{
                duration: 1,
                delay: 1.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mt-7 text-3xl md:text-5xl text-blue-600 font-semibold ${bebasNeue.className}`}
            >
              Welcome to My Portfolio
            </motion.h2>
          </div>
        </div>

        {/* Dekstop */}
        <div className="hidden md:block w-full">
          {showLine && <DekstopBottomLeftLine />}
          {showLine && <DekstopTopRightLine />}
        </div>

        {/* Mobile */}
        <div className="block md:hidden w-full">
          {showLine && <MobileBottomLeftLine />}
          {showLine && <MobileTopRightLine />}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            y: -40,
          }}
          animate={{
            opacity: showLine ? 1 : 0,
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
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute -left-24 -top-32 w-64 h-72 md:-left-40 md:-top-50 md:w-150 md:h-125 bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.25)] drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]"
        />
      </div>
    </section>
  );
}
