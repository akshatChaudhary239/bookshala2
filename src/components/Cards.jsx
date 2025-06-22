'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

 const Cards = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-white/80 via-white/60 to-white/30 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-pink-300 transition-all"
    >
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Free
        </div>
      </div>

      <div className="p-6 space-y-4 text-gray-800">
        <h3 className="text-xl font-semibold uppercase tracking-wide">
          {item.name}
        </h3>
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <span className="text-base font-bold text-gray-700">$0</span>
          <Link href="#">
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300">
              Read Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Cards
