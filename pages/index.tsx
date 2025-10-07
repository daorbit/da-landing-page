import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../src/components/Layout'
import HeroSection from '../src/components/HeroSection'
import FeaturesSection from '../src/components/FeaturesSection'
import SnappixySection from '../src/components/SnappixySection'
import TheTechodioSection from '../src/components/TheTechodioSection'
import AboutSection from '../src/components/AboutSection'
import BlogCarousel from '../src/components/BlogCarousel'
import TestimonialsSection from '../src/components/TestimonialsSection'
import ContactSection from '../src/components/ContactSection'
import { BlogPost } from '../src/types/blog'
import { getAllPosts } from '../src/data/blogData'

interface HomeProps {
  posts: BlogPost[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const siteUrl = 'https://www.daorbit.in'
  const title = 'DA Orbit - Innovative Software Solutions & Digital Transformation'
  const description = 'Revolutionizing software development with cutting-edge solutions. Custom web development, mobile apps, cloud solutions, and digital transformation services. We build the future, one orbit at a time.'
  const image = `${siteUrl}/images/og-image.png`

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="software development, web development, mobile apps, cloud solutions, digital transformation, custom software, technology consulting, Delhi, India" />
        <meta name="author" content="Da Orbit" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Da Orbit - Innovative Software Solutions" />
        <meta property="og:site_name" content="Da Orbit" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:image:alt" content="Da Orbit - Innovative Software Solutions" />

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="application-name" content="Da Orbit" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Da Orbit",
              "image": `${siteUrl}/favicon.png`,
              "description": description,
              "url": siteUrl,
              "telephone": "", // Add phone number if available
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.7041,
                "longitude": 77.1025
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://github.com/daorbit",
                "https://linkedin.com/company/daorbit"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Development",
                      "description": "Tailored web applications built with modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Native and cross-platform mobile applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Solutions",
                      "description": "Scalable cloud infrastructure and migration services"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Breadcrumbs Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              }]
            })
          }}
        />

        {/* Analytics and Tracking Scripts */}
        {/* Google Analytics - Replace with your GA ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: '${title}',
                page_location: window.location.href
              });
            `
          }}
        />

        {/* Microsoft Clarity - Replace with your Clarity ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `
          }}
        />
      </Head>

      <Layout>
        <HeroSection />
        <FeaturesSection />
        <SnappixySection />
        <TheTechodioSection />
        <AboutSection />
        <BlogCarousel posts={posts} />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
};

export default Home