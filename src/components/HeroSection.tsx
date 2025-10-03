import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-8 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Da Orbit
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing software development with cutting-edge solutions.
            We build the future, one orbit at a time.
          </p>
          <div className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Innovative software development, cloud solutions, and digital transformation
            services that propel your business into the next generation.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
            Learn More
          </button>
        </div>

        {/* Stats or features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-pink-300 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection