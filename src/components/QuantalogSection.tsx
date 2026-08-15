import React from "react";
import Image from "next/image";

const QuantalogSection: React.FC = () => {
  const features = [
    "Real-time visitor and pageview dashboards",
    "Cookieless tracking, no consent banner required",
    "Built-in SEO audits with Core Web Vitals scoring",
    "Custom events, funnels, and conversion goals",
    "Embeddable API for white-label analytics",
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <Image
                src="/quantalog-logo.png"
                alt="Quantalog - Real-time Web Analytics"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Quantalog
              </h2>

              <p className="text-lg text-gray-500 font-medium">
                Real-time analytics you can embed
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                A privacy-first analytics platform with real-time dashboards, built-in SEO audits, and a multi-tenant API. See who visits, find what's holding your pages back, and ship it all to your own users.
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-indigo-50 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://quantalog.daorbit.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors duration-200"
                >
                  Explore Quantalog
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantalogSection;
