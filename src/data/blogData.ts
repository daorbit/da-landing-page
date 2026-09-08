import { BlogPost } from '../types/blog';

/**
 * CMS client, matching the shape the Quantalog landing page uses:
 * `/api/workspaces/<id>/pagebyslug` for lists and
 * `/api/workspaces/<id>/page-details/<slug>` for one page.
 */
const API_BASE =
  process.env.NEXT_PUBLIC_CMS_API_URL ?? 'https://cms.daorbit.in/api';

const WORKSPACE_ID =
  process.env.NEXT_PUBLIC_CMS_WORKSPACE_ID ?? '6a9cfdd439090e083196fcac';

const workspace = () => `${API_BASE}/workspaces/${WORKSPACE_ID}`;

/** A page as the CMS returns it. Fields are present only when requested. */
export type CmsPage = {
  id: string;
  title: string;
  slug: string;
  description: string;
  group: string;
  tags: string[];
  heroImage?: { url: string; alt: string };
  thumbnailImage?: { url: string; alt: string };
  content?: string;
  seo?: {
    title: string;
    description: string;
    ogImage: string;
    noIndex: boolean;
  };
  author?: { name: string; role: string };
  readingMinutes?: number;
  status?: string;
  publishedAt: string | null;
  updatedAt: string;
};

type ListResponse = {
  items: CmsPage[];
  total: number;
  page: number;
  perPage: number;
};

/** Fields the list views render. Requesting them keeps post bodies off the wire. */
const LIST_FIELDS: (keyof CmsPage)[] = [
  'id',
  'title',
  'slug',
  'description',
  'group',
  'tags',
  'heroImage',
  'thumbnailImage',
  'author',
  'readingMinutes',
  'publishedAt',
  'updatedAt',
];

async function readJson<T>(res: Response, what: string): Promise<T> {
  const type = res.headers.get('content-type') ?? '';
  if (!type.includes('json')) {
    throw new Error(
      `CMS ${what}: expected JSON from ${res.url} but got "${type}". ` +
        'Check NEXT_PUBLIC_CMS_API_URL points at the API, not the CMS web app.'
    );
  }
  return (await res.json()) as T;
}

const mapCmsPageToBlogPost = (page: CmsPage): BlogPost => ({
  id: page.id,
  title: page.title,
  slug: page.slug,
  excerpt: page.description ?? '',
  content: page.content ?? '',
  image: page.heroImage?.url || page.thumbnailImage?.url,
  author: {
    name: page.author?.name || 'DA Orbit',
    avatar: '/favicon.png',
  },
  publishedAt: page.publishedAt ?? page.updatedAt,
  readTime:
    page.readingMinutes ??
    Math.max(1, Math.ceil((page.description?.length ?? 0) / 200)),
  tags: page.tags ?? [],
  featured: false,
});

/** Lists published pages, newest first. */
export const fetchAllPosts = async (
  options: { group?: string; tag?: string; perPage?: number } = {}
): Promise<BlogPost[]> => {
  const query = new URLSearchParams();
  if (options.group) query.set('group', options.group);
  if (options.tag) query.set('tag', options.tag);
  query.set('fields', LIST_FIELDS.join(','));
  query.set('perPage', String(options.perPage ?? 100));

  try {
    const res = await fetch(`${workspace()}/pagebyslug?${query}`);
    if (!res.ok) {
      throw new Error(`CMS list failed: ${res.status} ${res.statusText}`);
    }

    const data = await readJson<ListResponse>(res, 'list');
    return data.items
      .map(mapCmsPageToBlogPost)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

/** One published page by slug, or null when there is no such page. */
export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const res = await fetch(
      `${workspace()}/page-details/${encodeURIComponent(slug)}`
    );

    if (res.status === 404) return null;
    if (!res.ok) {
      throw new Error(
        `CMS page "${slug}" failed: ${res.status} ${res.statusText}`
      );
    }

    const page = await readJson<CmsPage>(res, `page "${slug}"`);
    return mapCmsPageToBlogPost(page);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getAllPosts = async (): Promise<BlogPost[]> => fetchAllPosts();

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> =>
  fetchPostBySlug(slug);

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetchAllPosts();
  return posts.slice(0, 2);
};

export const getPostsByTag = async (tag: string): Promise<BlogPost[]> =>
  fetchAllPosts({ tag });
