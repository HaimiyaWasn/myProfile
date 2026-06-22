"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Archivo_Black, Bebas_Neue } from "next/font/google";

import DekstopBottomLeftLine from "./HeroAnimation/DekstopBottomLeftLine";
import DekstopTopRightLine from "./HeroAnimation/DekstopTopRightLine";
import MobileBottomLeftLine from "./HeroAnimation/MobileBottomLeftLine";
import MobileTopRightLine from "./HeroAnimation/MobileTopRightLine";
import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";
import PuddingAnimationTopLeft from "./HeroAnimation/PuddingAnimationTopLeft";

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
          
        {/* Pudding Animation */}
        <PuddingAnimationTopLeft show={showLine} />
      </div>
    </section>
  );
}
