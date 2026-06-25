"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

type FillFABMenuProps = {
  onClose: () => void;
};

export default function FillFABMenu({ onClose }: FillFABMenuProps) {
  const [navDone, setNavDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuFillNavs = [
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
      href: "#works-project",
    },
    {
      label: "Contact",
      href: "#about-me",
    },
  ];

  useEffect(() => {
    const totalTime = (menuFillNavs.length - 1) * 0.15 + 0.75;

    const timer = setTimeout(() => {
      setNavDone(true);
    }, totalTime * 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setMenuOpen(true);
  }, []);

  return (
    <motion.div className="flex min-h-screen flex-col px-8 py-15">
      <div className="space-y-20">
        <nav className="flex flex-col gap-10 mb-20">
          {menuFillNavs.map((menu, index) => (
            <div key={menu.label} className="overflow-hidden">
              <motion.a
                initial={{
                  y: "150%",
                  opacity: 1,
                }}
                animate={{
                  y: "0%",
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                href={menu.href}
                onClick={onClose}
                className={`block text-2xl uppercase text-blue-600 ${archivoBlack.className}`}
              >
                {menu.label}
              </motion.a>
            </div>
          ))}
        </nav>

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: navDone ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-px bg-gray-600 origin-left"
        />

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between"
        >
          <h1 className={`text-xl ${archivoBlack.className}`}>Haimiya Wasn</h1>
          
        </motion.div>
      </div>
    </motion.div>
  );
}
