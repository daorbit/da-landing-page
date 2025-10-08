import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - DA Orbit</title>
        <meta name="description" content="Learn more about DA Orbit - Innovative software development and digital transformation services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout>
        <section style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              About Us
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8',
              color: '#555',
              marginBottom: '2rem'
            }}>
              At DA Orbit, we specialize in cutting-edge software development, cloud solutions, 
              and digital transformation services. Our team of expert developers and engineers 
              work tirelessly to deliver innovative solutions that drive business growth and success.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666'
            }}>
              From web applications to mobile apps, enterprise software to cloud infrastructure - 
              we orbit around your success, providing the technology solutions you need to thrive in the digital age.
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About