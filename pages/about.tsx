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
        <section className="spotlight relative flex min-h-[80vh] items-center justify-center bg-surface px-6 pt-32 pb-20">
          <div className="relative mx-auto max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-fg mb-8">
              About Us
            </h1>
            <p className="text-lg text-fg-muted leading-relaxed mb-6">
              At DA Orbit, we specialize in cutting-edge software development, cloud solutions,
              and digital transformation services. Our team of expert developers and engineers
              work tirelessly to deliver innovative solutions that drive business growth and success.
            </p>
            <p className="text-base text-fg-subtle leading-relaxed">
              From web applications to mobile apps, enterprise software to cloud infrastructure —
              we orbit around your success, providing the technology solutions you need to thrive in the digital age.
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About