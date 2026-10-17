import { NextPage, GetStaticProps } from "next";
import Seo from "../src/components/Seo";
import { faqs } from "../src/data/faqs";
import { faqPage, graph, organization, website } from "../src/utils/schema";
import Layout from "../src/components/Layout";
import HeroSection from "../src/components/HeroSection";
import StackSection from "../src/components/StackSection";
import ManifestoSection from "../src/components/ManifestoSection";
import ClientWorkSection from "../src/components/ClientWorkSection";
import ShowcaseSection from "../src/components/ShowcaseSection";
import OrbitAiSection from "../src/components/OrbitAiSection";
import FeaturesSection from "../src/components/FeaturesSection";
import ProcessSection from "../src/components/ProcessSection";
import PricingSection from "../src/components/PricingSection";
import BlogCarousel from "../src/components/BlogCarousel";
import FaqSection from "../src/components/FaqSection";
import ContactSection from "../src/components/ContactSection";
import { BlogPost } from "../src/types/blog";
import { getAllPosts } from "../src/data/blogData";

interface HomeProps {
  posts: BlogPost[];
}

const jsonLd = graph(organization(), website(), faqPage(faqs));

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Seo path="/" jsonLd={jsonLd} />

      <Layout>
        <HeroSection />
        <StackSection />
        <FeaturesSection />
        <ClientWorkSection />
        <ManifestoSection />
        <ProcessSection />
        <ShowcaseSection />
        <OrbitAiSection />
        <PricingSection />
        <BlogCarousel posts={posts} />
        <FaqSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
