"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Function to handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="flex justify-center">
      <header className="fixed top-0 left-0 right-0 mx-auto mt-5 rounded-2xl w-11/12 z-50 bg-navbar">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
              My Website
            </h1>
          </div>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex space-x-8 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 relative group ${
                  pathname === link.path ? "text-slate-500" : ""
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-navbar`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={handleLinkClick} // Close menu on link click
                className={`block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === link.path ? "text-slate-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
