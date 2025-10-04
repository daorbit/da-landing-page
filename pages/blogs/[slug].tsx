import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import BlogContent from '../../src/components/Blog/BlogContent';
import { BlogPost } from '../../src/types/blog';
import { getAllPosts, getPostBySlug } from '../../src/data/blogData';

interface BlogPostPageProps {
  post: BlogPost | null;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const router = useRouter();

  // Show loading state during static generation
  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Show 404 if post not found
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toISOString();
  };

  return (
    <>
      <Head>
        <title>{post.title} - Da Orbit Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} - Da Orbit Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://daorbit.com/blogs/${post.slug}`} />
        
        {/* Article meta */}
        <meta property="article:author" content={post.author.name} />
        <meta property="article:published_time" content={formatDate(post.publishedAt)} />
        <meta property="article:section" content="Technology" />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - Da Orbit Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://daorbit.com/blogs/${post.slug}`} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "publisher": {
                "@type": "Organization",
                "name": "Da Orbit",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://daorbit.com/favicon.png"
                }
              },
              "datePublished": formatDate(post.publishedAt),
              "dateModified": formatDate(post.publishedAt),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://daorbit.com/blogs/${post.slug}`
              }
            })
          }}
        />
      </Head>

      <Layout>
        <main className="min-h-screen bg-black bg-opacity-30">
          {/* Content Section */}
          <section className="py-16 md:py-24 bg-black bg-opacity-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BlogContent post={post} />
            </div>
          </section>

          {/* Related Posts Section */}
          <section className="bg-gray-900 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Continue Reading
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Explore more insights and perspectives from our blog.
                </p>
                <button
                  onClick={() => router.push('/blogs')}
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All Posts
                </button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};