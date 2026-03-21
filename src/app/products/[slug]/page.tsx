'use client'

import { useParams } from 'next/navigation'
import { products } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPhone as Phone, FiMessageCircle as MessageCircle, FiMail as Mail, FiCheckCircle as CheckCircle } from 'react-icons/fi'
import { notFound } from 'next/navigation'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-24 pb-20 bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Info */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-slate-300 text-lg mb-6">{product.longDescription}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  <Mail size={18} /> Request Quote
                </Link>
                <a href="tel:+919876543210" className="btn-secondary flex items-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
                <a
                  href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`}
                  target="_blank"
                  className="bg-green-500 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 mb-8 shadow-md">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 mb-8 shadow-md">
            <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-slate-700 last:border-0">
                      <td className="py-3 font-semibold text-slate-100 w-1/3">{spec.label}</td>
                      <td className="py-3 text-slate-300">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-white mb-6">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((app, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-slate-200">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
