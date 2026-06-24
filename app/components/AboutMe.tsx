"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

import ProfileImageAbout from "@/public/img/pofileImage/NagisaKamisiro1.jpeg";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section
      className="relative bg-white min-h-[calc(100vh-50px)] flex flex-col justify-around py-10 md:py-0 px-7 md:px-17 scroll-mt-15"
      id="about-me"
    >
      <div className="space-y-10">
        <motion.h1
          initial={{
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            x: 0,
          }}
          viewport={{
            once: false,
            margin: "-3% 0px -3% 0px",
          }}
          transition={{
            duration: 1,
            ease: [0.77, 0, 0.175, 1],
          }}
          className={`text-3xl md:text-5xl text-black ${archivoBlack.className}`}
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: false,
            margin: "-15% 0px -15% 0px",
          }}
          className="grid md:grid-cols-2 gap-7 items-center max-w-7xl mx-auto mb-0 md:mb-10"
        >
          <div className="flex justify-center">
            <div className="p-2 border-4 border-black rounded-tr-2xl rounded-b-2xl overflow-hidden">
              <motion.div
                initial={{
                  clipPath: "polygon(0 0, 0 0, -15% 100%, 0 100%)",
                }}
                whileInView={{
                  clipPath: "polygon(0 0, 115% 0, 100% 100%, 0 100%)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: false,
                  margin: "-15% 0px -15% 0px",
                }}
              >
                <Image
                  src={ProfileImageAbout}
                  alt="Profile Image About"
                  width={300}
                  height={300}
                  priority
                  className="object-cover rounded-tr-lg rounded-b-lg"
                />
              </motion.div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-black text-justify">
              <span className="font-bold text-blue-600">
                Hi, I'm Haimiya Wasn, or simply Wasn.
              </span>{" "}
              I am a Frontend Developer with a background in Full-Stack
              Development and around 11 months of professional experience at
              Zi.Care (PT. Jejaring Tiga Artha). I specialize in React,
              TypeScript, Next.js, and Tailwind CSS, focusing on building
              responsive, user-friendly, and visually appealing web
              applications. Previously, I worked with Laravel, PHP, Vue.js, and
              Phalcon, which helped me develop a strong understanding of both
              frontend and backend development. My goal is to keep growing as a
              Frontend Developer and create web experiences that are enjoyable
              and accessible for everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
