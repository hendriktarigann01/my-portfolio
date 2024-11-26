export default function HomePage() {
  return (
    <section className="relative bg-background flex flex-col items-center justify-evenly md:h-screen md:flex-row md:overflow-hidden">
      <div className="mt-10 mx-auto flex flex-col items-center">
        <div className="flex justify-between">
          <div className="mx-20">
            <img
              src="images/home.png"
              alt="profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <span className="mx-20 align-middle my-auto">
            <p className="mb-2 text-xl font-indie font-semibold tracking-widest">Hi! My name is</p>
            <h1 className="text-6xl font-extrabold font-sans">
              Hendrik Tarigan
            </h1>
            <p className="mt-4 text-xl font-indie font-semibold tracking-widest">Fullstack Web Developer</p>
          </span>
        </div>
      </div>
    </section>
  );
}
