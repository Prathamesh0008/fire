'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-slate-300 mb-4">{product.description}</p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center text-primary font-semibold hover:text-red-700 transition"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
