
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { HoodieView } from '@/components/design-lab/types';

export function useHoodieImage(color: string, view: HoodieView) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Construct the path to the image in Supabase storage
        const imagePath = `hoodies/${color}/${view}.png`;
        
        // Get the public URL for the image
        const { data, error } = await supabase
          .storage
          .from('design-lab')
          .getPublicUrl(imagePath);
        
        if (error) throw error;
        
        // Set the image URL
        setImageUrl(data.publicUrl);
      } catch (err) {
        console.error('Error loading hoodie image:', err);
        setError(err instanceof Error ? err : new Error('Failed to load image'));
        // Use a fallback image if available
        setImageUrl('/placeholder.svg');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [color, view]);

  return { imageUrl, isLoading, error };
}
