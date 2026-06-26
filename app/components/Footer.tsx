"use client";

import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/HaimiyaWasn",
      icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/its.haimiyawasn",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-7 py-20 md:px-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[6px] text-neutral-500">
              Let's Build Something
            </p>

            <h2
              className={`text-4xl font-black leading-tight md:text-6xl ${archivoBlack.className}`}
            >
              Have an idea <br />
              Let's work together
            </h2>

            <p className="mt-6 text-neutral-400">
              Whether it's a website, web app, or portfolio, I'm always open for
              collaboration and exciting opportunities.
            </p>

            <Link
              href="https://wa.me/6281226393587"
              target="_blank"
              className="inline-block mt-8 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="grid gap-8 text-sm"
          >
            <div className="space-y-2">
              <p className="text-neutral-500">Email</p>
              <p className="text-lg">wahyuajisn@gmail.com</p>
            </div>

            <div className="space-y-2">
              <p className="text-neutral-500">Location</p>
              <p className="text-lg">Central Java, Indonesia</p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-white/25" />

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 MY PORTFOLIO ALL RIGHTS RESERVED powered by Haimiya Wasn</p>

          <div className="flex items-center mt-7 md:mt-0">
            <motion.button
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: easeInOut,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              <HiOutlineArrowUp size={18} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
