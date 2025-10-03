import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <nav>
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="logo">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent m-0">Da Orbit</h2>
          </div>
          <ul className="hidden md:flex list-none m-0 p-0 gap-8">
            <li>
              <a href="/" className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
            </li>
          </ul>
          <div className="md:hidden flex flex-col cursor-pointer gap-1">
            <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header