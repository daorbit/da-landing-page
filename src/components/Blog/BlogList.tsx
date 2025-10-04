import { BlogPost } from '../../types/blog';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
  description?: string;
}

export default function BlogList({ 
  posts, 
  title,
  description 
}: BlogListProps) {
  // Sort posts by date (most recent first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
          <svg 
            className="w-12 h-12 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">No blog posts found</h3>
        <p className="text-gray-400">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* All Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {sortedPosts.map((post) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            variant={post.featured ? "featured" : "default"}
          />
        ))}
      </div>
    </div>
  );
}