export default function HomePage() {
  return (
    <section className="relative bg-background flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center md:flex-row sm:mb-0">
        <div className="flex-shrink-0 my-6 md:my-0">
          <div className="card-container">
            <img src="images/home.png" alt="profile" className="rounded-full" />
          </div>
        </div>
        <div className="text-center mt-6 md:mt-0 md:ml-10 lg:ml-20 md:text-left">
          <p className="mb-2 text-sm font-indie font-semibold tracking-widest sm:text-base md:text-lg">
            Hi! My name is
          </p>
          <h1 className="text-4xl font-extrabold font-sans sm:text-5xl md:text-6xl">
            Hendrik Tarigan
          </h1>
          <p className="mt-4 text-sm font-indie font-semibold tracking-widest sm:text-base md:text-lg">
            Fullstack Web Developer
          </p>
        </div>
      </div>
    </section>
  );
}
