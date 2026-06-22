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
      className="relative bg-white py-7 md:py-12 px-7 md:px-17"
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
        <div className="grid md:grid-cols-2 gap-7 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="p-2 border-4 border-black rounded-tr-2xl rounded-b-2xl overflow-hidden">
              <Image
                src={ProfileImageAbout}
                alt="Profile Image About"
                width={300}
                height={300}
                priority
                className="object-cover rounded-tr-lg rounded-b-lg"
              />
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-lg md:text-xl text-black text-justify">
              <span className="font-bold text-blue-600">Hi, I'm Wasn.</span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              mollitia porro sapiente itaque accusantium placeat facilis ad
              delectus labore, quos laudantium nemo dicta iure ratione debitis
              cumque soluta libero dignissimos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
