"use client";
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left space-y-2">
          <a
            href="https://notokrs.github.io"
            className="text-lg font-bold hover:text-blue-500 transition"
          >
            hendrik.<span className="text-blue-500">.</span>
          </a>
          <p className="text-sm">Thanks for reading!</p>
          <p className="text-xs text-gray-400">
            © 2023–present Rusnoto. All Rights Reserved
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end space-y-2">
          <button
            title="Back to top"
            className="mb-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-md transition transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              className="h-6 w-6"
            />
          </button>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <p>Made with ❤️ using</p>
            <a href="https://nextjs.org/" target="_blank">
              <img
                src="/images/nextjs.png"
                alt="jekyll logo"
                className="w-6 h-6 p-1 bg-slate-200 border rounded-full hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
