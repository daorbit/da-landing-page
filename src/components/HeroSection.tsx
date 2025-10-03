import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
      
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center relative z-20">
        <div className="animate-fadeInUp text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Welcome to <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">DA Landing Page</span>
          </h1>
          <p className="text-xl lg:text-xl leading-relaxed mb-10 opacity-90 max-w-lg mx-auto lg:mx-0">
            A modern, responsive landing page built with Next.js and TypeScript. 
            Experience blazing-fast performance with static site generation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-red-400 to-yellow-400 text-white border-none px-8 py-4 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl shadow-lg">
              Get Started
            </button>
            <button className="bg-transparent text-white border-2 border-white border-opacity-50 px-8 py-4 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md hover:border-white hover:bg-white hover:bg-opacity-10 hover:transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center animate-fadeInRight">
          <div className="w-80 h-80 lg:w-96 lg:h-96 relative flex justify-center items-center">
            <div className="relative w-full h-full">
              <div className="absolute top-12 left-12 w-24 h-24 lg:w-30 lg:h-30 bg-gradient-to-br from-pink-300 to-pink-100 rounded-full animate-float"></div>
              <div className="absolute top-48 right-20 w-20 h-20 lg:w-25 lg:h-25 bg-gradient-to-br from-teal-200 to-pink-200 rounded-2xl transform rotate-12 animate-float-delayed"></div>
              <div className="absolute bottom-20 left-28 w-0 h-0 border-l-[35px] border-r-[35px] lg:border-l-[50px] lg:border-r-[50px] border-l-transparent border-r-transparent border-b-[61px] lg:border-b-[87px] border-b-yellow-300 animate-float-delayed-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection