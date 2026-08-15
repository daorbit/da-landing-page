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
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4"
          >
            Ready to start your journey?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-lg p-6 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-900 mb-3">Why choose DA Orbit?</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Free consultation & project estimate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Agile development process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Post-launch support & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Dedicated project manager</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
