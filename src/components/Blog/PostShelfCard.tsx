import React from "react";
import Link from "next/link";
import PostCover from "./PostCover";
import PostMeta from "./PostMeta";
import type { BlogPost } from "../../types/blog";

const PostShelfCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link href={`/blogs/${post.slug}`} className="post-card group">
    <PostCover post={post} className="aspect-[16/10]" />
    <div className="flex flex-1 flex-col p-6">
      <p className="text-[12px] font-semibold text-accent">{post.tags[0] ?? "Article"}</p>
      <h3 className="mt-2 line-clamp-2 text-[1.125rem] font-semibold leading-snug tracking-tight text-fg">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-fg-muted">{post.excerpt}</p>
      <PostMeta post={post} className="mt-auto pt-5" />
    </div>
  </Link>
);

export default PostShelfCard;
