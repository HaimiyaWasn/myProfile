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

  const menuNavbars = [
    {
      label: "About Me",
      href: "#about-me",
    },
    {
      label: "Tech Stack",
      href: "#tech-stack",
    },
    {
      label: "Works Project",
      href: "#about-me",
    },
    {
      label: "Contact",
      href: "#about-me",
    },
  ];

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
          className="fixed top-0 right-0 left-0 z-10 backdrop-blur-md bg-black/30 px-6 py-4"
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
              {menuNavbars.map((menu) => (
                <a
                  key={menu.label}
                  href={menu.href}
                  className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
                >
                  {menu.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
