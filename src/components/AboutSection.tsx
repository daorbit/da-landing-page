'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  })

  const stats = [
    { key: 'projects', end: 500, label: 'Projects Completed', suffix: '+' },
    { key: 'clients', end: 150, label: 'Happy Clients', suffix: '+' },
    { key: 'experience', end: 8, label: 'Years Experience', suffix: '' },
    { key: 'satisfaction', end: 99, label: 'Client Satisfaction', suffix: '%' }
  ]

  useEffect(() => {
    if (inView) {
      stats.forEach(stat => {
        let current = 0
        const increment = stat.end / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.end) {
            current = stat.end
            clearInterval(timer)
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }))
        }, 30)
      })
    }
  }, [inView])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Da Orbit</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              We are a passionate team of developers, designers, and innovators committed to 
              transforming businesses through cutting-edge technology solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Founded with the vision to bridge the gap between complex technology and business success, 
              Da Orbit has been at the forefront of digital transformation, delivering solutions that 
              not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Agile Development Methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">24/7 Support & Maintenance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Scalable & Secure Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Continuous Innovation</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {counts[stat.key as keyof typeof counts]}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection