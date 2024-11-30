"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

import Image from "next/image";

import logo from "../public/logo.jpeg";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${poppins.className} bg-green-700 py-2 px-1 shadow-lg`}>
      <div className="px-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition duration-200 px-4 py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-200 transition duration-200 px-4 py-1"
          >
            About Us
          </Link>
          <Link
            href="/shorten"
            className="text-white hover:text-gray-200 transition duration-200 px-4 py-1"
          >
            Shorten
          </Link>
          <Link
            href="/contact-us"
            className="text-white hover:text-gray-200 transition duration-200 px-4 py-1"
          >
            Contact Us
          </Link>

          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-green-600 rounded-lg py-1 px-2 shadow-lg text-white font-semibold text-base transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Numan-star">
              <button className="bg-green-600 rounded-lg py-1 px-2 shadow-lg text-white font-semibold text-base transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-green-700`}
      >
        <div className="p-4 space-y-4">
          <Link
            href="/"
            className="block text-white py-2 text-lg hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white py-2 text-lg hover:text-gray-200"
          >
            About Us
          </Link>
          <Link
            href="/shorten"
            className="block text-white py-2 text-lg hover:text-gray-200"
          >
            Shorten
          </Link>
          <Link
            href="/contact-us"
            className="block text-white py-2 text-lg hover:text-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
