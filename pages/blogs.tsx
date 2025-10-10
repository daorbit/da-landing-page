import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import BlogList from '../src/components/Blog/BlogList';
import { BlogPost } from '../src/types/blog';
import { getAllPosts } from '../src/data/blogData';

interface BlogsPageProps {
  posts: BlogPost[];
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  return (
    <>
      <Head>
        <title>Blog - DA Orbit | Latest Insights & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, trends, and updates from DA Orbit. Explore our blog for expert perspectives on technology, business, and innovation." 
        />
        <meta name="keywords" content="blog, insights, technology, business, innovation, digital transformation, DA Orbit, AI, software development" />
        <meta name="author" content="DA Orbit" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="DA Orbit" />
        <meta property="og:title" content="Blog - DA Orbit | Latest Insights & Updates" />
        <meta 
          property="og:description" 
          content="Stay updated with the latest insights, trends, and updates from DA Orbit. Explore our blog for expert perspectives on technology, business, and innovation." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daorbit.com/blogs" />
        <meta property="og:image" content="https://daorbit.com/images/favicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DA Orbit Blog - Latest Insights & Updates" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@daorbit" />
        <meta name="twitter:creator" content="@daorbit" />
        <meta name="twitter:title" content="Blog - DA Orbit | Latest Insights & Updates" />
        <meta name="twitter:description" content="Stay updated with the latest insights, trends, and updates from DA Orbit. Explore our blog for expert perspectives on technology, business, and innovation." />
        <meta name="twitter:image" content="https://daorbit.com/images/favicon.png" />
        <meta name="twitter:image:alt" content="DA Orbit Blog" />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#1f2937" />
        <meta name="format-detection" content="telephone=no" />
        
        <link rel="canonical" href="https://daorbit.com/blogs" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "DA Orbit Blog",
              "description": "Stay updated with the latest insights, trends, and updates from DA Orbit. Expert perspectives on technology, business, and innovation.",
              "url": "https://daorbit.com/blogs",
              "publisher": {
                "@type": "Organization",
                "name": "DA Orbit",
                "url": "https://daorbit.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://daorbit.com/images/favicon.png",
                  "width": 60,
                  "height": 60
                }
              },
              "inLanguage": "en-US",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://daorbit.com/blogs"
              },
              "blogPost": posts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://daorbit.com/blogs/${post.slug}`,
                "datePublished": new Date(post.publishedAt).toISOString(),
                "author": {
                  "@type": "Person",
                  "name": post.author.name
                },
                "keywords": post.tags.join(", ")
              }))
            })
          }}
        />
      </Head>

      <Layout>
        <main className="min-h-screen bg-gray-950">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 mt-15 md:py-24 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
                  Our Blog
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  Discover insights, trends, and expert perspectives on technology, 
                  business innovation, and digital transformation.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Section */}
          <section className="py-16 md:py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BlogList 
                posts={posts} 
              />
            </div>
          </section>

        
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
};