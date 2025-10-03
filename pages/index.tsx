import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Da Orbit - Innovative Software Solutions</title>
        <meta name="description" content="Da Orbit - Revolutionizing software development with cutting-edge solutions. We build the future, one orbit at a time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Da Orbit - Innovative Software Solutions" />
        <meta property="og:description" content="Revolutionizing software development with cutting-edge solutions. We build the future, one orbit at a time." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </>
  )
}

export default Home