"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Course", href: "/Course" },
  { name: "Contact Us", href: "/Contact" },
  { name: "About Us", href: "/About" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 ${
        isScrolled ? "backdrop-blur-md bg-white/60 shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          BookShala
        </Link>

        {/* Desktop Nav Items */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex space-x-8 font-medium text-gray-800"
        >
          {navItems.map((item, i) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="hover:text-pink-600 transition-colors duration-200"
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Section */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Desktop Search */}
          <div className="hidden md:flex items-center border rounded-full px-4 py-2 bg-white/90 shadow-md hover:shadow-lg transition-all">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-gray-700 w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Login Button */}
          <Link
            href="/Login"
            className="hidden md:inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-pink-500 focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white/90 backdrop-blur-md px-6 pt-4 pb-6 shadow-md"
          >
            <ul className="flex flex-col space-y-4 font-medium text-gray-800">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-pink-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/Login"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium text-center transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
