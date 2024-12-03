"use client";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-center">
      <footer className="fixed bottom-5 rounded-2xl w-11/12 z-50 bg-navbar text-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm font-indie tracking-wider font-medium">
              Thanks for reading !
            </p>
            <p className="text-xs text-gray-400 font-sans">
              © 2024 Hendrik. All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-sans">
              <p>Made with ❤️ using</p>
              <a
                href="https://nextjs.org/"
                target="_blank"
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
