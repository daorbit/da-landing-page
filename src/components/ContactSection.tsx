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
    // {
    //   icon: Phone,
    //   title: 'Call Us',
    //   content: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567'
    // },
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-0"
          >
            Ready to Start Your <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Journey?</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto px-4 sm:px-0"
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
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
              <p className="text-gray-100 text-lg leading-relaxed">
                Ready to take your business to the next level? We're here to help you navigate
                the digital landscape and create solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-4 p-4 bg-opacity-15 backdrop-blur-sm rounded-lg border border-white border-opacity-30 hover:bg-opacity-25 transition-all duration-300 group shadow-lg cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-100">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-opacity-15 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 shadow-lg">
              <h4 className="font-semibold text-white mb-3">Why choose DA Orbit?</h4>
              <ul className="space-y-2 text-gray-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Free consultation & project estimate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Agile development process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Post-launch support & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
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