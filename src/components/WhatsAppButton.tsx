'use client'

import { FiMessageCircle as MessageCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = '919876543210'
  const message = 'Hello, I need more information about fire safety products.'

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 2 }
      }}
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}

export default WhatsAppButton
