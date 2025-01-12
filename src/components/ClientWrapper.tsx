"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Animation from "@/components/Animation";
import "../styles/splashScreen.css";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showAnimation, setShowAnimation] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Always call useEffect
  useEffect(() => {
    if (pathname?.startsWith("/detail/")) {
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowAnimation(false);
        setFadeIn(true);
      }, 500);
    }, 7500);

    return () => clearTimeout(timer);
  }, [pathname]); // Ensure pathname is included as a dependency

  // Conditional rendering
  if (pathname?.startsWith("/detail/")) {
    return <>{children}</>;
  }

  if (showAnimation) {
    return <Animation onFinish={() => setShowAnimation(false)} />;
  }

  return (
    <div
      className={`fade-in ${fadeIn ? "fade-in-active" : ""} ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      {children}
    </div>
  );
}
