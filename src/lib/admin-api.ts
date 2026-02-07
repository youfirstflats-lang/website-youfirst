import { createClient } from '@supabase/supabase-js';
import type { BlogPost, SiteSetting, UserRole } from '@/types/database';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Mock data integration
import { blogPosts as initialBlogPosts } from './blog-data';

// Helper to check if Supabase is configured
const isSupabaseConfigured = !!(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

// Untyped client for new tables that aren't in the generated types yet
export const adminClient = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  })
  : null;

// LocalStorage Keys
const STORAGE_KEYS = {
  BLOG_POSTS: 'admin_blog_posts',
  SETTINGS: 'admin_site_settings',
  USERS: 'admin_users'
};

// Helper to get local posts
const getLocalPosts = (): BlogPost[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.BLOG_POSTS);
  if (!stored) {
    // Seed with initial data if empty, mapping the static structure to DB structure if needed
    // The static data has 'id' as 'slug' sometimes, let's normalize
    const seeded = initialBlogPosts.map(p => ({
      ...p,
      id: p.id || crypto.randomUUID(), // Ensure ID exists
      slug: p.id, // In static data, ID was used as slug
      status: 'published',
      created_at: new Date(p.date).toISOString(),
      updated_at: new Date().toISOString(),
      created_by: 'system',
      image_url: p.image,
      read_time: p.readTime,
      published_at: new Date(p.date).toISOString()
    }));
    localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(seeded));
    return seeded as unknown as BlogPost[];
  }
  return JSON.parse(stored);
};

const saveLocalPosts = (posts: BlogPost[]) => {
  localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(posts));
};


// Blog Posts API
export const blogPostsApi = {
  async getAll(includeAll = false): Promise<BlogPost[]> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      return includeAll ? posts : posts.filter(p => p.status === 'published');
    }

    let query = adminClient!
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!includeAll) {
      query = query.eq('status', 'published');
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  },

  async getBySlug(slug: string): Promise<BlogPost | null> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      return posts.find(p => p.slug === slug) || null;
    }

    const { data, error } = await adminClient!
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<BlogPost | null> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      return posts.find(p => p.id === id) || null;
    }

    const { data, error } = await adminClient!
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async create(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'created_by'>): Promise<BlogPost> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      const newPost = {
        ...post,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        created_by: 'local-admin',
        slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      } as BlogPost;

      posts.unshift(newPost);
      saveLocalPosts(posts);
      return newPost;
    }

    const { data, error } = await adminClient!
      .from('blog_posts')
      .insert([post])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      const index = posts.findIndex(p => p.id === id);
      if (index === -1) throw new Error('Post not found');

      const updatedPost = {
        ...posts[index],
        ...updates,
        updated_at: new Date().toISOString()
      };

      posts[index] = updatedPost;
      saveLocalPosts(posts);
      return updatedPost;
    }

    const { data, error } = await adminClient!
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    if (!isSupabaseConfigured) {
      const posts = getLocalPosts();
      const filtered = posts.filter(p => p.id !== id);
      saveLocalPosts(filtered);
      return;
    }

    const { error } = await adminClient!
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

// Site Settings API
export const siteSettingsApi = {
  async getAll(): Promise<SiteSetting[]> {
    const { data, error } = await adminClient
      .from('site_settings')
      .select('*')
      .order('key');

    if (error) throw error;
    return data || [];
  },

  async get(key: string): Promise<string | null> {
    const { data, error } = await adminClient
      .from('site_settings')
      .select('value')
      .eq('key', key)
      .maybeSingle();

    if (error) throw error;
    return data?.value ?? null;
  },

  async update(key: string, value: string): Promise<void> {
    const { error } = await adminClient
      .from('site_settings')
      .update({ value })
      .eq('key', key);

    if (error) throw error;
  },
};

// User Roles API
// User Roles API
export const userRolesApi = {
  async checkAdminRole(userId: string): Promise<boolean> {
    if (!isSupabaseConfigured) {
      return true; // Always admin in local mode
    }

    const { data, error } = await adminClient!
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();

    if (error) {
      console.error('Error checking admin role:', error);
      return false;
    }

    return !!data;
  },

  async getUserRoles(userId: string): Promise<UserRole[]> {
    if (!isSupabaseConfigured) {
      return [{ id: 'mock-role-id', user_id: userId, role: 'admin', created_at: new Date().toISOString() }];
    }

    const { data, error } = await adminClient!
      .from('user_roles')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  },
};
