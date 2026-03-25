'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu as Menu, FiX as X, FiSun as Sun, FiMoon as Moon } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const pathname = usePathname()
  const useSolidNavbar = isScrolled || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const shouldUseLight = savedTheme === 'light'
    document.documentElement.classList.toggle('light-theme', shouldUseLight)
    setIsLightTheme(shouldUseLight)
  }, [])

  const toggleTheme = () => {
    const nextIsLight = !isLightTheme
    document.documentElement.classList.toggle('light-theme', nextIsLight)
    window.localStorage.setItem('theme', nextIsLight ? 'light' : 'dark')
    setIsLightTheme(nextIsLight)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        useSolidNavbar
          ? isLightTheme
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
            : 'bg-secondary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">Shreejee</span>
            <span className={`ml-1 ${isLightTheme && useSolidNavbar ? 'text-slate-900' : 'text-white'}`}>Technology</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-300 font-medium ${
                  pathname === link.href
                    ? 'text-primary'
                    : isLightTheme && useSolidNavbar
                      ? 'text-slate-800'
                      : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-lg border p-2 transition ${
                isLightTheme && useSolidNavbar
                  ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link href="/contact" className="btn-primary px-5 py-2">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isLightTheme && useSolidNavbar ? 'text-slate-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden backdrop-blur-md rounded-b-2xl overflow-hidden ${
                isLightTheme ? 'bg-white/95 border border-slate-200 border-t-0' : 'bg-secondary/95'
              }`}
            >
              <div className="flex flex-col py-4 space-y-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`mx-4 rounded-lg border p-2 transition ${
                    isLightTheme
                      ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                      : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                  }`}
                  aria-label={isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
                >
                  {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-primary px-4 py-2 transition-colors ${
                      pathname === link.href
                        ? 'text-primary'
                        : isLightTheme
                          ? 'text-slate-800'
                          : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center mx-4"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
