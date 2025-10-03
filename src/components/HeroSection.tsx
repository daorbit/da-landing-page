import React from 'react'
import styles from '@/styles/HeroSection.module.css'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>DA Landing Page</span>
          </h1>
          <p className={styles.subtitle}>
            A modern, responsive landing page built with Next.js and TypeScript. 
            Experience blazing-fast performance with static site generation.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Get Started
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.placeholder}>
            <div className={styles.placeholderContent}>
              <div className={styles.circle}></div>
              <div className={styles.square}></div>
              <div className={styles.triangle}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection