"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link"; 
import { Projects } from "@/data/Projects";

export default function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY * 3;
      }
    };

    scrollContainer?.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      scrollContainer?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section
      ref={scrollContainerRef}
      className="relative h-screen w-full flex items-center whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-none"
      style={{
        scrollBehavior: "auto",
      }}
    >
      {Projects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 mx-8 w-72 flex flex-col items-center justify-center rounded-md border-4 border-gray-600 p-2"
        >
          <a
            className="relative h-45 w-full items-center overflow-hidden rounded-md bg-primary-dark"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="relative transition-transform duration-500 hover:scale-120"
              src={project.img}
              alt={project.name}
              width={300}
              height={300}
            />
          </a>
          <div className="py-2 h-20 text-lg font-bold tracking-wider font-indie text-wrap text-center">
            {project.name}
          </div>
          <div className="w-full px-3 py-2 max-w-[120px] [background:linear-gradient(45deg,#303030,#303030)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
            <Link href={`/portfolio/${project.id}`}>
              <span className="flex items-center justify-center font-semibold text-center w-full h-full">
                See Detail
              </span>
            </Link>
          </div>
          <div className="py-2 text-md font-light">{project.status}</div>
        </div>
      ))}
    </section>
  );
}
