import React from "react";
import Image from "next/image";

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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-3 opacity-30"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/snappixy.png"
                  alt="Snappixy - AI Image Magic"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Snappixy
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 font-medium">
                AI Image Magic
              </p>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your creative vision into reality with Snappixy's
                cutting-edge AI technology. Our powerful image generation and
                editing platform empowers creators, designers, and businesses to
                produce stunning visuals effortlessly.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-0.5 shadow-md">
                        <svg
                          className="w-3 h-3 text-white"
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
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://staging-image-builder.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-base font-medium rounded-lg hover:border-pink-600 transform transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  Try Snappixy Now
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
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

export default SnappixySection;
