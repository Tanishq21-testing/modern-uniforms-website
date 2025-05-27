
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface DesignCategory {
  id: string;
  name: string;
  display_order: number;
  created_at: string;
}

export interface DesignFile {
  id: string;
  category_id: string;
  name: string;
  file_path: string;
  thumbnail_url: string | null;
  storage_url: string;
  display_order: number;
  created_at: string;
}

export const useDesignCategories = () => {
  return useQuery({
    queryKey: ['design-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('design_categories')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as DesignCategory[];
    },
  });
};

export const useDesignFiles = (categoryId: string) => {
  return useQuery({
    queryKey: ['design-files', categoryId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('design_files')
        .select('*')
        .eq('category_id', categoryId)
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as DesignFile[];
    },
    enabled: !!categoryId,
  });
};
