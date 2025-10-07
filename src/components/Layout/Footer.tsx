'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFooterNavigation = (href: string) => {
    const sectionId = href.replace('#', '');
    if (router.pathname.startsWith('/blogs')) {
      // On blog pages, navigate to home page with hash
      router.push(`/#${sectionId}`);
    } else {
      // On home page, scroll to section
      scrollToSection(sectionId);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#features' },
      { name: 'Mobile Apps', href: '#features' },
      { name: 'Cloud Solutions', href: '#features' },
      { name: 'Consulting', href: '#contact' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
      // { name: 'Blog', href: '#' }
    ]
  }

  const socialLinks = [
    // { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'daorbit2k25@gmail.com', href: 'mailto:daorbit2k25@gmail.com' },
    // { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Delhi, India', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 ">
                DA Orbit
              </h3>
              <p className="text-gray-200 mb-6 max-w-md leading-relaxed">
                Revolutionizing software development with cutting-edge solutions. 
                We build the future, one orbit at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4" />
                    <a href={item.href} className="text-sm cursor-pointer">
                      {item.text}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-purple-600 transition-all duration-300 cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterNavigation(link.href)}
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-300 text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterNavigation(link.href)}
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-300 text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm">
              © 2025 Da Orbit. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-200 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Da Orbit Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer