// Footer.js

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white pb-6">
      <div className="container mx-auto">
        <div className="space-y-4">
          {/* Promotion Section */}
          <div className="bg-green-500 p-4 shadow-lg rounded-b">
            <h3 className="text-2xl font-semibold text-center">
              Boost Your Business with Custom URLs!
            </h3>
            <p className="mt-2 text-sm text-center">
              Shorten your links, track performance, and brand your URLs to make
              them more memorable.
            </p>
            <div className="flex justify-center">
              <Link
                href="/shorten"
                className="mt-4 text-center inline-block text-white font-semibold bg-green-700 py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
              >
                Get Started Now
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-wrap justify-center space-x-8 text-sm">
            <Link
              href="/"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
            >
              Contact Us
            </Link>
            <Link
              href="https://developernuman.vercel.app/"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
              target="_blank"
            >
              Portfolio
            </Link>
            <Link
              href="https://github.com/Numan-star"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-numan-618a24241/"
              className="text-gray-800 hover:underline mb-2 sm:mb-0"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-xs text-gray-600 text-center">
            &copy; {new Date().getFullYear()} URL Shortener. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
