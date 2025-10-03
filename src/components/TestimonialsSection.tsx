'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Pankaj Shukla',
    role: 'Principal Consultant, KPMG',
    content: "I've been with this company for some time now and I can honestly say it's been a game-changer for me. With their guidance, I've managed to build a strong portfolio that I feel confident about. What I really appreciate is how clearly they...",
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Da Orbit transformed our vision into reality. Their expertise in cloud solutions helped us scale 10x faster than we imagined possible. The team was professional and delivered exceptional results.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Innovation Labs',
    content: 'The mobile app they developed exceeded all our expectations. The attention to detail and performance optimization is remarkable. I would highly recommend their services.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, GrowthHub',
    content: 'Working with Da Orbit was a game-changer. Their team delivered a robust platform that automated 80% of our workflow. Outstanding service and support throughout.',
    rating: 5,
  }
]

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

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
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Client's Testimonials
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={goToPrevious}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-purple-600 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-purple-600 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex flex-col justify-center px-2 sm:px-4 md:px-0">
            {/* Stars */}
            <motion.div 
              key={`stars-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center mb-6 md:mb-8 h-8 md:h-12"
            >
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-current mx-0.5 md:mx-1" />
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div 
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 md:mb-12 min-h-[120px] md:min-h-[200px] flex items-center justify-center"
            >
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 leading-relaxed italic font-light max-w-4xl px-4 md:px-0">
                "{testimonials[currentIndex].content}"
              </p>
            </motion.div>

            {/* Author Info */}
            <motion.div 
              key={`author-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1 md:space-y-2 h-12 md:h-16 flex flex-col justify-center"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8 md:w-8 h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection