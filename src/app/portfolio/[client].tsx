"use client";

import { useEffect, useRef } from "react";
import { Projects } from "@/data/Projects";

export default function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault();
        // Perbesar nilai scroll dengan faktor pengali
        scrollContainer.scrollLeft += event.deltaY * 3;
      }
    };

    // Tambahkan event listener
    scrollContainer?.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    // Cleanup saat komponen di-unmount
    return () => {
      scrollContainer?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full">
      <div
        ref={scrollContainerRef}
        className="flex h-[100vh] w-[100vw] overflow-x-auto overflow-y-hidden whitespace-nowrap"
        style={{
          scrollBehavior: "auto",
        }}
      >
        {Projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 mx-4 w-72 flex flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light p-2"
          >
            <a
              className="relative h-44 w-full overflow-hidden rounded-md bg-primary-dark"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="relative transition-transform duration-500 hover:scale-125"
                src={project.img}
                alt={project.name}
              />
            </a>
            <div className="py-2 text-xl font-medium text-primary-dark">
              {project.name}
            </div>
            <div className="py-2 text-lg font-light text-primary-dark">
              {project.status}
            </div>
            <div className="flex w-full justify-between px-3 pt-1 pb-4">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <span className="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                    View Demo
                  </span>
                </a>
              )}
              <a href={project.sourceCode} target="_blank" rel="noreferrer">
                <span className="rounded-md border-2 border-primary-dark px-1 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                  Source Code
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
