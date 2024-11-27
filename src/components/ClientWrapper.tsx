"use client";

import { useState, useEffect } from "react";
import Animation from "@/components/Animation";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 8000); // Durasi animasi
    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return <Animation onFinish={() => setShowAnimation(false)} />;
  }

  return <>{children}</>;
}
