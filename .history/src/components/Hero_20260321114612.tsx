'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091870622-2c6a2d50b1b4)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative container-custom text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protecting Lives with{' '}
            <span className="text-primary fire-glow">Advanced Fire Safety</span>{' '}
            Solutions
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-200 mb-8"
          >
            Hydrant | Sprinkler | Fire Equipment | Detection Systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/contact" className="btn-primary text-center">
              Get Quote
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero