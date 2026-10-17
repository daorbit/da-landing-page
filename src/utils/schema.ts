import { site } from "../data/site";
import type { Faq } from "../data/faqs";
import type { BlogPost } from "../types/blog";

export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;

export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) return path;
  if (path === "/" || path === "") return `${site.url}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean.endsWith("/") ? clean : `${clean}/`}`;
};

export const organization = () => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: site.name,
  url: absoluteUrl("/"),
  logo: { "@type": "ImageObject", url: `${site.url}/favicon.png` },
  image: `${site.url}${site.ogImage}`,
  description: site.description,
  email: site.email,
  foundingDate: "2025",
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  contactPoint: { "@type": "ContactPoint", email: site.email, contactType: "sales", availableLanguage: ["English", "Hindi"] },
  sameAs: site.socials.map((s) => s.href).concat(site.googleReviews),
  knowsAbout: ["Web development", "Mobile app development", "Cloud infrastructure", "AI integration", "SEO"],
});

export const website = () => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: absoluteUrl("/"),
  name: site.name,
  description: site.description,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqPage = (items: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const blogPosting = (post: BlogPost) => ({
  "@type": "BlogPosting",
  "@id": `${absoluteUrl(`/blogs/${post.slug}`)}#article`,
  headline: post.title,
  description: post.excerpt,
  image: post.image || `${site.url}${site.ogImage}`,
  datePublished: new Date(post.publishedAt).toISOString(),
  dateModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
  author: { "@type": "Organization", name: post.author.name || site.name, url: absoluteUrl("/") },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`),
  keywords: post.tags.join(", "),
  timeRequired: `PT${post.readTime}M`,
  inLanguage: "en",
});

export const blog = (posts: BlogPost[]) => ({
  "@type": "Blog",
  "@id": `${absoluteUrl("/blogs")}#blog`,
  name: `${site.name} Blog`,
  url: absoluteUrl("/blogs"),
  publisher: { "@id": ORG_ID },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: absoluteUrl(`/blogs/${p.slug}`),
    datePublished: new Date(p.publishedAt).toISOString(),
  })),
});

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
