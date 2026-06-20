"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import BackgroundDekstop from "@/public/img/background/1073991.jpg";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <div className="relative h-full">
        <Image
          src={BackgroundDekstop}
          alt="Background Dekstop"
          fill
          priority
          className={`object-cover transition-all duration-1500 ease-in-out ${
            isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
