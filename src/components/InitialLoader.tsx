'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiDroplet, FiActivity } from 'react-icons/fi'

const MIN_LOADER_TIME = 1900

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const start = Date.now()

    const stopLoader = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed)
      window.setTimeout(() => setIsLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      stopLoader()
    } else {
      window.addEventListener('load', stopLoader, { once: true })
    }

    const fallback = window.setTimeout(() => setIsLoading(false), 3200)

    return () => {
      window.removeEventListener('load', stopLoader)
      window.clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(239,68,68,0.2),transparent_35%),linear-gradient(135deg,#090f1f,#111a31_55%,#2a121d)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-[90%] max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-lg"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <motion.div
                animate={{ rotate: [0, 14, 0, -14, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-full border border-red-300/50 bg-red-500/20 p-2"
              >
                <FiActivity className="h-5 w-5 text-red-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-full border border-sky-300/50 bg-sky-500/20 p-2"
              >
                <FiDroplet className="h-5 w-5 text-sky-200" />
              </motion.div>
            </div>

            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-red-300">Shreejee Technology</p>
            <h2 className="mt-2 text-center text-base font-bold text-white">Initializing Hydrant & Sprinkler Network</h2>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-300 to-red-500"
                animate={{ x: ['-100%', '120%'] }}
                transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
