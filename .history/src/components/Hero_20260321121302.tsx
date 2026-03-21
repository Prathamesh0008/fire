'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex  justify-center overflow-hidden bg-[#0b1220]">
      {/* Layered atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.25),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(244,63,94,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/95 via-[#0f172a]/85 to-[#111827]/80" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      
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
