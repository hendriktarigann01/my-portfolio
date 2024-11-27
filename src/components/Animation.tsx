// components/Animation.tsx
import { useEffect, useState } from "react";
import "../styles/splashScreen.css";

export default function Animation({ onFinish }: { onFinish: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1000);

    if (activeIndex >= 7) {
      clearInterval(interval);
      onFinish();
    }

    return () => clearInterval(interval);
  }, [activeIndex, onFinish]);

  return (
    <div className="h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
      <div className="word">
        {["H", "E", "N", "D", "R", "I", "K"].map((char, index) => (
          <span
            key={index}
            className={`inline-block text-[clamp(50px,12vw,120px)] ${
              index <= activeIndex ? "opacity-100 active" : "opacity-0"
            }`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
