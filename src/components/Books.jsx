'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Book from '../../public/Book.json'
import Cards from './Cards'
import { FaBook, FaRocket, FaBookmark, FaQuoteLeft } from 'react-icons/fa'

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
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[100vw] h-[100vw] bg-pink-500/10 blur-[160px] top-[-30%] left-1/2 -translate-x-1/2 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-screen-2xl container mx-auto px-6 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4">
            Curated Free Reads for Everyone
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our team handpicks a growing collection of free books so you can dive into new adventures without limits.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: <FaRocket />, title: 'Zero Cost, Full Value', desc: 'Read premium titles for absolutely free.' },
            { icon: <FaBook />, title: 'New Titles Weekly', desc: 'Fresh additions curated every week just for you.' },
            { icon: <FaBookmark />, title: 'Read Anytime, Anywhere', desc: 'Mobile optimized reading experience on all devices.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="text-pink-500 text-2xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </div>
          ))}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Want More?</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Join our newsletter to get notified when new free books drop every week.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-l-lg bg-white/10 text-white backdrop-blur focus:outline-none"
            />
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <div className="text-pink-400 mb-2">
            <FaQuoteLeft className="inline mr-2" />
            "Bookshala’s free section helped me rediscover my love for reading — totally worth it."
          </div>
          <p className="text-sm text-gray-400">— Akku Chaudhary, Avid Reader</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Books