// about.js

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to the URL Shortener! We make it easy to shorten, manage, and
          track your long URLs. Whether you&apos;re looking to share links on
          social media or just clean up a messy URL, we&apos;ve got you covered.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 md:w-96">
            <h2 className="text-2xl font-semibold text-green-500">
              Simple & Fast
            </h2>
            <p className="mt-4 text-gray-600">
              Shorten your long URLs in a flash with our simple tool. No hassle,
              no fuss.
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 md:w-96">
            <h2 className="text-2xl font-semibold text-green-500">
              Trackable Links
            </h2>
            <p className="mt-4 text-gray-600">
              Monitor the clicks and interactions on your links for better
              insights and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
