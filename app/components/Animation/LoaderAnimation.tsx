"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

const messages = [
  "Initializing Potfolio...",
  "Loading Components...",
  "Preparing Experience...",
  "Optimizing Performance...",
  "Finalizing Setup...",
  "Almost Ready...",
]

type LoaderAnimationProps = {
  onComplete: () => void;
}

export default function LoaderAnimation({
  onComplete,
}: LoaderAnimationProps) {
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

        return prev + 1;
      });
    }, 7);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => 
        Math.min(prev + 1, messages.length - 1)
      );
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
        <motion.section>
          
        </motion.section>
      )}
    </AnimatePresence>
  )
}