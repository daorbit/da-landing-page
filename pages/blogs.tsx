import { GetStaticProps } from 'next';
import Seo from '../src/components/Seo';
import { blog, breadcrumbs, graph } from '../src/utils/schema';
import Layout from '../src/components/Layout';
import BlogList from '../src/components/Blog/BlogList';import { BlogPost } from '../src/types/blog';
import { getAllPosts } from '../src/data/blogData';

interface BlogsPageProps {
  posts: BlogPost[];
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  return (
    <>
      <Seo
        title="Blog — Engineering & Product Insights"
        description="Practical notes on web development, performance, AI and shipping software from the DA Orbit engineering team."
        path="/blogs"
        jsonLd={graph(blog(posts), breadcrumbs([{ name: "Blog", path: "/blogs" }]))}
      />

      <Layout>
        <section className="relative isolate overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="rise rise-1 text-[15px] font-semibold text-accent sm:text-[17px]">The DA Orbit blog</p>
              <h1 className="rise rise-2 mt-3 text-balance text-display font-semibold leading-[1.04] tracking-display text-fg">
                Notes from the build.
              </h1>
              <p className="rise rise-3 mt-5 max-w-2xl text-pretty text-lead leading-normal text-fg-muted">
                What we learn shipping software — engineering, product and the occasional hard lesson, written up so
                you don&apos;t have to learn it the hard way.
              </p>
            </div>

            <div className="rise rise-4 mt-12">
              <BlogList posts={posts} />
            </div>
          </div>
        </section>
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