'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85vw] h-[85vw] bg-pink-400/20 blur-[150px] rounded-full z-0 animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl sm:text-6xl font-bold text-pink-600 mb-10"
        >
          ABOUT ME
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-14"
        >
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
            Hello! I'm <span className="text-pink-500 font-semibold">Akshat Chaudhary</span>, a passionate web developer and creative thinker. I believe in building clean, responsive, and user-friendly web experiences that delight users and empower brands. With a deep love for code and design, I continuously strive to learn new technologies and deliver meaningful solutions.
            <br /><br />
            When I’m not coding, you’ll find me exploring new ideas, engaging with inspiring creators on social media, or simply enjoying quiet moments of reflection and reading.
            <br /><br />
            Feel free to reach out to collaborate, chat, or share a story — I’m always open to great conversations.
          </p>

          {/* Social Links */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center gap-6">
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-lg text-pink-500 font-semibold hover:underline"
            >
              Follow me on Instagram
            </motion.a>

            <motion.a
              href="mailto:chaudharyakshat239@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="text-lg text-gray-700 font-medium hover:text-pink-600 transition-all"
            >
              chaudharyakshat239@gmail.com
            </motion.a>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-xl shadow hover:shadow-lg transition-all"
              >
                Back to Contact
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
