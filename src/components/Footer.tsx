"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <footer className="fixed bottom-5 rounded-2xl w-11/12 z-50 bg-navbar text-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4 md:gap-0">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm font-indie tracking-wider font-medium">
              Thanks for reading !
            </p>
            <p className="text-xs text-gray-400 font-sans">
              © 2026 Hendrik. All Rights Reserved
            </p>
          </div>

          <div className="flex gap-10 items-center md:items-end space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-sans">
              <p>Made with ❤️ using</p>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform transform hover:scale-105"
              >
                <Image
                  src="/images/nextjs.png"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  className="p-1 bg-slate-200 border rounded-full hover:opacity-80 transition"
                />
              </a>
            </div>

            <div className="flex items-end gap-2">
              <span
                className="text-gray-400/50"
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  fontStretch: "expanded",
                  transition: "color 0.3s",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(156, 163, 175, 0.5)",
                }}
              >
                v1
              </span>
              <a
                href="https://my-portfolio-v2-xi-bice.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400"
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  textDecoration: "none",
                  fontStretch: "expanded",
                }}
              >
                v2
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
