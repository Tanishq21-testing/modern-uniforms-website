
import DynamicArtworkSelector from './DynamicArtworkSelector';

interface ArtworkSelectorProps {
  addImageElement: (imageUrl: string) => void;
}

const ArtworkSelector = ({ addImageElement }: ArtworkSelectorProps) => {
  return (
    <div className="space-y-4">
      <DynamicArtworkSelector addImageElement={addImageElement} />
      
      <div className="text-center text-gray-500 text-sm border-t pt-4">
        <p>Don't see what you're looking for?</p>
        <p className="mt-1">Upload your own artwork using the upload section above.</p>
        <p className="mt-1">Supported formats: PNG, JPG, SVG</p>
      </div>
    </div>
  );
};

export default ArtworkSelector;
