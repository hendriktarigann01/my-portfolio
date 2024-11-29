"use client";

import { useState, useEffect } from "react";
import Animation from "@/components/Animation";
import "../styles/splashScreen.css";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowAnimation(false);
        setFadeIn(true);
      }, 500); // Match this duration with the fade-out duration
    }, 7500); // Duration before starting fade-out

    return () => clearTimeout(timer);
  }, []);

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
