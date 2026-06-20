"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import DekstopLeftLine from "./HeroLines/DekstopLeftLine";
import DekstopRightLine from "./HeroLines/DekstopRightLine";
import MobileLeftLine from "./HeroLines/MobileLeftLine";
import MobileRightLine from "./HeroLines/MobileRightLine";
import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
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

        {/* Sidebar */}
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="fixed left-6 top-6 z-30 flex h-10 w-10 items-center"
        >
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "w-7 rotate-45" : "w-7 -translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "opacity-0 scale-0" : "w-5 opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "w-7 -rotate-45" : "w-7 translate-y-2"
            }`}
          />
        </button>
        <div
          onClick={() => setOpenSidebar(false)}
          className={`fixed z-20 inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
            openSidebar ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
