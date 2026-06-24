"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Archivo_Black } from "next/font/google";
import { RiReactjsLine, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

import { SiTypescript, SiFramer, SiPostgresql, SiDocker } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const techStacks = [
  {
    number: "01",
    name: "React",
    icon: RiReactjsLine,
    color: "#61DAFB",
  },
  {
    number: "02",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    number: "03",
    name: "Next.js",
    icon: RiNextjsLine,
    color: "#000000",
  },
  {
    number: "04",
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#38BDF8",
  },
  {
    number: "05",
    name: "Framer Motion",
    icon: SiFramer,
    color: "#FF0055",
  },
  {
    number: "06",
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    number: "07",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    number: "08",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("300vh");

  useLayoutEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const distance = Math.max(trackWidth - viewportWidth, 0);

      setScrollDistance(distance);

      setSectionHeight(`${window.innerHeight + distance}px`);
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  const x = useSpring(rawX, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative bg-blue-600"
      style={{
        height: sectionHeight,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col justify-center">
          {/* Header */}
          <div className="px-7 md:px-17 mb-10">
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
                once: true,
              }}
              transition={{
                duration: 0.9,
                ease: [0.77, 0, 0.175, 1],
              }}
              className={`text-3xl md:text-5xl text-white ${archivoBlack.className}`}
            >
              Tech Stack
            </motion.h1>

            <p className="mt-3 text-sm md:text-base text-blue-200">
              Technologies I use to build modern web applications
            </p>
          </div>

          {/* Horizontal Track */}
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 pl-10 md:pl-20"
            >
              {techStacks.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.number}
                    className="
                      relative
                      flex-shrink-0
                      w-[280px]
                      md:w-[340px]
                      h-[360px]
                      md:h-[430px]
                      rounded-3xl
                      bg-white
                      border
                      overflow-hidden
                      p-7
                    "
                    style={{
                      borderColor: `${tech.color}33`,
                    }}
                  >
                    {/* Background Number */}
                    <span
                      className={`
                        absolute
                        top-4
                        left-5
                        text-[90px]
                        md:text-[120px]
                        leading-none
                        select-none
                        ${archivoBlack.className}
                      `}
                      style={{
                        color: `${tech.color}15`,
                      }}
                    >
                      {tech.number}
                    </span>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={120}
                        style={{
                          color: tech.color,
                        }}
                      />
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-7 left-7">
                      <h2
                        className={`text-3xl md:text-4xl ${archivoBlack.className}`}
                        style={{
                          color: tech.color,
                        }}
                      >
                        {tech.name}
                      </h2>

                      <div
                        className="mt-4 h-[2px] w-14 rounded-full"
                        style={{
                          backgroundColor: tech.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Spacer akhir */}
              <div className="w-8 md:w-16 flex-shrink-0" />
            </motion.div>
          </div>

          {/* Scroll Hint */}
          <motion.div
            style={{
              opacity: hintOpacity,
            }}
            className="
              absolute
              bottom-10
              left-1/2
              -translate-x-1/2
              flex
              flex-col
              items-center
              gap-2
              text-xs
              text-blue-200
            "
          >
            <span>Scroll to explore</span>

            <motion.div
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
                ease: "easeInOut",
              }}
            >
              →
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}