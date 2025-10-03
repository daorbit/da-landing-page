import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 relative">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout