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
        <title>Blog - Da Orbit | Latest Insights & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, trends, and updates from Da Orbit. Explore our blog for expert perspectives on technology, business, and innovation." 
        />
        <meta name="keywords" content="blog, insights, technology, business, innovation, digital transformation, Da Orbit" />
        <meta property="og:title" content="Blog - Da Orbit | Latest Insights & Updates" />
        <meta 
          property="og:description" 
          content="Stay updated with the latest insights, trends, and updates from Da Orbit. Explore our blog for expert perspectives on technology, business, and innovation." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daorbit.com/blogs" />
        <link rel="canonical" href="https://daorbit.com/blogs" />
      </Head>

      <Layout>
        <main className="min-h-screen bg-gray-950">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-15 md:py-24 border-b border-gray-800">
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
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
};