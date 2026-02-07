import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { siteSettingsApi } from '@/lib/admin-api';
import type { SiteSetting } from '@/types/database';

export type { SiteSetting };

export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: () => siteSettingsApi.getAll(),
  });
}

export function useSiteSetting(key: string) {
  return useQuery({
    queryKey: ['site-settings', key],
    queryFn: () => siteSettingsApi.get(key),
  });
}

export function useUpdateSiteSetting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ key, value }: { key: string; value: string }) =>
      siteSettingsApi.update(key, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
    },
  });
}
