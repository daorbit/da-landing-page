import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DA Landing Page</title>
        <meta name="description" content="Welcome to DA Landing Page - A modern, responsive landing page built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <HeroSection />
      </Layout>
    </>
  )
}

export default Home