import { Contacts } from "@/data/Contacts";

export default function ContactPage() {
  return (
    <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      {/* Bagian Kontak */}
      <div className="relative my-10 w-9/12 text-right md:my-0 md:w-2/5">
        {Contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="my-4 flex justify-end fill-foreground transition-all duration-500 hover:fill-foregroundHover hover:text-foregroundHover"
          >
            <div className="mr-8">
              <h4 className="text-base">{contact.name}</h4>
              <h3 className="text-sm font-extralight">{contact.value}</h3>
            </div>
            <div className="h-12 w-12">
              <svg
                className="p-1"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={contact.svg} />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Bagian Formulir */}
      <div className="relative my-10 w-9/12 md:my-0 md:w-1/3">
        <div className="relative w-full md:w-4/5">
          <form name=" w-full rounded-md border border-foregroundHover bg-background px-4 py-1 transition duration-500 ease-in-out text-foregroundHover placeholder:text-foreground font-medium">
            <input
              type="text"
              name="name"
              id="name"
              className=" w-full rounded-md border border-foregroundHover bg-background px-4 py-1 transition duration-500 ease-in-out text-foregroundHover placeholder:text-foreground font-medium mb-3"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className=" w-full rounded-md border border-foregroundHover bg-background px-4 py-1 transition duration-500 ease-in-out text-foregroundHover placeholder:text-foreground font-medium mb-3"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              id="message"
              className=" w-full rounded-md border border-foregroundHover bg-background px-4 py-1 transition duration-500 ease-in-out text-foregroundHover placeholder:text-foreground font-medium mb-2 h-40"
              placeholder="Write your message..."
              required
            />
            <button
              type="submit"
              className=" w-full rounded-md border border-foregroundHover bg-background px-4 py-1 transition duration-500 ease-in-out placeholder-text-foregroundHover cursor-none font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
