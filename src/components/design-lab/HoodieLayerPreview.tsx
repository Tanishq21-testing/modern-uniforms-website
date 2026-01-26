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

// Supabase storage bucket: uniformconnect, folder: Design Lab
const STORAGE_BASE_URL = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Design%20Lab';

// Explicit mapping table for exact file names (case-sensitive)
const LAYER_FILE_MAP: Record<string, Record<LayerColor, string>> = {
  body: {
    black: 'Body-Hoodie-Black.png',
    lightgrey: 'Body-Hoodie-lightgrey.png',
  },
  sleeves: {
    black: 'Sleeves-Hoodie-black.png',
    lightgrey: 'Sleeves-Hoodie-lightgrey.png',
  },
  hood: {
    black: 'Hood-Hoodie-black.png',
    lightgrey: 'Hood-Hoodie-lightgrey.png',
  },
};

// Get the exact URL for a layer image
const getLayerImageUrl = (part: 'body' | 'sleeves' | 'hood', color: LayerColor): string => {
  const fileName = LAYER_FILE_MAP[part][color];
  const url = `${STORAGE_BASE_URL}/${fileName}`;
  console.log(`[HoodieLayerPreview] ${part} ${color} URL:`, url);
  return url;
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
