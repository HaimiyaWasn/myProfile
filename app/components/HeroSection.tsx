"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import DekstopLeftLine from "./HeroLines/DekstopLeftLine";
import DekstopRightLine from "./HeroLines/DekstopRightLine";
import MobileLeftLine from "./HeroLines/MobileLeftLine";
import MobileRightLine from "./HeroLines/MobileRightLine";
import MobileMenuFAB from "./MobileMenuFAB";
import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";
import { lineAnimation } from "./Animation/LineAnimation";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setShowLine(true);
    }, 1500);

    return () => clearTimeout(timer);
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

        {/* Dekstop */}
        <div className="hidden md:block w-full">
          {showLine && <DekstopLeftLine />}
          {showLine && <DekstopRightLine />}
        </div>

        <div>
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-145"
            width="580"
            height="299"
            viewBox="0 0 580 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              {...lineAnimation}
              transition={{
                delay: 1,
                duration: 10,
                times: [0, 0.25, 0.5, 0.75, 0.751, 1],
                ease: "linear",
                repeat: Infinity,
              }}
              d="M62.0022 292.362C18.0022 268.362 16.8928 211.362 7.00222 146.863C0.283892 103.05 -0.997856 74.8622 18.0022 30.3623C37.0023 -14.1375 404.002 1.36244 506.002 30.3626C506.002 30.3626 580.185 56.9926 576.502 93.8626C573.395 124.972 516.502 146.863 516.502 146.863L261.002 156.863C261.002 156.863 263.85 284.52 207.502 292.362C145.543 300.986 140.502 146.863 140.502 146.863C140.502 146.863 118.682 323.279 62.0022 292.362Z"
              stroke="white"
              strokeWidth={5}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Mobile */}
        <div className="block md:hidden w-full">
          {showLine && <MobileLeftLine />}
          {showLine && <MobileRightLine />}
        </div>

        {/* Mobile Menu FLoating App Button */}
        <MobileMenuFAB />
      </div>
    </section>
  );
}
