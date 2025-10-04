import Link from 'next/link';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const cardClasses = variant === 'featured' 
    ? 'bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border-blue-500/30' 
    : 'bg-gray-800/50 border-gray-700/50';

  return (
    <Link href={`/blogs/${post.slug}`} className="block group">
      <article className={`relative rounded-xl border backdrop-blur-sm transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 h-full ${cardClasses}`}>
        {/* Image */}
        {post.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            
            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-cyan-500/90 text-white rounded-full backdrop-blur-sm">
                  Featured
                </span>
              </div>
            )}
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}