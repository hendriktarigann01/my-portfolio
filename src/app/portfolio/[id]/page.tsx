"use client";

import React from "react";
import Image from "next/image";
import { Projects } from "@/data/Projects";
import Link from "next/link";

export default function PortfolioClientDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const projectId = Number(id);
  const project = Projects.find((item) => item.id === projectId);

  // Checking Available Project
  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <section className="relative bg-background flex w-full items-center justify-evenly py-20 md:h-screen md:flex-row">
      <div className="relative flex w-9/12 flex-col items-center max-h-[80vh] overflow-y-auto hide-scrollbar px-4 py-10">
        <h1 className="text-2xl font-bold mt-2">{project.name}</h1>
        <p className="my-2">{project.status}</p>
        <div className="relative flex items-center justify-center w-full h-64 my-6">
          <Image
            className="transition-transform duration-500 hover:scale-120"
            src={project.img}
            alt={project.name}
            width={200}
            height={200}
          />
        </div>

        <div className="tes">
          <p>{project.description}</p>
          {Array.isArray(project.features) &&
            Array.isArray(project.detailFeatures) && (
              <div className="my-6">
                <h4 className="text-lg font-semibold mb-4">Features:</h4>
                <ul className="list-none">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="mb-4">
                      <p className="font-semibold">{feature}</p>
                      <p>{project.detailFeatures[index] || ""}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <div className="w-40 h-10 cursor-pointer mb-6 py-2 max-w-[120px] [background:linear-gradient(45deg,#303030,#303030)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
          <Link
            href="/portfolio"
            className="flex items-center justify-center font-semibold text-center"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}
