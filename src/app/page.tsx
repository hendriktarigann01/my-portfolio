export default function HomePage() {
  return (
    <section>
      <div className="mt-10 mx-auto flex flex-col items-center">
        <div className="flex justify-between">
          <div>
            <img
              src="images/home.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full shadow-around"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">
              Hi! I’m Hendrik, a passionate developer. Explore my projects,
              learn more about me, and feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
