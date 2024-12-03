import { Skills } from "@/data/Skills";

export default function AboutPage() {
  return (
    <section className="relative bg-background flex w-full flex-col items-center justify-evenly py-10 md:h-screen md:flex-row md:overflow-hidden">
      {/* Skill Icons Section */}
      <div className="relative order-2 mb-24 flex w-3/4 flex-col items-center justify-end md:mb-0 md:order-1 md:w-1/3">
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:w-4/5 md:grid-cols-4">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="skills-icon flex flex-col items-center justify-start group gap-2 h-auto mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 sm:h-10 sm:w-10 font-indie tracking-wider font-semibold group-hover:text-primary-dark transition-all duration-700 ease-in-out"
              >
                <path d={skill.svg} />
              </svg>
              <span className="text-xs sm:text-sm font-indie tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:translate-y-2 w-full text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Text Section */}
      <div className="relative order-1 my-10 w-11/12 text-justify sm:w-4/5 md:order-2 md:my-0 md:w-1/4">
        <p className="text-sm sm:text-md font-bold font-indie tracking-widest leading-custom">
          "Hello! My name is Muhamad Hendrik Tarigan, you can call me Hendrik,
          Tarigan or whatever you want. I&apos;m a Front-end Developer located
          in West Java, Indonesia. As a Front-end Developer I used to code
          websites from scratch. I love to create simple yet beautiful websites
          with great user experience."
        </p>
      </div>
    </section>
  );
}