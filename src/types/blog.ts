export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}