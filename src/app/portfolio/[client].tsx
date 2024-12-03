"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Projects } from "@/data/Projects";

export default function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault();
        // Scale the scroll speed
        scrollContainer.scrollLeft += event.deltaY * 3;
      }
    };

    // Add event listener
    scrollContainer?.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    // Cleanup when component unmounts
    return () => {
      scrollContainer?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section
      ref={scrollContainerRef}
      className="relative h-screen w-full flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap"
      style={{
        scrollBehavior: "auto",
      }}
    >
      {/* Scroll Icon */}
      <div className="flex items-center mr-20">
        <div className="scroll-icon">
          <span>Scroll</span>
          <div className="mouse-icon">
            <div className="mouse-icon_wheel"></div>
          </div>
        </div>
      </div>
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
          <div className="py-2 text-lg font-bold tracking-wide font-indie text-wrap text-center">
            {project.name}
          </div>
          <div className="pt-0 pb-4 text-md font-light">{project.status}</div>
          <div className="flex w-full justify-between px-3 pt-1 pb-4">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                  View Demo
                </span>
              </a>
            )}
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                See More
              </span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
