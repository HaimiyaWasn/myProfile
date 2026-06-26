"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Archivo_Black } from "next/font/google";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectPortfolio = {
  id: number;
  image: string;
  label: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
};

type Props = {
  projects: ProjectPortfolio[];
};

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function ProjectPortfolioCLient({ projects }: Props) {
  return (
    <section
      id="works-project"
      className="relative overflow-hidden bg-slate-900 min-h-screen py-24 px-6 md:px-12"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12"
        >
          <h1
            className={`text-4xl md:text-6xl text-white mb-4 ${archivoBlack.className}`}
          >
            Works Project
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Selected projects that showcase my experience in building modern,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative mb-10 pb-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                margin: "-15% 0px 015% 0px",
              }}
              transition={{
                duration: 0.75,
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden p-5 md:p-7"
            >
              <span
                className={`absolute hidden md:flex right-6 text-[120px] md:text-[180px] text-white/5 leading-none pointer-events-none ${archivoBlack.className}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-62.5 md:h-87.5 object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <span className="text-blue-400 text-sm uppercase tracking-[0.3em]">
                  {project.label}
                </span>
                <h2
                  className={`text-2xl md:text-3xl text-white ${archivoBlack.className}`}
                >
                  {project.title}
                </h2>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex flex-col md:flex-row gap-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1"
                  >
                    View Demo
                    <FiExternalLink size={18} />
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-600 bg-transparent text-white transition-all hover:bg-slate-800 hover:-translate-y-1"
                  >
                    View Github
                    <FiGithub size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
