"use client";

import Image from "next/image";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
import { Projects } from "@/data/Projects";

export default function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // desktop
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

  const handleClick = (data: string | null, type: string) => {
    if (!data) {
      Swal.fire({
        icon: "warning",
        title: `Mohon Maaf`,
        text: `${type} Tidak Tersedia`,
        iconColor: "#999999",
        customClass: {
          popup: "swal2-popup",
        },
      });
      return false;
    }
    return true;
  };

  return (
    <section
      ref={scrollContainerRef}
      className="relative h-screen w-full flex items-center whitespace-nowrap scrollbar-none"
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
          <div className="pt-0 pb-4 text-md font-light">{project.status}</div>
          <div className="flex w-full justify-between px-1 pt-1 pb-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!handleClick(project.demo, "Demo")) e.preventDefault();
              }}
            >
              <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                View Demo
              </span>
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!handleClick(project.sourceCode, "Source Code"))
                  e.preventDefault();
              }}
            >
              <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                Source Code
              </span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
