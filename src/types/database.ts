// Extended database types for admin panel
// These types are used until the database migration is complete

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  author: string;
  read_time: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
  published_at: string | null;
  created_by: string | null;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  description: string | null;
  updated_at: string;
  updated_by: string | null;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'user';
  created_at: string;
}
