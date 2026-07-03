"use client"

import React, { useEffect, useState } from "react"
import LoaderAnimation from "./Animation/LoaderAnimation"

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaded = sessionStorage.getItem("portfolioLoader");

    if (!loaded) {
      setShowLoader(true);
    }
  }, []);

  useEffect(() => {
    if (!showLoader) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [showLoader]);

  const handleComplete = () => {
    sessionStorage.setItem("portfolioLoader", "true");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader ? (
        <LoaderAnimation onComplete={handleComplete} />
      ) : (
        children
      )}
    </>
  )
}