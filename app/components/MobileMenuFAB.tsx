"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import FillFABMenu from "./FillFABMenu";

export default function MobileMenuFAB() {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openSidebar]);

  return (
    <motion.div 
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="flex md:hidden "
    >
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className={`fixed bottom-4 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${
          openSidebar ? "bg-white" : "bg-blue-600"
        }`}
      >
        <span
          className={`absolute h-0.5 transition-all duration-500 ease-in-out ${
            openSidebar
              ? "w-7 rotate-45 bg-black"
              : "w-7 -translate-y-2 bg-white"
          }`}
        />
        <span
          className={`absolute h-0.5 bg-white transition-all duration-500 ease-in-out ${
            openSidebar ? "opacity-0 scale-0" : "w-5 opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 transition-all duration-500 ease-in-out ${
            openSidebar
              ? "w-7 -rotate-45 bg-black"
              : "w-7 translate-y-2 bg-white"
          }`}
        />
      </button>
      
      <div
        // onClick={() => setOpenSidebar(false)}
        className={`fixed z-10 inset-0 bg-black/75 backdrop-blur-md transition-all duration-500 ${
          openSidebar ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {openSidebar && (
        <div className="fixed inset-0 z-10">
          <FillFABMenu onClose={() => setOpenSidebar(false)} />
        </div>
      )}
    </motion.div>
  );
}
