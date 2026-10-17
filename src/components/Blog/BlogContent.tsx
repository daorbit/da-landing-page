import React, { useRef } from "react";
import ArticleHeader from "./ArticleHeader";
import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";
import ShareButtons from "./ShareButtons";
import { useArticleHeadings } from "../../hooks/useArticleHeadings";
import type { BlogPost } from "../../types/blog";

const BlogContent: React.FC<{ post: BlogPost }> = ({ post }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { headings, activeId } = useArticleHeadings(bodyRef);

  return (
    <article className="pb-16 pt-10 sm:pb-24 sm:pt-16">
      <ReadingProgress />
      <ArticleHeader post={post} />

      {post.image && (
        <div className="rise rise-5 mx-auto mt-12 max-w-6xl px-4 sm:mt-16 sm:px-6">
          <img src={post.image} alt="" className="article-hero" />
        </div>
      )}

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 sm:mt-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
        <div className="min-w-0">
          <div ref={bodyRef} className="prose-q mx-auto lg:mx-0" dangerouslySetInnerHTML={{ __html: post.content }} />

          <footer className="mx-auto mt-16 flex max-w-[44rem] flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between lg:mx-0">
            {post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-surface-subtle px-3 py-1 text-[13px] text-fg-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <ShareButtons title={post.title} path={`/blogs/${post.slug}`} />
          </footer>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents headings={headings} activeId={activeId} />
          </div>
        </aside>
      </div>
    </article>
  );
};

export default BlogContent;
