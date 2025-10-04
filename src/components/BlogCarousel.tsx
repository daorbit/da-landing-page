import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BlogPost } from "../types/blog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BlogCarouselProps {
  posts: BlogPost[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Debug logging
  console.log("BlogCarousel posts:", posts);
  console.log("Posts length:", posts?.length);

  if (!posts || posts.length === 0) {
    return (
      <section id="blog" className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-300">
              No blog posts available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-950 border-t-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and expert
            perspectives on technology, business innovation, and digital
            transformation.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".blog-swiper-button-next",
              prevEl: ".blog-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".blog-swiper-pagination",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {posts?.slice(0, 6).map((post) => (
              <SwiperSlide key={post.id}>
                <Link href={`/blogs/${post.slug}`}>
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform cursor-pointer border border-gray-800">
                    {/* Blog Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Blog Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-400">
                              {post.author.name.charAt(0)}
                            </span>
                          </div>
                          <span>{post.author.name}</span>
                        </div>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="blog-swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .blog-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(59, 130, 246, 0.3);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .blog-swiper-pagination .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
