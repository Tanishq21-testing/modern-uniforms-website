import { useEffect, useRef, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { LayerColors } from './tools/HoodieLayerColorPicker';

interface HoodieCanvasPreviewProps {
  partColors: LayerColors;
}

// Supabase storage bucket: uniformconnect, folder: Design Lab
const STORAGE_BASE_URL = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Design%20Lab';

// Base images (black versions used as neutral base for tinting)
const BASE_IMAGES = {
  body: `${STORAGE_BASE_URL}/Body-Hoodie-Black.png`,
  sleeves: `${STORAGE_BASE_URL}/Sleeves-Hoodie-black.png`,
  hood: `${STORAGE_BASE_URL}/Hood-Hoodie-black.png`,
};

// Canvas dimensions
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;

// Image cache to avoid reloading
const imageCache: Record<string, HTMLImageElement> = {};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  if (imageCache[src]) {
    console.log(`[HoodieCanvasPreview] Using cached image: ${src}`);
    return Promise.resolve(imageCache[src]);
  }

  return new Promise((resolve, reject) => {
    console.log(`[HoodieCanvasPreview] Loading image: ${src}`);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      console.log(`[HoodieCanvasPreview] Image loaded successfully: ${src}`);
      imageCache[src] = img;
      resolve(img);
    };
    img.onerror = (e) => {
      console.error(`[HoodieCanvasPreview] Failed to load image: ${src}`, e);
      reject(new Error(`Failed to load ${src}`));
    };
    img.src = src;
  });
};

// Apply color tint to a canvas using multiply blend mode
const applyColorTint = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  color: string,
  width: number,
  height: number
) => {
  // Clear the canvas
  ctx.clearRect(0, 0, width, height);
  
  // Draw the original image
  ctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(image, 0, 0, width, height);
  
  // Apply multiply blend with the selected color
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  // Use destination-in to preserve original transparency
  ctx.globalCompositeOperation = 'destination-in';
  ctx.drawImage(image, 0, 0, width, height);
  
  // Reset composite operation
  ctx.globalCompositeOperation = 'source-over';
};

const HoodieCanvasPreview = ({ partColors }: HoodieCanvasPreviewProps) => {
  const bodyCanvasRef = useRef<HTMLCanvasElement>(null);
  const sleevesCanvasRef = useRef<HTMLCanvasElement>(null);
  const hoodCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<{
    body?: HTMLImageElement;
    sleeves?: HTMLImageElement;
    hood?: HTMLImageElement;
  }>({});

  // Log current colors for debugging
  useEffect(() => {
    console.log('[HoodieCanvasPreview] Current part colors:', {
      body: partColors.body,
      sleeves: partColors.sleeves,
      hood: partColors.hood,
    });
  }, [partColors]);

  // Load all base images on mount
  useEffect(() => {
    const loadAllImages = async () => {
      setIsLoading(true);
      console.log('[HoodieCanvasPreview] Starting to load base images...');
      console.log('[HoodieCanvasPreview] URLs:', BASE_IMAGES);
      
      try {
        const [bodyImg, sleevesImg, hoodImg] = await Promise.all([
          loadImage(BASE_IMAGES.body),
          loadImage(BASE_IMAGES.sleeves),
          loadImage(BASE_IMAGES.hood),
        ]);
        
        setLoadedImages({
          body: bodyImg,
          sleeves: sleevesImg,
          hood: hoodImg,
        });
        
        console.log('[HoodieCanvasPreview] All base images loaded successfully');
        setIsLoading(false);
      } catch (error) {
        console.error('[HoodieCanvasPreview] Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, []);

  // Render body layer
  useEffect(() => {
    const canvas = bodyCanvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = loadedImages.body;
    
    if (canvas && ctx && image) {
      console.log(`[HoodieCanvasPreview] Rendering body with color: ${partColors.body}`);
      applyColorTint(ctx, image, partColors.body, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [loadedImages.body, partColors.body]);

  // Render sleeves layer
  useEffect(() => {
    const canvas = sleevesCanvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = loadedImages.sleeves;
    
    if (canvas && ctx && image) {
      console.log(`[HoodieCanvasPreview] Rendering sleeves with color: ${partColors.sleeves}`);
      applyColorTint(ctx, image, partColors.sleeves, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [loadedImages.sleeves, partColors.sleeves]);

  // Render hood layer
  useEffect(() => {
    const canvas = hoodCanvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = loadedImages.hood;
    
    if (canvas && ctx && image) {
      console.log(`[HoodieCanvasPreview] Rendering hood with color: ${partColors.hood}`);
      applyColorTint(ctx, image, partColors.hood, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [loadedImages.hood, partColors.hood]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
          <Skeleton className="h-[350px] w-[250px] rounded-md" />
        </div>
      )}
      
      {/* Canvas container - all canvases stacked with absolute positioning */}
      <div className="relative" style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>
        {/* Body canvas (bottom layer) */}
        <canvas
          ref={bodyCanvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="absolute inset-0"
          style={{ zIndex: 1 }}
        />
        
        {/* Sleeves canvas (middle layer) */}
        <canvas
          ref={sleevesCanvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        />
        
        {/* Hood canvas (top layer) */}
        <canvas
          ref={hoodCanvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="absolute inset-0"
          style={{ zIndex: 3 }}
        />
      </div>
    </div>
  );
};

export default HoodieCanvasPreview;
