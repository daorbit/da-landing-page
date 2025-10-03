import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Da Orbit
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Innovative software solutions that propel your business into the future.
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
          <p className="text-gray-400 m-0">&copy; 2025 Da Orbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer