"use client";

import Image from "next/image";
import Link from "next/link";
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
import TextHeroAnimation from "./HeroAnimation/TextHeroAnimation";

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

  const [showNavbar, setShowNavbar] = useState(false);

  const menuNavbars = ["About Me", "Tech Stack", "Project"]

  useEffect(() => {
    setIsMounted(true);

    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 2250);

    return () => {
      clearTimeout(lineTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;

      setShowNavbar(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.history.replaceState({}, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <motion.header
        animate={{
          opacity: showNavbar ? 0 : 1,
        }}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-4"
      >
        <div className="mx-auto flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleBackToTop();
            }}
            className={`text-white text-2xl md:text-3xl ${archivoBlack.className}`}
          >
            <motion.span
              initial={{
                opacity: 0,
                rotate: -15,
                filter: "blur(8px)",
                clipPath: "inset(0 50% 0 50%)",
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                filter: "blur(0px)",
                clipPath: "inset(0 0% 0 0%)",
              }}
              transition={{
                delay: 2.25,
                duration: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block text-white text-2xl md:text-3xl ${archivoBlack.className}`}
            >
              Haimiya Wasn
            </motion.span>
          </Link>

          <nav className="hidden md:flex gap-6 text-white font-semibold">
            {menuNavbars.map((menu, index) => (
              <motion.a
                key={menu}
                href="#"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 2.25 + index * 0.25,
                }}
              >
                {menu}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>
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
                className={`text-5xl md:text-7xl text-blue-600 uppercase ${archivoBlack.className}`}
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
              className={`mt-5 text-3xl md:text-5xl text-blue-600 font-semibold ${bebasNeue.className}`}
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

        {/* Text Hero Berjalan */}
        <TextHeroAnimation show={showLine} />
      </div>
    </section>
  );
}
