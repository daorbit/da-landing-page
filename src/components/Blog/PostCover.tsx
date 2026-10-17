import React from "react";
import type { BlogPost } from "../../types/blog";

interface PostCoverProps {
  post: BlogPost;
  className?: string;
  eager?: boolean;
}

const PostCover: React.FC<PostCoverProps> = ({ post, className = "", eager }) => (
  <div className={`post-cover ${className}`}>
    {post.image ? (
      <img src={post.image} alt="" loading={eager ? "eager" : "lazy"} className="post-cover__img" />
    ) : (
      <span className="post-cover__fallback" aria-hidden="true">
        {post.title.charAt(0)}
      </span>
    )}
  </div>
);

export default PostCover;
