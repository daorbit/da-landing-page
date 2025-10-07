import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Da Orbit</title>
        <meta name="description" content="Privacy Policy for Da Orbit - Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white dark:bg-gray-900 py-16 mt-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Privacy Policy
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you contact us through our website or subscribe to our newsletter.
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Contact information (name, email address)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and for marketing purposes.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Types of Cookies We Use:
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Necessary Cookies</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Essential for the website to function properly. These cookies cannot be disabled.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Marketing Cookies</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Preference Cookies</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Remember your preferences and settings to provide a personalized experience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can manage your cookie preferences through our cookie banner that appears when you first visit our website. 
                  You can also change your preferences at any time by clearing your browser's local storage and refreshing the page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Third-Party Services
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our website may use third-party services such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Vercel Analytics for performance monitoring</li>
                  <li>Other analytics and marketing tools</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Email: daorbit2k25@gmail.com<br />
                    Website: www.daorbit.in
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;