import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Services: NextPage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, scalable, and user-friendly web solutions.',
      icon: '🌐',
      features: ['React/Next.js Applications', 'E-commerce Platforms', 'Progressive Web Apps', 'API Integration']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We deliver high-performance apps that provide exceptional user experiences.',
      icon: '📱',
      features: ['iOS & Android Apps', 'React Native Development', 'Flutter Applications', 'App Store Optimization']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. We help businesses leverage AWS, Azure, and Google Cloud for optimal performance and cost efficiency.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps & CI/CD', 'Cloud Security']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting. We help businesses modernize their operations and adopt cutting-edge technologies.',
      icon: '🚀',
      features: ['Process Automation', 'Legacy System Modernization', 'Data Analytics', 'AI/ML Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences. Our design team creates visually stunning and highly functional designs that convert visitors into customers.',
      icon: '🎨',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      title: 'Consulting & Support',
      description: 'Expert technical consulting and ongoing support services. We provide guidance, maintenance, and optimization for your digital assets.',
      icon: '💡',
      features: ['Technical Consulting', 'Code Reviews', 'Performance Optimization', '24/7 Support']
    }
  ]

  return (
    <>
      <Head>
        <title>Services - DA Orbit</title>
        <meta name="description" content="Explore our comprehensive software development services at DA Orbit. From web development to cloud solutions, we deliver innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive software development solutions that drive innovation and accelerate your business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your requirements and goals through detailed consultation.' },
                { step: '02', title: 'Planning', description: 'We create a comprehensive project plan with timelines and milestones.' },
                { step: '03', title: 'Development', description: 'Our expert team builds your solution using best practices and modern technologies.' },
                { step: '04', title: 'Launch', description: 'We deploy your solution and provide ongoing support and maintenance.' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Services