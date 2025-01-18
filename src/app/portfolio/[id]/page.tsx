import Image from "next/image";
import Swal from "sweetalert2";
import { Projects } from "@/data/Projects";
import Link from "next/link";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
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
            <div className=" w-36 h-10 cursor-pointer px-2 py-2 max-w-[120px] [background:linear-gradient(45deg,#303030,#303030)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
              <Link href={project.demo} target="_blank" rel="noreferrer">
                <span className="flex items-center justify-center font-semibold text-center">
                  View Demo
                </span>
              </Link>
            </div>
            <div className=" w-36 h-10 cursor-pointer px-2 py-2 max-w-[120px] [background:linear-gradient(45deg,#303030,#303030)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
              <Link href={project.sourceCode} target="_blank" rel="noreferrer">
                <span className="flex items-center justify-center font-semibold text-center">
                  Source Code
                </span>
              </Link>
            </div>
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
