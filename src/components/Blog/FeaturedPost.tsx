import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCover from "./PostCover";
import PostMeta from "./PostMeta";
import type { BlogPost } from "../../types/blog";

const FeaturedPost: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link href={`/blogs/${post.slug}`} className="featured-post group">
    <PostCover post={post} eager className="aspect-[16/10] lg:aspect-auto lg:h-full" />
    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
      <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
        <span className="pill-badge">Latest</span>
        {post.tags[0]}
      </p>
      <h2 className="mt-4 text-balance text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.025em] text-fg sm:text-[2.5rem]">
        {post.title}
      </h2>
      <p className="mt-4 line-clamp-3 text-pretty text-[16px] leading-relaxed text-fg-muted sm:text-[17px]">
        {post.excerpt}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <PostMeta post={post} />
        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-fg">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  </Link>
);

export default FeaturedPost;
