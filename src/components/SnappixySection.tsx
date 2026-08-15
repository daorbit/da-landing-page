import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SnappixySection: React.FC = () => {
  const features = [
    "AI-powered image generation and editing",
    "Intuitive drag-and-drop interface",
    "Professional-grade templates and assets",
    "Real-time collaboration tools",
    "Export in multiple formats (PNG, JPG, SVG)",
    "Advanced editing tools and filters",
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <Image
                src="/snappixy.png"
                alt="Snappixy - AI Image Magic"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Snappixy
              </h2>

              <p className="text-lg text-gray-500 font-medium">
                AI Image Magic
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                Transform your creative vision into reality with Snappixy's
                cutting-edge AI technology. Our powerful image generation and
                editing platform empowers creators, designers, and businesses to
                produce stunning visuals effortlessly.
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
                  href="https://snappixy.daorbit.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors duration-200"
                >
                  Try Snappixy Now
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SnappixySection;
