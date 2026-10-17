import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { clientWork, orbitAi, products, site } from "../src/data/site";
import { faqs } from "../src/data/faqs";
import { fetchAllPosts } from "../src/data/blogData";
import { absoluteUrl } from "../src/utils/schema";
import type { BlogPost } from "../src/types/blog";

type ChangeFreq = "weekly" | "monthly" | "yearly";

interface Route {
  path: string;
  title: string;
  description: string;
  changefreq: ChangeFreq;
  priority: number;
}

const PUBLIC_DIR = join(process.cwd(), "public");

const routes: Route[] = [
  {
    path: "/",
    title: "Home",
    description: "Who we are, what we build, our process, engagement models and how to start a project.",
    changefreq: "weekly",
    priority: 1,
  },
  {
    path: "/services",
    title: "Services",
    description: "Web development, mobile apps, cloud & DevOps, AI integration, UI/UX design and consulting.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blogs",
    title: "Blog",
    description: "Engineering and product articles from the DA Orbit team.",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About",
    description: `About ${site.name}, a software development company in ${site.location}.`,
    changefreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "How personal information is collected, used and protected.",
    changefreq: "yearly",
    priority: 0.3,
  },
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const isoDate = (value: string | Date) => new Date(value).toISOString();

const sitemapEntry = (loc: string, lastmod: string, changefreq: ChangeFreq, priority: number, image?: string) =>
  [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    image ? `    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>` : "",
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");

const buildSitemap = (posts: BlogPost[], builtAt: string) => {
  const latestPost = posts[0]?.updatedAt;
  const staticEntries = routes.map((r) =>
    sitemapEntry(
      absoluteUrl(r.path),
      r.path === "/blogs" && latestPost ? isoDate(latestPost) : builtAt,
      r.changefreq,
      r.priority,
      r.path === "/" ? `${site.url}${site.ogImage}` : undefined
    )
  );
  const postEntries = posts.map((p) =>
    sitemapEntry(absoluteUrl(`/blogs/${p.slug}`), isoDate(p.updatedAt || p.publishedAt), "monthly", 0.7, p.image)
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...staticEntries,
    ...postEntries,
    "</urlset>",
    "",
  ].join("\n");
};

const buildRobots = () =>
  [
    "User-agent: *",
    "Allow: /",
    "Disallow: /404",
    "Disallow: /_next/",
    "",
    `Host: ${site.url.replace(/^https?:\/\//, "")}`,
    `Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");

const link = (title: string, url: string, description: string) => `- [${title}](${url}): ${description}`;

const buildLlms = (posts: BlogPost[]) => {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is a software development company based in ${site.location}. A small senior team takes products ` +
      "from first call to launch: web platforms on React, Next.js and Node, cross-platform mobile apps in React Native, " +
      "cloud infrastructure on AWS, Azure and Google Cloud, and AI features such as assistants and retrieval. " +
      "Work is quoted as a fixed scope with a written estimate, demoed weekly, and supported after launch. " +
      "Clients own all source code and infrastructure at handover.",
    "",
    `Contact: ${site.email}`,
    "",
    "## Pages",
    "",
    ...routes.map((r) => link(r.title, absoluteUrl(r.path), r.description)),
    link("Contact form", `${absoluteUrl("/")}#contact`, "Start a project or request a free consultation and estimate"),
    "",
    "## Client work",
    "",
    link(clientWork.name, clientWork.href, clientWork.summary),
    "",
    "## Products built and run by DA Orbit",
    "",
    ...products.map((p) => link(p.name, p.href, p.tagline)),
    link(orbitAi.name, orbitAi.extension, "An AI assistant for Chrome's side panel, built by DA Orbit"),
    "",
  ];

  if (posts.length) {
    lines.push("## Blog", "", ...posts.map((p) => link(p.title, absoluteUrl(`/blogs/${p.slug}`), p.excerpt)), "");
  }

  lines.push("## FAQ", "", ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]));

  lines.push(
    "## Elsewhere",
    "",
    ...site.socials.map((s) => link(s.label, s.href, `${site.name} on ${s.label}`)),
    link("Google reviews", site.googleReviews, `Client reviews of ${site.name} on Google`),
    ""
  );

  return lines.join("\n");
};

const main = async () => {
  const builtAt = new Date().toISOString();
  const posts = (await fetchAllPosts()).filter((p) => p.slug);

  if (!posts.length) console.warn("[seo] No blog posts returned from the CMS — sitemap and llms.txt list pages only.");

  writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), buildSitemap(posts, builtAt));
  writeFileSync(join(PUBLIC_DIR, "robots.txt"), buildRobots());
  writeFileSync(join(PUBLIC_DIR, "llms.txt"), buildLlms(posts));

  console.log(`[seo] Wrote sitemap.xml (${routes.length + posts.length} URLs), robots.txt and llms.txt`);
};

main().catch((error) => {
  console.error("[seo] Failed to generate SEO files:", error);
  process.exit(1);
});
