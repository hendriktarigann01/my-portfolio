import { Projects } from "@/data/Projects";

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

  return (
     <section className="relative flex w-full flex-col items-center justify-evenly py-20 md:py-40 md:h-screen md:flex-row md:overflow-hidden">
      <div className="relative my-5 pt-10 w-9/12 text-right md:pt-0 md:my-0 md:w-2/5">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.status}</p>
      <div className="relative w-full h-64 mb-4">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            View Demo
          </a>
        )}
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Source Code
          </a>
        )}
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

