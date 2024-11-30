// Footer.js

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pb-6">
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          {/* Promotion Section */}
          <div className="bg-green-600 p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">
              Boost Your Business with Custom URLs!
            </h3>
            <p className="mt-2 text-sm">
              Shorten your links, track performance, and brand your URLs to make
              them more memorable.
            </p>
            <a
              href="/shorten"
              className="mt-4 inline-block text-white font-semibold bg-green-700 py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Get Started Now
            </a>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex justify-center space-x-8 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
            <Link
              href="https://developernuman.vercel.app/"
              className="hover:underline"
              target="_blank"
            >
              Portfolio
            </Link>
            <Link
              href="https://github.com/Numan-star"
              className="hover:underline"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-numan-618a24241/"
              className="hover:underline"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} URL Shortener. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
