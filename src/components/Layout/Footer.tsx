'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react'

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
      router.push(`/#${sectionId}`);
    } else {
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
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/daorbit2k25', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'daorbit2k25@gmail.com', href: 'mailto:daorbit2k25@gmail.com' },
    { icon: MapPin, text: 'Delhi, India', href: '#' }
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900">
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
              <h3 className="text-2xl font-semibold mb-4">
                DA Orbit
              </h3>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed text-sm">
                Revolutionizing software development with cutting-edge solutions.
                We build the future, one orbit at a time.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4" />
                    <a href={item.href} className="text-sm cursor-pointer">
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300 cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterNavigation(link.href)}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterNavigation(link.href)}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 DA Orbit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
