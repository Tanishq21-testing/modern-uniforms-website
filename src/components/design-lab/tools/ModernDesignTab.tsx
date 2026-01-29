import { useState } from 'react';
import PlacementDropdown from './PlacementDropdown';
import ContentActionCards, { ContentType } from './ContentActionCards';
import ContextualTextEditor from './ContextualTextEditor';
import ContextualArtEditor from './ContextualArtEditor';
import { DesignPlacement, DesignElement, Font, HoodieView } from '../types';

interface ModernDesignTabProps {
  placement: DesignPlacement;
  setPlacement: (placement: DesignPlacement) => void;
  addTextElement: (text: string, font: Font, color: string) => void;
  addImageElement: (imageUrl: string) => void;
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  removeElement: (id: string) => void;
  currentView?: HoodieView;
  setCurrentView?: (view: HoodieView) => void;
}

const ModernDesignTab = ({
  placement,
  setPlacement,
  addTextElement,
  addImageElement,
  selectedElement,
  updateElement,
  removeElement,
  currentView,
  setCurrentView
}: ModernDesignTabProps) => {
  const [selectedContent, setSelectedContent] = useState<ContentType>(null);
  
  // Auto-open editor if an element is selected
  const effectiveContent: ContentType = 
    selectedElement?.type === 'text' ? 'text' :
    selectedElement?.type === 'image' ? 'art' :
    selectedContent;
  
  const handleCloseEditor = () => {
    setSelectedContent(null);
  };
  
  return (
    <div className="space-y-6">
      {/* Step 1: Placement Dropdown */}
      <PlacementDropdown
        placement={placement}
        setPlacement={setPlacement}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      
      {/* Step 2: Content Action Cards */}
      <ContentActionCards
        placement={placement}
        selectedContent={effectiveContent}
        onSelectContent={setSelectedContent}
      />
      
      {/* Step 3: Contextual Editor - Only shows when content is selected */}
      {effectiveContent === 'text' && (
        <ContextualTextEditor
          addTextElement={addTextElement}
          selectedElement={selectedElement?.type === 'text' ? selectedElement : null}
          updateElement={updateElement}
          removeElement={removeElement}
          onClose={handleCloseEditor}
        />
      )}
      
      {effectiveContent === 'art' && (
        <ContextualArtEditor
          addImageElement={addImageElement}
          selectedElement={selectedElement?.type === 'image' ? selectedElement : null}
          updateElement={updateElement}
          removeElement={removeElement}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  );
};

export default ModernDesignTab;
