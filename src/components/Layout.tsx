import React from 'react'
import styles from '@/styles/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <h2>DA</h2>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className={styles.mobileMenuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>DA Landing Page</h3>
              <p>Built with Next.js and TypeScript for optimal performance.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Connect</h4>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 DA Landing Page. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout