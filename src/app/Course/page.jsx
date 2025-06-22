"use client";

import React from "react";
import Cards from "../../components/Cards";
import Book from "../../../public/Book.json";
import Link from "next/link";
import { motion } from "framer-motion";

function Course() {
  return (
    <section className="relative bg-gradient-to-br from-white via-pink-50 to-white py-20 min-h-screen overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-pink-400/10 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-500 mb-4">
            Welcome to our Subscription Section
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of handpicked digital books. Dive into a world of learning and imagination with beautifully curated content for every reader.
          </p>

          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Back
            </motion.button>
          </Link>
        </motion.div>

        {/* Book Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Book.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Cards item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Course;
