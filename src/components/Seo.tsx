import React from "react";
import Head from "next/head";
import { site } from "../data/site";
import { absoluteUrl } from "../utils/schema";

interface SeoProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: object;
  article?: { publishedTime: string; tags: string[]; author: string };
}

const Seo: React.FC<SeoProps> = ({
  title,
  description = site.description,
  path,
  image = site.ogImage,
  type = "website",
  noIndex,
  jsonLd,
  article,
}) => {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image).replace(/\/$/, "");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {article && (
        <>
          <meta property="article:published_time" content={new Date(article.publishedTime).toISOString()} />
          <meta property="article:author" content={article.author} />
          {article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </Head>
  );
};

export default Seo;
