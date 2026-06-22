"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function NavbarFixedPortfolio() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.5);
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
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
          transition={{
            duration: 0.5,
          }}
          className="fixed top-0 right-0 left-0 z-20 backdrop-blur-md bg-black/30 px-6 py-4"
        >
          <div className="mx-auto flex justify-between items-center">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleBackToTop();
              }}
              className={`text-white text-lg md:text-xl ${archivoBlack.className}`}
            >
              Haimiya Wasn
            </Link>

            <nav className="hidden md:flex gap-6 text-white font-semibold">
              <a href="#about-me">About Me</a>
              <a href="#">Tech Stack</a>
              <a href="#">Project</a>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
