import React from "react";
import { formatDate } from "../../utils/formatDate";
import type { BlogPost } from "../../types/blog";

const PostMeta: React.FC<{ post: BlogPost; className?: string }> = ({ post, className = "" }) => (
  <p className={`flex flex-wrap items-center gap-x-2 text-[13px] text-fg-faint ${className}`}>
    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, "short")}</time>
    <span aria-hidden="true">·</span>
    <span>{post.readTime} min read</span>
  </p>
);

export default PostMeta;
