import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        navColor
          ? "backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`flex-1 justify-center items-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
            id="mobile-menu"
          >
            <div className="flex flex-col md:flex-row md:ml-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="mt-2 md:mt-0 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-blue-300 flex items-center"
              >
                <AiOutlineHome className="mr-2 text-xl" /> Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="mt-2 md:mt-0 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-blue-300 flex items-center"
              >
                <AiOutlineUser className="mr-2 text-xl" /> About
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="mt-2 md:mt-0 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-blue-300 flex items-center"
              >
                <AiOutlineFundProjectionScreen className="mr-2 text-xl" /> Projects
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="mt-2 md:mt-0 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-blue-300 flex items-center"
              >
                <CgFileDocument className="mr-2 text-xl" /> Skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
