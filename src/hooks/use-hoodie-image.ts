
import { useState, useEffect } from 'react';
import { HoodieView, ProductType, ColorOption } from '@/components/design-lab/types';
import images from '@/assets/images';

export function useHoodieImage(productType: ProductType, color: ColorOption, view: HoodieView) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        let imagePath: string;
        
        // Access the appropriate image based on product type, color and view
        if (productType === 'hoodie') {
          imagePath = view === 'front' 
            ? `Hoodiefront${color}` 
            : `Hoodieback${color}`;
        } else if (productType === 'varsityJacket') {
          // For now, just use the Varsityjacket image 
          imagePath = 'Varsityjacket';
        } else if (productType === 'sweater') {
          // For now, just use the Sweater image
          imagePath = 'Sweater';
        } else {
          // For t-shirt
          imagePath = 'Tshirt';
        }
        
        // Get the image URL from the images object
        if (images[imagePath]) {
          setImageUrl(images[imagePath]);
        } else {
          console.error(`Image not found: ${imagePath}`);
          throw new Error(`Image not found for ${productType} ${color} ${view}`);
        }
      } catch (err) {
        console.error('Error loading product image:', err);
        setError(err instanceof Error ? err : new Error('Failed to load image'));
        // Use a fallback image
        setImageUrl('/placeholder.svg');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [productType, color, view]);

  return { imageUrl, isLoading, error };
}
