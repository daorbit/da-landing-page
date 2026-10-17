import React from "react";
import Link from "next/link";
import PostCover from "./PostCover";
import PostMeta from "./PostMeta";
import type { BlogPost } from "../../types/blog";

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link href={`/blogs/${post.slug}`} className="blog-card group">
    <PostCover post={post} className="aspect-[16/10] rounded-[1.25rem]" />
    <div className="mt-5 px-1">
      <p className="text-[12px] font-semibold text-accent">{post.tags[0] ?? "Article"}</p>
      <h3 className="mt-2 line-clamp-2 text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] text-fg transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-fg-muted">{post.excerpt}</p>
      <PostMeta post={post} className="mt-4" />
    </div>
  </Link>
);

export default BlogCard;
