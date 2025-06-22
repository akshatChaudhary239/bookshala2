'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-white min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85vw] h-[85vw] bg-pink-400/20 blur-[150px] rounded-full z-0 animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
            Meet Akshat
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm Akshat – a passionate learner, creative thinker, and someone who's always up for new challenges. Scroll down to learn more or reach out to connect with me!
          </p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center bg-white/90 border border-pink-200 backdrop-blur-lg rounded-3xl shadow-xl p-8 gap-10"
        >
          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg"
            alt="Akshat"
            className="w-60 h-60 rounded-full object-cover border-4 border-pink-300 shadow-md"
          />

          {/* Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              Hello, I'm <span className="text-pink-500">Akshat</span>
            </h3>
            <p className="text-gray-600 max-w-md">
              I love building digital experiences and helping others through technology and design. Whether it’s websites, projects, or collaborative ideas – I’m always excited to work with creative minds.
            </p>
            <p className="text-gray-600">
              Let’s connect and explore something awesome together!
            </p>

            <Link href="/About">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-xl shadow hover:shadow-lg transition-all"
              >
                Know More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-md text-gray-700">
            Want to start a project or chat? Let’s connect.
          </p>
          <Link href="/ContactForm">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
