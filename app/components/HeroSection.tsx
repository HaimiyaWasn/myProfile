"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    setIsMounted(true);

    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 1500);

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

        <div className="absolute inset-0 bg-black/50" />

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
