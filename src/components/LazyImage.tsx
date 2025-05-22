
import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  placeholderColor?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#f3f4f6',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Preload image if priority is true
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [priority, src]);

  useEffect(() => {
    if (!imgRef.current || priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    observer.observe(imgRef.current);
    
    return () => {
      if (imgRef.current) observer.disconnect();
    };
  }, [priority]);

  // Fallback handler for image load errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', src);
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite error loop
    
    // Create a fallback with the first letter of alt text
    if (target.parentElement) {
      target.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'flex items-center justify-center w-full h-full bg-gray-200 text-gray-600';
      fallback.style.minHeight = '80px';
      fallback.innerHTML = `<span class="text-2xl font-bold">${alt.charAt(0)}</span>`;
      target.parentElement.appendChild(fallback);
    }
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
        aspectRatio: !height ? '16/9' : undefined
      }}
    >
      {(isInView || priority) && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          loading={priority ? 'eager' : 'lazy'}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
        />
      )}
    </div>
  );
};

export default LazyImage;
