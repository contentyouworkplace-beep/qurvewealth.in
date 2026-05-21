export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;  // 150-160 chars, include keyword + CTA
  date: string;             // ISO format "2025-MM-DD"
  category: string;
  readTime: number;         // minutes
  tags: string[];
  excerpt: string;          // 2-3 sentence summary
  content: string;          // HTML content, 800-1200 words
};
