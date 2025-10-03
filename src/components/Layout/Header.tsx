'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-lg text-gray-700'
          : 'bg-black bg-opacity-30 backdrop-blur-sm text-white'
      }`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="logo cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <h2 className={`text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent m-0 ${
              !scrolled ? 'text-white' : ''
            }`}>
              DA Orbit
            </h2>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none m-0 p-0 gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-300 hover:text-purple-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
                  }`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white drop-shadow-lg hover:bg-white hover:bg-opacity-20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }
          }}
          className="md:hidden overflow-hidden bg-white bg-opacity-95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="px-8 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header