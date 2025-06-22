"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUserEdit, FaSmile } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-28">

      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[80vw] h-[80vw] bg-pink-400/10 rounded-full blur-[150px] top-[-20%] left-[10%] animate-pulse" />
        <div className="absolute w-[70vw] h-[70vw] bg-fuchsia-500/10 rounded-full blur-[150px] bottom-[-10%] right-[5%] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Left Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 mt-12 md:mt-0 space-y-6"
        >
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
              Bookshala
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Dive into a curated universe of books. From timeless classics to the
            latest releases—Bookshala is where every reader belongs.
          </p>

          {/* Email Input */}
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 pr-32 rounded-xl text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg transition-all shadow-md">
              Notify Me
            </button>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold px-6 py-3 rounded-xl shadow-xl mt-4 hover:opacity-90 transition"
          >
            Start Exploring
          </motion.button>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-1"
            >
              <FaBookOpen className="text-3xl text-pink-400" />
              <h4 className="text-lg font-bold">10K+</h4>
              <p className="text-xs text-gray-400">Books</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-1"
            >
              <FaUserEdit className="text-3xl text-fuchsia-400" />
              <h4 className="text-lg font-bold">500+</h4>
              <p className="text-xs text-gray-400">Authors</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-1"
            >
              <FaSmile className="text-3xl text-pink-300" />
              <h4 className="text-lg font-bold">99%</h4>
              <p className="text-xs text-gray-400">Happy Readers</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5 }}
            src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png"
            alt="Book Illustration"
            className="w-[300px] md:w-[400px] rounded-xl drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
