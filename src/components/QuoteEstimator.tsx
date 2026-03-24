'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCheckCircle as CheckCircle, FiMessageCircle as MessageCircle, FiTrendingUp as TrendingUp } from 'react-icons/fi'

type BuildingType = 'commercial' | 'residential' | 'industrial' | 'institutional'
type BudgetRange = 'under-3' | '3-8' | '8-15' | '15-plus'

const buildingRates: Record<BuildingType, number> = {
  commercial: 165,
  residential: 95,
  industrial: 220,
  institutional: 140
}

const packageMap: Record<BudgetRange, string> = {
  'under-3': 'Starter Compliance Package',
  '3-8': 'Growth Protection Package',
  '8-15': 'Advanced Integrated Package',
  '15-plus': 'Enterprise Fire Command Package'
}

const budgetLabel: Record<BudgetRange, string> = {
  'under-3': 'Under 3 Lakhs',
  '3-8': '3 to 8 Lakhs',
  '8-15': '8 to 15 Lakhs',
  '15-plus': '15 Lakhs+'
}

export default function QuoteEstimator() {
  const [buildingType, setBuildingType] = useState<BuildingType>('commercial')
  const [area, setArea] = useState('')
  const [floors, setFloors] = useState('')
  const [budget, setBudget] = useState<BudgetRange>('3-8')
  const [submitted, setSubmitted] = useState(false)

  const areaNumber = Number(area)
  const floorNumber = Number(floors)
  const hasArea = areaNumber > 0
  const hasFloors = floorNumber > 0
  const completedSteps = [buildingType, hasArea, hasFloors, budget].filter(Boolean).length

  const estimate = useMemo(() => {
    if (!hasArea || !hasFloors) return null
    const baseRate = buildingRates[buildingType]
    const floorMultiplier = 1 + Math.max(floorNumber - 1, 0) * 0.08
    const estimated = Math.round(areaNumber * baseRate * floorMultiplier)
    const recommendedPackage = packageMap[budget]
    return { estimated, recommendedPackage }
  }, [areaNumber, floorNumber, buildingType, budget, hasArea, hasFloors])

  const whatsappLink = useMemo(() => {
    if (!estimate) return 'https://wa.me/919876543210'
    const message = [
      'Hello Shreejee Team, I need a fire safety quotation.',
      `Building Type: ${buildingType}`,
      `Total Area: ${areaNumber} sq ft`,
      `Floors: ${floorNumber}`,
      `Budget Range: ${budgetLabel[budget]}`,
      `Estimated Package: ${estimate.recommendedPackage}`,
      `Approx Estimate: INR ${estimate.estimated.toLocaleString('en-IN')}`
    ].join('\n')
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
  }, [estimate, buildingType, areaNumber, floorNumber, budget])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!estimate) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white">Quick Quote Estimator</h2>
      <p className="mt-2 text-slate-300">
        Share your requirements to get a fast budget preview and a ready-to-send WhatsApp quote request.
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
          <span>Progress</span>
          <span>{completedSteps}/4</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={false}
            animate={{ width: `${(completedSteps / 4) * 100}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          />
        </div>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-100">Building Type</label>
          <select
            value={buildingType}
            onChange={(event) => setBuildingType(event.target.value as BuildingType)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="industrial">Industrial</option>
            <option value="institutional">Institutional</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-100">Area (sq ft)</label>
            <input
              type="number"
              min={200}
              step={50}
              value={area}
              onChange={(event) => setArea(event.target.value)}
              placeholder="e.g. 12000"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-100">Number of Floors</label>
            <input
              type="number"
              min={1}
              value={floors}
              onChange={(event) => setFloors(event.target.value)}
              placeholder="e.g. 4"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-100">Budget Range</label>
          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value as BudgetRange)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="under-3">Under 3 Lakhs</option>
            <option value="3-8">3 to 8 Lakhs</option>
            <option value="8-15">8 to 15 Lakhs</option>
            <option value="15-plus">15 Lakhs+</option>
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Generate Estimate
        </button>
      </form>

      <AnimatePresence mode="wait">
        {estimate && (
          <motion.div
            key={`${estimate.estimated}-${estimate.recommendedPackage}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-xl border border-primary/40 bg-primary/10 p-5"
          >
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp size={17} />
              <p className="text-sm font-semibold uppercase tracking-wide">Estimate Ready</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-white">
              INR {estimate.estimated.toLocaleString('en-IN')}
            </p>
            <p className="mt-1 text-slate-200">Recommended: {estimate.recommendedPackage}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={18} />
              Send Quote Request on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {submitted && estimate && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-green-300"
          >
            <CheckCircle size={18} />
            <p className="text-sm">Estimate generated. You can now share the prefilled WhatsApp request.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
