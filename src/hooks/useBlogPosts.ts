import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blogPostsApi } from '@/lib/admin-api';
import type { BlogPost } from '@/types/database';

export type { BlogPost };

export function useBlogPosts(includeAllStatuses = false) {
  return useQuery({
    queryKey: ['blog-posts', includeAllStatuses],
    queryFn: () => blogPostsApi.getAll(includeAllStatuses),
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => blogPostsApi.getBySlug(slug),
    enabled: !!slug,
  });
}

export function useCreateBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'created_by'>) =>
      blogPostsApi.create(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
}

export function useUpdateBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...updates }: Partial<BlogPost> & { id: string }) =>
      blogPostsApi.update(id, updates),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      if (data?.slug) {
        queryClient.invalidateQueries({ queryKey: ['blog-post', data.slug] });
      }
    },
  });
}

export function useDeleteBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => blogPostsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
}
