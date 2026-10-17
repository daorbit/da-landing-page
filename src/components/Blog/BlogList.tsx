import React, { useMemo, useState } from "react";
import { FileText } from "lucide-react";
import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";
import TagFilter from "./TagFilter";
import Reveal from "../ui/Reveal";
import type { BlogPost } from "../../types/blog";

const MAX_TAGS = 8;

const BlogList: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const [tag, setTag] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [posts]
  );

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    sorted.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, MAX_TAGS)
      .map(([t]) => t);
  }, [sorted]);

  if (!sorted.length) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface-subtle text-fg-faint">
          <FileText className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-[1.25rem] font-semibold text-fg">No articles yet</h2>
        <p className="mt-2 text-fg-muted">We&apos;re writing the first ones. Check back soon.</p>
      </div>
    );
  }

  const filtered = tag ? sorted.filter((p) => p.tags.includes(tag)) : sorted;
  const [featured, ...rest] = filtered;

  return (
    <>
      {tags.length > 1 && <TagFilter tags={tags} active={tag} onChange={setTag} />}

      {featured && (
        <Reveal key={featured.id} className="mt-10">
          <FeaturedPost post={featured} />
        </Reveal>
      )}

      {rest.length > 0 && (
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) as 0 | 1 | 2}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogList;
