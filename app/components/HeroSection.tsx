"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setShowLine(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <div className="relative h-full">
        <Image
          src={BackgroundDekstop}
          alt="Background Dekstop"
          fill
          priority
          className={`hidden md:block object-cover transition-all duration-1500 ease-in-out ${
            isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
          }`}
        />
        <Image
          src={BackgroundMobile}
          alt="Background Mobile"
          fill
          priority
          className={`block md:hidden object-cover transition-all duration-1500 ease-in-out ${
            isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
          }`}
        />
        {showLine && (
          <svg
            className="hidden md:block absolute left-0 bottom-0 w-full max-w-147 h-auto"
            width="587"
            height="310"
            viewBox="0 0 587 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2443_91)">
              <motion.path
                initial={{
                  pathLength: 0,
                  pathOffset: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: [0, 1, 1, 0, 0],
                  pathOffset: [0, 0, 0, 1, 1],
                  opacity: [0, 1, 1, 1, 0, 0],
                }}
                transition={{
                  duration: 17,
                  times: [0, 0.25, 0.5, 0.75, 0.751, 1],
                  ease: "linear",
                  repeat: Infinity,
                }}
                d="M578 309.5C578 309.5 517.5 280.5 499.719 278.086C466.891 273.63 431.936 283.197 402.967 267.124C373.687 250.878 375.159 220.341 346.611 202.842C322.1 187.817 298.706 196.602 277.289 177.428C238.872 143.037 230.102 104.124 235.895 62.3194C240.384 29.9295 259.966 27.9363 267.315 27.9363C285.767 27.9363 293.781 66.6902 287.762 86.7365C284.77 96.7026 277.194 101.645 270.806 96.7026C264.492 91.8175 270.601 84.4001 281.279 78.2653C301.228 66.8042 329.453 58.6294 342.123 71.289C350.102 79.2619 352.889 110.79 308.708 121.618C282.276 128.096 259.18 131.206 224.425 121.618C171.78 107.094 193.819 25.1046 141.637 9.00059C115.771 1.01788 98.5543 2.34502 72.3146 9.00059C40.0981 17.1721 0 53.8482 0 53.8482"
                stroke="white"
                strokeWidth={5}
                strokeLinecap="round"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2443_91"
                x="-7.5"
                y="0"
                width="593"
                height="321"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2443_91"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2443_91"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}

        {showLine && (
          <svg
            className="hidden md:block absolute right-0 top-0 w-full max-w-114 h-auto"
            width="456"
            height="361"
            viewBox="0 0 456 361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2453_145)">
              <motion.path
                initial={{
                  pathLength: 0,
                  pathOffset: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: [0, 1, 1, 0, 0],
                  pathOffset: [0, 0, 0, 1, 1],
                  opacity: [0, 1, 1, 1, 0, 0],
                }}
                transition={{
                  delay: 1,
                  duration: 10,
                  times: [0, 0.25, 0.5, 0.75, 0.751, 1],
                  ease: "linear",
                  repeat: Infinity,
                }}
                d="M72.8652 1C72.8652 1 -31.7309 89.3247 23.7013 124.692C79.7941 160.482 144.193 78.2363 220.935 91.7566C371.832 118.341 20.1657 295.907 158.468 342.435C295.034 388.379 457.5 178.122 457.5 178.122"
                stroke="black"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2453_145"
                x="0"
                y="-2.5"
                width="465"
                height="363"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2453_145"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2453_145"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}

        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="fixed left-6 top-6 z-30 flex h-10 w-10 items-center"
        >
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "w-7 rotate-45" : "w-7 -translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "opacity-0 scale-0" : "w-5 opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
              openSidebar ? "w-7 -rotate-45" : "w-7 translate-y-2"
            }`}
          />
        </button>

        <div
          onClick={() => setOpenSidebar(false)}
          className={`fixed z-20 inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
            openSidebar ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
