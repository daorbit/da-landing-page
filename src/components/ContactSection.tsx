import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin } from 'lucide-react'

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'daorbit2k25@gmail.com',
      link: 'mailto:daorbit2k25@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Delhi, India',
      link: '#'
    }
  ]

  const reasons = [
    'Free consultation & project estimate',
    'Agile development process',
    'Post-launch support & maintenance',
    'Dedicated project manager'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      className="spotlight relative py-16 sm:py-20 md:py-28 bg-surface-subtle border-t border-border"
      id="contact"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-fg mb-4"
          >
            Ready to start your journey?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-fg-muted max-w-2xl mx-auto"
          >
            Let's discuss how we can help transform your business with innovative technology solutions
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-4 p-4 rounded-2xl border border-border bg-surface-elevated hover:border-accent-border hover:shadow-[var(--shadow-card)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-soft border border-accent-border/50 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fg group-hover:text-accent transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-fg-muted text-sm">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-2xl p-6 border border-border bg-surface-elevated">
              <h4 className="font-semibold text-fg mb-3">Why choose DA Orbit?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-fg-muted text-sm">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
