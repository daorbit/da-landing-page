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
    ? 'bg-accent-soft border-accent-border'
    : 'bg-surface-elevated border-border';

  return (
    <Link href={`/blogs/${post.slug}`} className="block group h-full">
      <article className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:border-accent-border h-full ${cardClasses}`}>
        {/* Image */}
        {post.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-fg rounded-full">
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
                className="px-2 py-1 text-xs font-medium bg-accent-soft text-accent border border-accent-border/50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight mb-3 text-fg group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-fg-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-fg-subtle mt-auto">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}