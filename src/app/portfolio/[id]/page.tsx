import Image from "next/image";
import Swal from "sweetalert2";
import { Projects } from "@/data/Projects";
import Link from "next/link";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = params;
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
    <section className="relative flex w-full items-center py-20 md:py-40 md:h-screen md:flex-row md:overflow-hidden">
      <div className="justify-center my-5 pt-10 w-full text-center md:pt-0 md:my-0">
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
        <div className="flex justify-center w-full pt-1 pb-4">
          <div className="flex space-x-4">
            <Link href={project.demo} target="_blank" rel="noreferrer">
              <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                View Demo
              </span>
            </Link>
            <Link href={project.sourceCode} target="_blank" rel="noreferrer">
              <span className="rounded-md border-2 border-gray-600 px-3 py-2 font-semibold transition-all duration-500">
                Source Code
              </span>
            </Link>
          </div>
        </div>
        <a
          href="/portfolio"
          className="px-4 py-2 mt-4 inline-block bg-gray-500 text-white rounded-md"
        >
          Back to Portfolio
        </a>
      </div>
    </section>
  );
}
