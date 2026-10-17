import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ShareButtons from "./ShareButtons";
import { formatDate } from "../../utils/formatDate";
import type { BlogPost } from "../../types/blog";

const ArticleHeader: React.FC<{ post: BlogPost }> = ({ post }) => (
  <header className="mx-auto max-w-3xl px-4 text-center sm:px-6">
    <Link
      href="/blogs"
      className="rise rise-1 group inline-flex items-center gap-1.5 text-[13px] font-medium text-fg-muted transition-colors hover:text-fg"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      All articles
    </Link>

    {post.tags.length > 0 && (
      <p className="rise rise-2 mt-8 text-[14px] font-semibold text-accent">{post.tags.slice(0, 2).join(" · ")}</p>
    )}

    <h1 className="rise rise-2 mt-4 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.035em] text-fg sm:text-[3.25rem] lg:text-[3.75rem]">
      {post.title}
    </h1>

    {post.excerpt && (
      <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-pretty text-lead leading-[1.55] text-fg-muted">
        {post.excerpt}
      </p>
    )}

    <div className="rise rise-4 mt-10 flex flex-col items-center justify-between gap-5 border-y border-border py-5 sm:flex-row">
      <div className="flex items-center gap-3 text-left">
        {post.author.avatar && (
          <img src={post.author.avatar} alt="" className="h-10 w-10 rounded-full bg-surface-subtle object-cover" />
        )}
        <div>
          <p className="text-[14px] font-semibold text-fg">{post.author.name}</p>
          <p className="text-[13px] text-fg-faint">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.readTime} min read
          </p>
        </div>
      </div>
      <ShareButtons title={post.title} path={`/blogs/${post.slug}`} />
    </div>
  </header>
);

export default ArticleHeader;
