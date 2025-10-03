import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - DA Landing Page</title>
        <meta name="description" content="Learn more about DA Landing Page" />
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
              This is the About page demonstrating Next.js page routing. 
              DA Landing Page is built with modern web technologies including Next.js, 
              TypeScript, and CSS Modules for optimal performance and maintainability.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666'
            }}>
              Navigate back to the home page or explore other sections using the navigation menu.
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About