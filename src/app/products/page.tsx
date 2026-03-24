'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 pb-20 bg-slate-950">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Explore our comprehensive range of fire safety equipment and systems
              </p>
            </div>
          </div>
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '')
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') ?? 'All'
  )
  const [selectedUseCase, setSelectedUseCase] = useState(
    searchParams.get('useCase') ?? 'All'
  )
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery)

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    []
  )

  const useCases = useMemo(
    () => ['All', ...new Set(products.flatMap((product) => product.useCases))],
    []
  )

  const filteredProducts = useMemo(() => {
    const term = debouncedSearchQuery.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesUseCase =
        selectedUseCase === 'All' || product.useCases.includes(selectedUseCase)
      const searchableText = [
        product.name,
        product.description,
        product.category,
        product.useCases.join(' '),
        product.features.join(' '),
        product.applications.join(' ')
      ]
        .join(' ')
        .toLowerCase()
      const matchesSearch = term.length === 0 || searchableText.includes(term)

      return matchesCategory && matchesUseCase && matchesSearch
    })
  }, [debouncedSearchQuery, selectedCategory, selectedUseCase])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 250)

    return () => clearTimeout(timeout)
  }, [searchQuery])

  useEffect(() => {
    const nextSearch = searchParams.get('q') ?? ''
    const nextCategory = searchParams.get('category') ?? 'All'
    const nextUseCase = searchParams.get('useCase') ?? 'All'

    setSearchQuery((prev) => (prev === nextSearch ? prev : nextSearch))
    setSelectedCategory((prev) => (prev === nextCategory ? prev : nextCategory))
    setSelectedUseCase((prev) => (prev === nextUseCase ? prev : nextUseCase))
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()

    if (debouncedSearchQuery.trim()) {
      params.set('q', debouncedSearchQuery.trim())
    }
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory)
    }
    if (selectedUseCase !== 'All') {
      params.set('useCase', selectedUseCase)
    }

    const nextQuery = params.toString()
    const currentQuery = searchParams.toString()

    if (nextQuery !== currentQuery) {
      const url = nextQuery ? `${pathname}?${nextQuery}` : pathname
      router.replace(url, { scroll: false })
    }
  }, [debouncedSearchQuery, selectedCategory, selectedUseCase, pathname, router, searchParams])

  return (
    <div className="pt-24 pb-20 bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive range of fire safety equipment and systems
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="product-search"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400"
              >
                Search products
              </label>
              <input
                id="product-search"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by product, feature, or application"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="use-case-select"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400"
              >
                Use case
              </label>
              <select
                id="use-case-select"
                value={selectedUseCase}
                onChange={(event) => setSelectedUseCase(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-primary"
              >
                {useCases.map((useCase) => (
                  <option key={useCase} value={useCase}>
                    {useCase}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-slate-700 bg-slate-950 text-slate-200 hover:border-slate-500'
                  }`}
                >
                  {category}
                </button>
              )
            })}
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setSelectedUseCase('All')
              }}
              className="ml-auto rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Reset filters
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Showing <span className="font-semibold text-slate-200">{filteredProducts.length}</span>{' '}
            of <span className="font-semibold text-slate-200">{products.length}</span> products
          </p>
        </motion.section>

        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ delay: index * 0.06, duration: 0.32, ease: 'easeOut' }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center"
          >
            <p className="text-lg font-semibold text-slate-100">No products match these filters.</p>
            <p className="mt-2 text-slate-400">
              Try another keyword or reset filters to see all products.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
