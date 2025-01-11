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

  // pengecualian untuk halaman detail
  if (pathname?.startsWith("/detail/")) {
    return <>{children}</>;
  }

  // Efek ini akan selalu dipanggil tanpa bergantung pada pathname
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowAnimation(false);
        setFadeIn(true);
      }, 500);
    }, 7500);

    return () => clearTimeout(timer);
  }, []); // Array dependensi kosong memastikan efek ini hanya dipanggil sekali saat komponen pertama kali dimuat

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
