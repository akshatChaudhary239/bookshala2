'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Book from '../../public/Book.json'
import Cards from './Cards'

// Dynamically import Slider
const Slider = dynamic(() => import('react-slick'), { ssr: false })

const Books = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filterdata = Book.filter((data) => data.category === 'free')

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (!isMounted) return null

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Glow Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[90vw] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />

      <div className="relative z-10 max-w-screen-2xl container mx-auto md:px-20 px-6 backdrop-blur-lg bg-white/10 rounded-3xl shadow-lg p-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-2">Books You Can Read</h2>
          <p className="text-lg text-gray-300">
            Handpicked free books available for your reading pleasure.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings}>
            {filterdata.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="px-3"
              >
                <Cards item={item} />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}

export default Books
