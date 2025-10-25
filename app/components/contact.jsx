"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message successfully sent!");
  };

  return (
    <section className="relative bg-gradient-to-b from-pink-50 via-white to-pink-100 min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-16 left-0 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Get In <span className="text-pink-600">Touch</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            We’d love to hear from you! Whether you’re curious about a product,
            have questions, or want to partner — reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium text-sm">Full Name</label>
              <input
                type="text"
                required
                className="w-full mt-1 px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-none text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-none text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Subject</label>
              <input
                type="text"
                required
                className="w-full mt-1 px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-none text-sm"
                placeholder="What’s this about?"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-sm">Message</label>
              <textarea
                required
                rows={5}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:outline-none text-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white py-3 w-full rounded-xl hover:bg-pink-700 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
            >
              Send Message
            </button>

            {status && (
              <p className="text-pink-600 text-sm mt-2">{status}</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-800">Our Contact</h2>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <span className="font-semibold">Email:</span> contact@essence.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +234 800 000 0000
              </p>
              <p>
                <span className="font-semibold">Location:</span> Lagos, Nigeria
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-800 pt-4">Business Hours</h2>
            <p className="text-gray-700 text-sm">
              Mon – Sat: 9am — 6pm <br />
              Sun: Closed
            </p>

            <h2 className="text-xl font-bold text-gray-800 pt-4">Follow Us</h2>
            <div className="flex gap-4 text-pink-600 text-2xl">
              <a href="#" className="hover:text-pink-800 transition">📸</a>
              <a href="#" className="hover:text-pink-800 transition">🎬</a>
              <a href="#" className="hover:text-pink-800 transition">📌</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
