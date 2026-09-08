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

  const highlights = [
    'Agile Development Methodology',
    '24/7 Support & Maintenance',
    'Scalable & Secure Solutions',
    'Continuous Innovation'
  ]

  const stats = [
    { key: 'projects', end: 50, label: 'Projects Completed', suffix: '+' },
    { key: 'clients', end: 60, label: 'Happy Clients', suffix: '+' },
    { key: 'experience', end: 5, label: 'Years Experience', suffix: '' },
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
    <section className="py-16 sm:py-20 md:py-28 border-t border-border" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent mb-4">
              Who we are
            </p>
            <h2 className="text-h2 font-semibold tracking-display text-fg mb-6">
              About DA Orbit
            </h2>
            <p className="text-lead text-fg-muted mb-4 leading-relaxed">
              We are a passionate team of developers, designers, and innovators committed to
              transforming businesses through cutting-edge technology solutions.
            </p>
            <p className="text-base text-fg-subtle mb-8 leading-relaxed">
              Founded with the vision to bridge the gap between complex technology and business success,
              DA Orbit has been at the forefront of digital transformation, delivering solutions that
              not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <div className="space-y-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-fg-muted text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className="glass edge-lit rounded-2xl p-6 sm:p-8 text-center shadow-[var(--shadow-soft)] transition-colors duration-300 hover:border-border-strong"
              >
                <div className="text-3xl sm:text-4xl font-semibold tracking-display text-fg tabular-nums">
                  {counts[stat.key as keyof typeof counts]}{stat.suffix}
                </div>
                <div className="mt-2 text-sm text-fg-subtle">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
