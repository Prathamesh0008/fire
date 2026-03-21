'use client'

import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of fire safety equipment and systems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}