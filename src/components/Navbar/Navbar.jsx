import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Code Editor
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#exam"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Exam
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
