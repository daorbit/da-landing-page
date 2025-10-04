import Link from 'next/link';
import { BlogPost } from '../../types/blog';

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/blogs" className="hover:text-blue-400">
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white truncate max-w-xs">
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between py-6 border-t border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium text-blue-400">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-white">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-400">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            {post.readTime} min read
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg prose-violet max-w-none">
        <div className="whitespace-pre-line leading-relaxed">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return <br key={index} />;
            
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">
                  {paragraph.substring(2)}
                </h1>
              );
            }
            
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-white">
                  {paragraph.substring(3)}
                </h2>
              );
            }
            
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-white">
                  {paragraph.substring(4)}
                </h3>
              );
            }
            
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="ml-4 mb-1 text-gray-300">
                  {paragraph.substring(2)}
                </li>
              );
            }
            
            if (paragraph.match(/^\d+\./)) {
              return (
                <li key={index} className="ml-4 mb-1 text-gray-300">
                  {paragraph.replace(/^\d+\.\s*/, '')}
                </li>
              );
            }
            
            return (
              <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      {/* Share and Back Navigation */}
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Blog
          </Link>

         
        </div>
      </footer>
    </article>
  );
}