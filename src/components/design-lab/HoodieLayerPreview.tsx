import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { LayerColor } from './tools/HoodieLayerColorPicker';

interface HoodieLayerPreviewProps {
  partColors: {
    body: LayerColor;
    sleeves: LayerColor;
    hood: LayerColor;
  };
}

// Supabase storage bucket base URL for Design Lab assets - using "design lab" folder
const STORAGE_BASE_URL = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/Design%20Lab%20Assets/design%20lab';

// Map layer colors to file names
const getLayerImageUrl = (part: 'body' | 'sleeves' | 'hood', color: LayerColor): string => {
  // File naming convention: body-hoodie-black, sleeves-hoodie-lightgrey, etc.
  const fileName = `${part}-hoodie-${color}`;
  return `${STORAGE_BASE_URL}/${fileName}.png`;
};

const HoodieLayerPreview = ({ partColors }: HoodieLayerPreviewProps) => {
  const [loadingStates, setLoadingStates] = useState({
    body: true,
    sleeves: true,
    hood: true,
  });

  const handleImageLoad = (part: 'body' | 'sleeves' | 'hood') => {
    setLoadingStates(prev => ({ ...prev, [part]: false }));
  };

  const handleImageError = (part: 'body' | 'sleeves' | 'hood') => {
    console.error(`Failed to load ${part} layer image`);
    setLoadingStates(prev => ({ ...prev, [part]: false }));
  };

  const isLoading = loadingStates.body || loadingStates.sleeves || loadingStates.hood;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
          <Skeleton className="h-[350px] w-[250px] rounded-md" />
        </div>
      )}
      
      {/* Layer container - all layers stacked with absolute positioning */}
      <div className="relative" style={{ width: '400px', height: '500px' }}>
        {/* Body layer (bottom) */}
        <img
          src={getLayerImageUrl('body', partColors.body)}
          alt="Hoodie body"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
          style={{ 
            zIndex: 1,
            opacity: loadingStates.body ? 0 : 1 
          }}
          onLoad={() => handleImageLoad('body')}
          onError={() => handleImageError('body')}
        />
        
        {/* Sleeves layer (middle) */}
        <img
          src={getLayerImageUrl('sleeves', partColors.sleeves)}
          alt="Hoodie sleeves"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
          style={{ 
            zIndex: 2,
            opacity: loadingStates.sleeves ? 0 : 1 
          }}
          onLoad={() => handleImageLoad('sleeves')}
          onError={() => handleImageError('sleeves')}
        />
        
        {/* Hood layer (top) */}
        <img
          src={getLayerImageUrl('hood', partColors.hood)}
          alt="Hoodie hood"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
          style={{ 
            zIndex: 3,
            opacity: loadingStates.hood ? 0 : 1 
          }}
          onLoad={() => handleImageLoad('hood')}
          onError={() => handleImageError('hood')}
        />
      </div>
    </div>
  );
};

export default HoodieLayerPreview;
