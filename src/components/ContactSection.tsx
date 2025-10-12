import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<any[]>([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors([])
    setErrorMessage('')
    setIsSubmitting(true)
    
    try {
      const apiUrl = 'https://da-backend-ochre.vercel.app'
      const response = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          setErrors(data.errors)
        }
        setErrorMessage(data.message || 'Failed to submit form')
        console.error('Form submission failed:', data.message, data.errors)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage('Network error. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear errors for this field when user starts typing
    if (errors.length > 0) {
      setErrors(errors.filter(error => error.path !== name))
    }
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  // Helper function to get error message for a specific field
  const getFieldError = (fieldName: string) => {
    const error = errors.find(err => err.path === fieldName)
    return error ? error.msg : null
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send us a message</h3>
            
            {/* Error Message Display */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg">
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            )}
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white bg-opacity-90 border-2 rounded-lg focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 shadow-sm transition-colors ${
                        getFieldError('name') 
                          ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                      }`}
                      placeholder="Your Name"
                    />
                    {getFieldError('name') && (
                      <p className="mt-1 text-sm text-red-300">{getFieldError('name')}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white bg-opacity-90 border-2 rounded-lg focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 shadow-sm transition-colors ${
                        getFieldError('email') 
                          ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {getFieldError('email') && (
                      <p className="mt-1 text-sm text-red-300">{getFieldError('email')}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white bg-opacity-90 border-2 rounded-lg focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 shadow-sm transition-colors ${
                      getFieldError('company') 
                        ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                    }`}
                    placeholder="Your Company"
                  />
                  {getFieldError('company') && (
                    <p className="mt-1 text-sm text-red-300">{getFieldError('company')}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message * <span className="text-gray-300 font-normal">(minimum 10 characters)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white bg-opacity-90 border-2 rounded-lg focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 resize-none shadow-sm transition-colors ${
                      getFieldError('message') 
                        ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                    }`}
                    placeholder="Tell us about your project... (Please write at least 10 characters)"
                  />
                  <div className="mt-1 flex justify-between items-center">
                    {getFieldError('message') ? (
                      <p className="text-sm text-red-300">{getFieldError('message')}</p>
                    ) : (
                      <p className={`text-xs ${
                        formData.message.length < 10 
                          ? 'text-yellow-300' 
                          : 'text-gray-400'
                      }`}>
                        {formData.message.length}/1000 characters
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:shadow-xl transform hover:scale-105 cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-gray-100 text-lg leading-relaxed mb-8">
                Ready to take your business to the next level? We're here to help you navigate 
                the digital landscape and create solutions that drive real results.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-4 p-4  bg-opacity-15 backdrop-blur-sm rounded-lg border border-white border-opacity-30 hover:bg-opacity-25 transition-all duration-300 group shadow-lg cursor-pointer"
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

            <div className=" bg-opacity-15 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 shadow-lg">
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