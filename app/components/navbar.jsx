"use client"


import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-serif tracking-wide text-gray-800">
            Essence
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-pink-600 transition">Home</Link>
            <Link href="ui/products" className="hover:text-pink-600 transition">Product</Link>
            <Link href="#about-us"  className="hover:text-pink-600 transition">About</Link>
            <Link href="#" className="hover:text-pink-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-pink-600 transition">Home</a>
            <a href="#" className="hover:text-pink-600 transition">Collections</a>
            <a href="#" className="hover:text-pink-600 transition">About</a>
            <a href="#" className="hover:text-pink-600 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
