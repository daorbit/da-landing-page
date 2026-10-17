import React from "react";
import BlogCard from "./BlogCard";
import Reveal from "../ui/Reveal";
import type { BlogPost } from "../../types/blog";

const RelatedPosts: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <section className="border-t border-border section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="text-[1.75rem] font-semibold tracking-display text-fg sm:text-[2.25rem]">Keep reading</h2>
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i as 0 | 1 | 2}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
