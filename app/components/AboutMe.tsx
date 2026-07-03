"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";

import ProfileImage from "@/public/img/profileImage/900157044290895991.jpeg";
import CircularText from "./Animation/CircularText";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 min-h-screen py-24 px-6 md:px-12"
      id="about-me"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <CircularText
          text="HAIMIYA*WASN*"
          spinDuration={10}
          className="flex md:hidden absolute top-28 left-0 -translate-x-1/2 opacity-5 scale-[1]"
        />
        <CircularText
          text="HAIMIYA*WASN*"
          spinDuration={25}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-10 scale-[2.5]"
        />
        <CircularText
          text="HAIMIYA*WASN*"
          className="flex md:hidden absolute bottom-28 left-0 -translate-x-1/2 opacity-5 scale-[1.5]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-6xl text-white mb-4 ${archivoBlack.className}`}
          >
            About Me
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate about building modern web experiences and creating
            meaningful digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[350px_1fr] gap-10 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-blue-600 to-cyan-500 opacity-30 blur-xl" />

              <div className="relative p-2 rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <motion.div
                  initial={{
                    clipPath: "polygon(0 0, 0 0, -15% 100%, 0 100%)",
                  }}
                  whileInView={{
                    clipPath: "polygon(0 0, 115% 0, 100% 100%, 0 100%)",
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={ProfileImage}
                    alt="Profile Image About"
                    width={350}
                    height={450}
                    className="rounded-3xl object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 1,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Hi, I'm <span className="text-blue-600">Haimiya Wasn</span>
              </h2>

              <p className="text-slate-300 leading-relaxed text-justify">
                I am a <strong>Frontend Developer</strong>,
                <strong> Content Creator</strong>, and
                <strong> Web Novelist</strong> with a background in Full-Stack
                Development and around 11 months of professional experience at
                Zi.Care (PT. Jejaring Tiga Artha). I specialize in{" "}
                <strong>React</strong>,<strong> TypeScript</strong>,
                <strong> Next.js</strong>, and
                <strong> Tailwind CSS</strong>, focusing on building responsive,
                user-friendly, and visually appealing web applications.
                Previously, I worked with <strong>Laravel</strong>,{" "}
                <strong>PHP</strong>, <strong>Vue.js</strong>, and{" "}
                <strong>Phalcon</strong>, which helped me develop a strong
                understanding of both frontend and backend development. My goal
                is to keep growing as a <strong>Frontend Developer</strong> and
                create web experiences that are enjoyable and accessible for
                everyone.
              </p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: -25,
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
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  Frontend Development
                </h3>
                <p className="text-slate-400 text-sm mt-2">Main Specialist</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">Next.js</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Favorite Framework
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
