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

        {/* Mobile */}
        <div className="block md:hidden w-full">
          {showLine && <MobileLeftLine />}
          {showLine && <MobileRightLine />}
        </div>

        <div>
          
        </div>

        {/* Mobile Menu FLoating App Button */}
        <MobileMenuFAB />
      </div>
    </section>
  );
}
