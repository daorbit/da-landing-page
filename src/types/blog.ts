export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string; // Optional blog post cover image
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number; // in minutes
  tags: string[];
  featured: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}