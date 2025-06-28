"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-20 py-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Bookshala
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Dive into a world of books. Discover, explore, and fall in love with reading all over again.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-pink-500 transition">About Us</Link>
            </li>
            <li>
              <Link href="/Course" className="hover:text-pink-500 transition">Courses</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-pink-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Connect with Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-pink-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-500 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bookshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
