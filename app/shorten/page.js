"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [longUrl, setLongUrl] = useState("");
  const [customShortUrl, setCustomShortUrl] = useState("");
  const [generatedShortUrl, setGeneratedShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!longUrl || !customShortUrl) {
      setError("Both fields are required.");
      return;
    }

    setError("");
    setLoading(true);

    fetch("/api/shorten-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longUrl, customShortUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shortUrl) {
          setGeneratedShortUrl(data.shortUrl);
          setLongUrl("");
          setCustomShortUrl("");
        } else {
          setError(data.message || "An error occurred.");
        }
      })
      .catch(() => {
        setError("Failed to shorten the URL. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center bg-white px-4 items-center my-20">
      <div className="max-w-lg w-full bg-green-200 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          URL Shortener
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="longUrl"
              className="block text-gray-700 font-medium"
            >
              Enter Long URL:
            </label>
            <input
              type="url"
              id="longUrl"
              placeholder="https://example.com/long-url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="customShortUrl"
              className="block text-gray-700 font-medium"
            >
              Enter Preferred Short URL:
            </label>
            <input
              type="text"
              id="customShortUrl"
              placeholder="Enter your custom short URL (e.g., my-custom-url)"
              value={customShortUrl}
              onChange={(e) => setCustomShortUrl(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </div>
        </form>

        {generatedShortUrl && (
          <div className="mt-4">
            <h2 className="text-gray-700 font-medium">Shortened URL:</h2>
            <Link
              href={generatedShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline break-all"
            >
              {generatedShortUrl}
            </Link>
          </div>
        )}

        {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
      </div>
    </div>
  );
}
