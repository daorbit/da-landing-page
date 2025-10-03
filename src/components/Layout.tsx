import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <nav>
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            <div className="logo">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent m-0">DA</h2>
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
      
      <main className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      
      <footer className="bg-slate-800 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                DA Landing Page
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Built with Next.js and TypeScript for optimal performance.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4 text-gray-100">Quick Links</h4>
              <ul className="list-none p-0 m-0 space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">About</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-4 text-gray-100">Connect</h4>
              <ul className="list-none p-0 m-0 space-y-2">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">GitHub</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-gray-400 m-0">&copy; 2025 DA Landing Page. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout