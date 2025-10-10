import { BlogPost } from '../types/blog';

// API Response Types
interface ApiBlogPost {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  groups: string[];
  editorType: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiBlogContent {
  _id: string;
  title: string;
  content: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  groups: string[];
  editorType: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  success: boolean;
  data: {
    pages: ApiBlogPost[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  };
}

// API Base URL
const API_BASE_URL = 'https://da-pages-be.vercel.app/api';

// Convert API response to BlogPost interface
const mapApiPostToBlogPost = (apiPost: ApiBlogPost, content?: string): BlogPost => ({
  id: apiPost._id,
  title: apiPost.title,
  slug: apiPost.slug,
  excerpt: apiPost.description,
  content: content || '', // Will be fetched separately for individual posts
  image: apiPost.imageUrl,
  author: {
    name: 'DA Orbit',
    avatar: '/images/favicon.png'
  },
  publishedAt: apiPost.createdAt,
  readTime: Math.ceil(apiPost.description.length / 200), // Rough estimate
  tags: apiPost.groups,
  featured: false // Could be determined by some logic later
});

// Fetch all blog posts
export const fetchAllPosts = async (page = 1, limit = 10): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pages?page=${page}&limit=${limit}`);
    const data: ApiResponse = await response.json();

    if (!data.success) {
      throw new Error('Failed to fetch blog posts');
    }

    return data.data.pages.map(post => mapApiPostToBlogPost(post));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch individual blog post content
export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pages/${slug}`);
    const apiResponse = await response.json();
    
    if (!apiResponse.success) {
      throw new Error('Failed to fetch blog post');
    }
    
    const data = apiResponse.data;
    return mapApiPostToBlogPost(data, data.content);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Legacy functions for backward compatibility (now using API)
export const getAllPosts = async (): Promise<BlogPost[]> => {
  return await fetchAllPosts();
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  return await fetchPostBySlug(slug);
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetchAllPosts();
  // For now, return first 2 posts as featured, or implement logic based on API
  return posts.slice(0, 2);
};

export const getPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  const posts = await fetchAllPosts();
  return posts.filter(post =>
    post.tags.some(postTag =>
      postTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};