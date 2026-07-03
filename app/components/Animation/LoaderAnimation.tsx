"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import ProfileImage from "@/public/img/profileImage/900157044290895991.jpeg";

const messages = [
  "Initializing Potfolio...",
  "Loading Components...",
  "Preparing Experience...",
  "Optimizing Performance...",
  "Finalizing Setup...",
  "Almost Ready...",
];

type LoaderAnimationProps = {
  onComplete: () => void;
};

export default function LoaderAnimation({ onComplete }: LoaderAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        if (prev < 50) return prev + 2;
        if (prev < 85) return prev + 1;

        return prev + 0.5;
      });
    }, 75);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) return;

    setIsVisible(false);

    const timer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
            transition: {
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-30 overflow-hidden bg-[#050505]"
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[180px]"
          />

          <div className="relative flex h-full items-center justify-center px-5 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  filter: "blur(7px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                }}
                className="mx-auto mb-6 flex w-40 justify-center sm:mb-8 sm:w-44 md:w-48 lg:mb-10 lg:w-52"
              >
                <Image
                  src={ProfileImage}
                  alt="Profile Image"
                  className="rounded-3xl object-cover h-auto w-full"
                  priority
                />
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.75,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="mb-14 text-center text-sm md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] lg:tracking-[0.45em] text-zinc-400"
              >
                Frontend Development
              </motion.p>

              <div className="mb-3 flex justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                <span className="truncate">
                  {messages[messageIndex]}
                </span>
                <span>{Math.floor(progress)}%</span>
              </div>

              <div className="h-0.5 sm:h-0.75 overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-white"
                />
              </div>

              <motion.div
                animate={{
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-zinc-600"
              >
                Crafting Digital Experience
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
