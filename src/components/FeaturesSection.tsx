'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Cloud, Shield, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'MERN Development',
    description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js for scalable and efficient solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
  },
  {
    icon: Cloud,
    title: 'SEO Solutions',
    description: 'Comprehensive SEO strategies to enhance your online visibility and drive organic traffic.',
  },
  {
    icon: Shield,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed, efficiency, and exceptional user experience.',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock support and maintenance to ensure your systems run smoothly.',
  }
]

const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            Why choose DA Orbit
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We deliver innovative solutions that drive digital transformation and business growth
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl p-6 sm:p-7 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all duration-200"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-indigo-50 mb-5">
                <feature.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
