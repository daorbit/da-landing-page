import { GetStaticProps, GetStaticPaths } from "next";
import Seo from "../../src/components/Seo";
import { blogPosting, breadcrumbs, graph } from "../../src/utils/schema";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import BlogContent from "../../src/components/Blog/BlogContent";
import RelatedPosts from "../../src/components/Blog/RelatedPosts";
import { BlogPost } from "../../src/types/blog";
import { getAllPosts, getPostBySlug } from '../../src/data/blogData';

interface BlogPostPageProps {
  post: BlogPost | null;
  related: BlogPost[];
}

const RELATED_COUNT = 3;

const pickRelated = (post: BlogPost, all: BlogPost[]) =>
  all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, shared: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, RELATED_COUNT)
    .map(({ p }) => p);

export default function BlogPostPage({ post, related }: BlogPostPageProps) {
  const router = useRouter();

  // Show loading state during static generation
  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-fg-muted">Loading...</p>
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
            <h1 className="text-h2 font-semibold tracking-display text-fg mb-4">
              Post Not Found
            </h1>
            <p className="text-fg-muted mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-cta text-cta-fg font-medium rounded-xl hover:bg-cta-hover transition-colors"
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
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blogs/${post.slug}`}
        image={post.image}
        type="article"
        article={{ publishedTime: post.publishedAt, tags: post.tags, author: post.author.name }}
        jsonLd={graph(
          blogPosting(post),
          breadcrumbs([
            { name: "Blog", path: "/blogs" },
            { name: post.title, path: `/blogs/${post.slug}` },
          ])
        )}
      />

      <Layout>
        <BlogContent post={post} />
        <RelatedPosts posts={related} />
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const all = await getAllPosts();

  return {
    props: {
      post,
      related: pickRelated(post, all),
    },
  };
};
