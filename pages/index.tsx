import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Da Orbit - Innovative Software Solutions</title>
        <meta name="description" content="Da Orbit - Revolutionizing software development with cutting-edge solutions. We build the future, one orbit at a time." />
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