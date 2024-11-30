// contact.js
"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-600">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or feedback? We&apos;re here to help. Reach out to us
          below!
        </p>
        <div className="text-start">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  placeholder="Enter your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="4"
                />
              </div>

              {error && <p className="text-red-600">{error}</p>}
              {success && (
                <p className="text-green-600">Message sent successfully!</p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
