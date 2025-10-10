import Link from "next/link";
import { BlogPost } from "../../types/blog";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sanitizeContent = (html: string) => {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      return bodyMatch[1];
    }
    return html;
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm sm:text-base text-gray-400 overflow-hidden">
          <li className="flex-shrink-0">
            <Link href="/" className="hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li className="flex items-center flex-shrink-0">
            <svg
              className="w-4 h-4 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              href="/blogs"
              className="hover:text-blue-400 transition-colors font-medium min-h-[0px]"
            >
              Blog
            </Link>
          </li>
          <li className="flex items-center min-w-0 flex-1">
            <svg
              className="w-4 h-4 mx-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white truncate font-medium" title={post.title}>
              {post.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full"
            >
              {tag}
            </span>
          ))}
          {post.featured && (
            <span className="px-3 py-1 text-sm font-medium bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author and Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-b border-gray-700 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-400">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-400 sm:flex-shrink-0">
            {post.readTime} min read
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg prose-violet max-w-none m-0">
        <div 
          className="text-gray-300 leading-relaxed break-words m-0"
          dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}
        />
      </div>
    </article>
  );
}
