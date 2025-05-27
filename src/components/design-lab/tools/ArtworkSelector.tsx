
import { useState } from 'react';

interface ArtworkSelectorProps {
  addImageElement: (imageUrl: string) => void;
}

const ArtworkSelector = ({ addImageElement }: ArtworkSelectorProps) => {
  return (
    <div className="text-center text-gray-500 text-sm">
      <p>Upload your own artwork using the upload section above.</p>
      <p className="mt-2">Supported formats: PNG, JPG, SVG</p>
    </div>
  );
};

export default ArtworkSelector;
