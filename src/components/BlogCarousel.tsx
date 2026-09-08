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

  if (!posts || posts.length === 0) {
    return (
      <section
        id="blog"
        className="py-16 md:py-24 bg-surface border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-fg mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-fg-muted">
              No blog posts available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-surface border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent mb-4">
            Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-fg mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-fg-muted max-w-3xl mx-auto">
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
                  <div className="group h-full bg-surface-elevated rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:border-accent-border transition-all duration-300 cursor-pointer border border-border">
                    {/* Blog Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-fg rounded-full">
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
                            className="px-2 py-1 text-xs font-medium bg-accent-soft text-accent border border-accent-border/50 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-fg mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-fg-muted mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-fg-subtle mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-accent-soft border border-accent-border/50 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-accent">
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
          width: 8px;
          height: 8px;
          background: var(--border-strong);
          opacity: 1;
          margin: 0 5px;
          transition: all 0.3s ease;
        }

        .blog-swiper-pagination .swiper-pagination-bullet-active {
          background: var(--accent);
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
