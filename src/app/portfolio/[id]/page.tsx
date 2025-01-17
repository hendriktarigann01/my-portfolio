import Image from "next/image";
import Swal from "sweetalert2";
import { Projects } from "@/data/Projects";
import Link from "next/link";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; // `params` sudah diresolve secara otomatis pada fungsi async
  const project = Projects.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-bold">Project Not Found</h1>
      </div>
    );
  }

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
    <section className="relative bg-background flex w-full items-center justify-evenly py-20 md:h-screen md:flex-row">
      <div className="relative flex w-9/12 flex-col items-center max-h-[80vh] overflow-y-auto hide-scrollbar px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4">{project.status}</p>
        <div className="relative flex items-center justify-center w-full h-64">
          <Image
            className="transition-transform duration-500 hover:scale-120"
            src={project.img}
            alt={project.name}
            width={200} //300
            height={200}
          />
        </div>
        <div className="flex justify-center w-full my-6 pt-1 pb-4">
          <div className="flex space-x-4">
            <Link href={project.demo} target="_blank" rel="noreferrer">
              <span className="rounded-md border-2 border-gray-600 px-4 py-2 font-semibold transition-all duration-500 w-36 h-10 flex items-center justify-center">
                View Demo
              </span>
            </Link>
            <Link href={project.sourceCode} target="_blank" rel="noreferrer">
              <span className="rounded-md border-2 border-gray-600 px-4 py-2 font-semibold transition-all duration-500 w-36 h-10 flex items-center justify-center">
                Source Code
              </span>
            </Link>
          </div>
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
        <Link
          href="/portfolio"
          className="rounded-md border-2 border-gray-600 px-4 py-2 font-semibold transition-all duration-500 h-10 flex items-center justify-center"
        >
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
