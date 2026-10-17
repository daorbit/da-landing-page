import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ShelfControls from "./ui/ShelfControls";
import Button from "./ui/Button";
import PostShelfCard from "./Blog/PostShelfCard";
import { useShelf } from "../hooks/useShelf";
import type { BlogPost } from "../types/blog";

const BlogCarousel: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const shelf = useShelf();

  if (!posts?.length) return null;

  return (
    <section id="blog" className="section-y">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-10">
        <SectionHeading
          align="left"
          eyebrow="Insights"
          title="Notes from the build."
          body="What we learn shipping software — written up so you don't have to learn it the hard way."
        />
        <Button href="/blogs" variant="ghost" className="shrink-0 text-[15px]">
          All articles
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div ref={shelf.ref} className="shelf-track mt-10 sm:mt-12" aria-label="Latest articles">
        {posts.slice(0, 8).map((post) => (
          <PostShelfCard key={post.id} post={post} />
        ))}
      </div>

      <ShelfControls
        progress={shelf.progress}
        ratio={shelf.ratio}
        atStart={shelf.atStart}
        atEnd={shelf.atEnd}
        onPrev={shelf.prev}
        onNext={shelf.next}
        label="articles"
      />
    </section>
  );
};

export default BlogCarousel;
