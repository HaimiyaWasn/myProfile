"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import DekstopBottomLeftLine from "./HeroLines/DekstopBottomLeftLine";
import DekstopTopRightLine from "./HeroLines/DekstopTopRightLine";
import MobileBottomLeftLine from "./HeroLines/MobileBottomLeftLine";
import MobileTopRightLine from "./HeroLines/MobileTopRightLine";
import MobileMenuFAB from "./MobileMenuFAB";
import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [showLine, setShowLine] = useState(false);

  const [showTextUtama, setShowTextUtama] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 1500);

    const textUtamaTimer = setTimeout(() => {
      setShowTextUtama(true);
    }, 2000);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(textUtamaTimer);
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

        <div className="absolute inset-0 bg-black/50" />

        {showTextUtama && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center px-6">
              <motion.h1
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className={``}
              >
                Hello World!
              </motion.h1>
            </div>
          </div>
        )}

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

        {/* Mobile Menu FLoating App Button */}
        <MobileMenuFAB />
      </div>
    </section>
  );
}
