import React from "react";
import Image from "next/image";

const TheTechodioSection: React.FC = () => {
  const features = [
    "AI-powered content suggestions and recommendations",
    "Latest tech-related audio content and podcasts",
    "Multi-language audio support and accessibility",
    "Mini player for seamless listening experience",
    "Fully responsive design across all devices",
    "Curated tech news and insights in audio format",
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-1 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                The Techodio
              </h2>

              <p className="text-lg text-gray-500 font-medium">
                AI-Powered Audio Intelligence
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                Revolutionize your audio content creation with The Techodio's
                advanced AI technology. Our intelligent platform transforms how
                you create, edit, and distribute podcasts, audiobooks, and
                digital audio content with unprecedented ease and quality.
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
                  href="https://techodio.daorbit.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors duration-200"
                >
                  Explore The Techodio
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

          {/* Right Column - Image */}
          <div className="order-2 lg:order-2">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <Image
                src="/theTechodio.png"
                alt="The Techodio - AI Audio Intelligence"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTechodioSection;
