import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-neutral-500 bg-black/20 backdrop-blur-md max-w-5xl
    mx-auto px-4 py-3 flex justify-between items-center rounded-3xl border border-neutral-800"
      >
        <a href="#home" className="transition">
          <img src={logo} alt="logo" width={42} height={24} />
        </a>

        <div className="hidden xl:ml-32 md:flex justify-center space-x-8">
          <a href="#about" className="hover:text-neutral-200 transition">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200 transition">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200 transition">
            Testimonials
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#"
            className="border border-neutral-700 text-white
        py-2 px-4 rounded-3xl hover:bg-neutral-700 transition"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-indigo-600 text-white
        py-2 px-4 rounded-3xl hover:bg-indigo-500 transition"
          >
            Get Started
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="hover:text-neutral-200">
              How it works
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-neutral-200">
              Testimonials
            </a>

            <a
              href="#"
              className="border border-neutral-700 text-white
        py-2 px-4 rounded-3xl hover:bg-neutral-700 transition"
            >
              Get a Demo
            </a>
            <a
              href="#"
              className="bg-indigo-600 text-white
        py-2 px-4 rounded-3xl hover:bg-indigo-500 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
