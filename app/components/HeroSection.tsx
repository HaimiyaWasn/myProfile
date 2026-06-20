"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import BackgroundDekstop from "@/public/img/background/1073991.jpg";
import BackgroundMobile from "@/public/img/background/1192941.png";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
