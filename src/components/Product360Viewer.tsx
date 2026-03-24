'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft as ChevronLeft, FiChevronRight as ChevronRight } from 'react-icons/fi'

interface Product360ViewerProps {
  productName: string
  frames: string[]
}

const dragStep = 30

export default function Product360Viewer({ productName, frames }: Product360ViewerProps) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragLastX, setDragLastX] = useState<number | null>(null)

  const totalFrames = frames.length

  const updateFrame = (direction: 'next' | 'prev') => {
    setCurrentFrame((prev) => {
      if (direction === 'next') {
        return (prev + 1) % totalFrames
      }
      return (prev - 1 + totalFrames) % totalFrames
    })
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragStartX(event.clientX)
    setDragLastX(event.clientX)
    ;(event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null || dragLastX === null) return
    const delta = event.clientX - dragLastX
    if (Math.abs(delta) < dragStep) return
    setDragLastX(event.clientX)
    if (delta > 0) {
      updateFrame('prev')
    } else {
      updateFrame('next')
    }
  }

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragStartX(null)
    setDragLastX(null)
    ;(event.currentTarget as HTMLDivElement).releasePointerCapture(event.pointerId)
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl">
      <div
        className="relative h-96 overflow-hidden rounded-lg border border-slate-700 bg-slate-950 touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${frames[currentFrame]}-${currentFrame}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0"
          >
            <Image
              src={frames[currentFrame]}
              alt={`${productName} view ${currentFrame + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => updateFrame('prev')}
          className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-100 transition hover:border-slate-500"
          aria-label="Previous view"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex flex-1 items-center justify-center gap-2">
          {frames.map((frame, index) => (
            <button
              key={`${frame}-${index}`}
              type="button"
              onClick={() => {
                setCurrentFrame(index)
              }}
              className={`h-2.5 w-8 rounded-full transition ${
                index === currentFrame ? 'bg-primary' : 'bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to frame ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => updateFrame('next')}
          className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-100 transition hover:border-slate-500"
          aria-label="Next view"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
