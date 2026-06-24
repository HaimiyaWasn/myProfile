"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Archivo_Black } from "next/font/google";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiDaisyui,
  SiCanva,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const techStack = [
  {
    number: "01",
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    number: "02",
    name: "CSS",
    icon: SiCss,
    color: "#61DAFB",
  },
  {
    number: "03",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#61DAFB",
  },
  {
    number: "04",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    number: "05",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#61DAFB",
  },
  {
    number: "06",
    name: "PHP",
    icon: SiPhp,
    color: "#61DAFB",
  },
  {
    number: "07",
    name: "NextJS",
    icon: SiNextdotjs,
    color: "#61DAFB",
  },
  {
    number: "08",
    name: "Laravel",
    icon: SiLaravel,
    color: "#61DAFB",
  },
  {
    number: "09",
    name: "MySQL",
    icon: SiMysql,
    color: "#61DAFB",
  },
  {
    number: "10",
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#61DAFB",
  },
  {
    number: "11",
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#61DAFB",
  },
  {
    number: "12",
    name: "DaisyUI",
    icon: SiDaisyui,
    color: "#61DAFB",
  },
  {
    number: "13",
    name: "Canva",
    icon: SiCanva,
    color: "#61DAFB",
  },
  {
    number: "14",
    name: "Figma",
    icon: SiFigma,
    color: "#61DAFB",
  },
  {
    number: "15",
    name: "Github",
    icon: SiGithub,
    color: "#61DAFB",
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-blue-600 scroll-mt-15"
      style={{
        height: sectionHeight,
      }}
      id="tech-stack"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="pt-20 md:pt-28 px-7 md:px-17 mb-8">
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
              className={`text-3xl md:text-5xl text-white ${archivoBlack.className}`}
            >
              Tech Stack
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 pl-7 md:pl-17"
            >
              {techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.number}
                    className="relative shrink-0 w-70 md:w-85 h-90 md:h-107.5 rounded-3xl bg-white border overflow-hidden p-7"
                    style={{
                      borderColor: `${tech.color}33`,
                    }}
                  >
                    <span
                      className={`absolute top-4 left-5 text-[90px] md:text-[120px] leading-none select-none ${archivoBlack.className}`}
                    >
                      {tech.number}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={120} style={{ color: tech.color }} />
                    </div>

                    <div className="absolute bottom-7 left-7">
                      <h2
                        className={`text-2xl md:text-3xl ${archivoBlack.className}`}
                      >
                        {tech.name}
                      </h2>

                      <div
                        className="mt-4 h-0.5 w-14 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="w-8 md:w-16 shrink-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
