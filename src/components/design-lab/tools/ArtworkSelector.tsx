
import { useState } from 'react';
import { images } from '@/assets/images';

interface ArtworkSelectorProps {
  addImageElement: (imageUrl: string) => void;
}

const ArtworkSelector = ({ addImageElement }: ArtworkSelectorProps) => {
  // Sample artwork designs
  const artworkDesigns = [
    { id: 1, src: images.logo, name: "Company Logo" },
    { id: 2, src: images.clientLogos.hilton, name: "Hilton Logo" },
    { id: 3, src: images.clientLogos.radissonBlu, name: "Radisson Logo" },
    { id: 4, src: images.clientLogos.dubaiGolf, name: "Dubai Golf" }
  ];
  
  return (
    <div className="grid grid-cols-2 gap-2">
      {artworkDesigns.map(design => (
        <div 
          key={design.id}
          className="border rounded-md p-2 hover:border-brand-blue cursor-pointer transition-all"
          onClick={() => addImageElement(design.src)}
        >
          <div className="aspect-square bg-white rounded overflow-hidden flex items-center justify-center">
            <img 
              src={design.src} 
              alt={design.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="text-xs text-center mt-1">{design.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtworkSelector;
