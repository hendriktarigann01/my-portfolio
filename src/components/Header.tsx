"use client"; // Client Component
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold"></span>
            </div> */}
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-900/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
