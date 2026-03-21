'use client'

import Hero from '@/components/Hero'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, Award, Users, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  { icon: Shield, title: 'Fire Hydrant Systems', desc: 'Reliable water supply for firefighting' },
  { icon: Zap, title: 'Sprinkler Systems', desc: 'Automatic fire suppression' },
  { icon: Shield, title: 'Fire Extinguishers', desc: 'Portable fire fighting equipment' },
  { icon: Shield, title: 'Fire Doors', desc: 'Fire-rated compartmentalization' },
  { icon: Clock, title: 'Hose Reels', desc: 'Manual fire fighting stations' },
  { icon: Award, title: 'Alarm Systems', desc: 'Early warning detection' },
]

const stats = [
  { value: 500, label: 'Projects Completed', suffix: '+' },
  { value: 1000, label: 'Clients Served', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 24, label: 'Emergency Support', suffix: '/7' },
]

export default function Home() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive fire safety solutions tailored to your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
              <p className="text-gray-600 mb-6">We combine expertise, quality products, and dedicated service to ensure your complete safety.</p>
              <ul className="space-y-3">
                {[
                  'ISO 9001:2015 Certified',
                  '10+ Years of Experience',
                  '24/7 Emergency Support',
                  'Latest Fire Safety Technology',
                  'Trained & Certified Professionals',
                  'Competitive Pricing'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581091870622-2c6a2d50b1b4"
                alt="Fire Safety"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {statsInView && (
                    <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Property?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get a free consultation and quote from our fire safety experts today.</p>
            <Link href="/contact" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}