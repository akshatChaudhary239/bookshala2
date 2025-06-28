"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUserEdit,
  FaSmile,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowDown,
  FaStar,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaClock
} from "react-icons/fa";

const genres = [
  "Fiction",
  "Non-fiction",
  "Self Help",
  "Mystery",
  "Romance",
  "Fantasy",
  "Comics",
  "Biographies"
];

const features = [
  { icon: <FaRocket />, title: "Seamless Discovery", desc: "Curated recommendations based on your taste." },
  { icon: <FaUsers />, title: "Vibrant Community", desc: "Connect with fellow book lovers." },
  { icon: <FaStar />, title: "Personalized Experience", desc: "Track your reads and build your dream library." },
  { icon: <FaGlobe />, title: "Global Access", desc: "Books from around the world, at your fingertips." },
  { icon: <FaClock />, title: "Anytime Access", desc: "Your library, available 24/7 on all devices." },
  { icon: <FaClock />, title: "Anytime Access", desc: "Your library, available 24/7 on all devices." }
];

const Banner = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[80vw] h-[80vw] bg-pink-400/10 rounded-full blur-[180px] top-[-20%] left-[10%] animate-pulse" />
        <div className="absolute w-[70vw] h-[70vw] bg-fuchsia-500/10 rounded-full blur-[150px] bottom-[-10%] right-[5%] animate-pulse" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center relative z-10 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Next Great Read Starts at
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent animate-pulse"> Bookshala</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Join a community of passionate readers. Discover, read, and share stories that spark imagination.
          </p>

          {/* Email Signup */}
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 pr-32 rounded-xl text-white bg-white/10 backdrop-blur-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg transition-all shadow-md">
              Notify Me
            </button>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold px-6 py-3 rounded-xl shadow-xl mt-4 hover:opacity-90 transition"
            >
              Start Exploring
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="border border-pink-400 text-white font-semibold px-6 py-3 rounded-xl mt-4 hover:bg-pink-500/20 transition"
            >
              Learn More
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 text-center">
            {[
              { icon: <FaBookOpen />, label: "10K+", desc: "Books", color: "text-pink-400" },
              { icon: <FaUserEdit />, label: "500+", desc: "Authors", color: "text-fuchsia-400" },
              { icon: <FaSmile />, label: "99%", desc: "Happy Readers", color: "text-pink-300" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center space-y-1"
              >
                <div className={`text-3xl ${item.color}`}>{item.icon}</div>
                <h4 className="text-lg font-bold">{item.label}</h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-green-400 text-sm mt-6">
            <FaCheckCircle />
            Trusted by 20,000+ readers worldwide
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5 }}
            src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png"
            alt="Book Illustration"
            className="w-[300px] md:w-[420px] rounded-xl drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-6 md:px-20 mt-20 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why Bookshala?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur p-6 rounded-xl shadow-lg text-left"
            >
              <div className="text-xl text-pink-400 mb-2">{f.icon}</div>
              <h4 className="font-bold text-lg mb-1">{f.title}</h4>
              <p className="text-sm text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Genre Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-6 md:px-20 mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Explore by Genre</h3>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {genres.map((genre, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-sm rounded-full border border-white/20 hover:bg-pink-500/20 transition-all"
            >
              {genre}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 max-w-2xl mx-auto text-center text-gray-300 italic px-6"
      >
        <div className="text-pink-400 mb-2">
          <FaQuoteLeft className="inline mr-2" />
          "Bookshala reignited my love for reading. A masterpiece in digital literature experience."
        </div>
        <p className="font-medium text-sm mt-2">— Akku Chaudhary</p>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16 flex justify-center"
      >
        <FaArrowDown className="text-white text-xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Banner;
