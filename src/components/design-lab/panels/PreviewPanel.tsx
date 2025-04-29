
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ColorOption, HoodieView, DesignElement } from '../types';
import { images } from '@/assets/images';

interface PreviewPanelProps {
  currentView: HoodieView;
  setCurrentView: (view: HoodieView) => void;
  designElements: DesignElement[];
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  selectedColor: ColorOption;
  customPartColor: {
    body: string;
    sleeves: string;
    hood: string;
  };
}

const PreviewPanel = ({
  currentView,
  setCurrentView,
  designElements,
  selectedElement,
  setSelectedElement,
  updateElement,
  selectedColor,
  customPartColor
}: PreviewPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [dragInfo, setDragInfo] = useState<{
    isDragging: boolean;
    elementId: string | null;
    startX: number;
    startY: number;
    originalX: number;
    originalY: number;
  }>({
    isDragging: false,
    elementId: null,
    startX: 0,
    startY: 0,
    originalX: 0,
    originalY: 0
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getHoodieImage = () => {
    // For simplicity, we're using a single hoodie image
    // In a real implementation, you'd have different images for different colors
    return images.Hoodieimage;
  };

  const handleDragStart = (e: React.MouseEvent, id: string) => {
    const element = designElements.find(el => el.id === id);
    if (!element) return;

    setSelectedElement(id);
    setDragInfo({
      isDragging: true,
      elementId: id,
      startX: e.clientX,
      startY: e.clientY,
      originalX: element.position.x,
      originalY: element.position.y
    });
    
    e.preventDefault();
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!dragInfo.isDragging || !dragInfo.elementId) return;
    
    const deltaX = e.clientX - dragInfo.startX;
    const deltaY = e.clientY - dragInfo.startY;
    
    updateElement(dragInfo.elementId, {
      position: {
        x: dragInfo.originalX + deltaX,
        y: dragInfo.originalY + deltaY
      }
    });
  };

  const handleDragEnd = () => {
    setDragInfo({
      isDragging: false,
      elementId: null,
      startX: 0,
      startY: 0,
      originalX: 0,
      originalY: 0
    });
  };

  const renderDesignElements = () => {
    return designElements
      .filter(element => {
        // Only show elements that belong to the current view
        if (currentView === 'front' && element.placement === 'back-center') return false;
        if (currentView === 'back' && (element.placement === 'chest-left' || element.placement === 'chest-right')) return false;
        return true;
      })
      .map(element => {
        const isSelected = element.id === selectedElement;
        
        if (element.type === 'text') {
          return (
            <div
              key={element.id}
              className={`absolute cursor-move ${isSelected ? 'ring-2 ring-brand-blue' : ''}`}
              style={{
                left: element.position.x,
                top: element.position.y,
                width: element.size.width,
                height: element.size.height,
                color: element.color || 'black',
                fontFamily: element.font?.family || 'Arial',
                fontWeight: element.font?.weight || 'normal',
                fontStyle: element.font?.style || 'normal',
                fontSize: `${element.font?.size || 16}px`,
                textAlign: element.font?.align || 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: element.font?.align === 'left' ? 'flex-start' : 
                               element.font?.align === 'right' ? 'flex-end' : 'center',
              }}
              onMouseDown={(e) => handleDragStart(e, element.id)}
              onClick={() => setSelectedElement(element.id)}
            >
              {element.content}
            </div>
          );
        }
        
        if (element.type === 'image') {
          return (
            <div
              key={element.id}
              className={`absolute cursor-move ${isSelected ? 'ring-2 ring-brand-blue' : ''}`}
              style={{
                left: element.position.x,
                top: element.position.y,
                width: element.size.width,
                height: element.size.height,
              }}
              onMouseDown={(e) => handleDragStart(e, element.id)}
              onClick={() => setSelectedElement(element.id)}
            >
              <img 
                src={element.content} 
                alt="Custom design" 
                className="w-full h-full object-contain"
              />
            </div>
          );
        }
        
        return null;
      });
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Preview</h2>
      
      <div className="flex justify-center mb-4">
        <div className="flex gap-4 items-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentView('front')}
            disabled={currentView === 'front'}
          >
            <ArrowLeft className="mr-1" size={16} />
            Front
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentView('back')}
            disabled={currentView === 'back'}
          >
            Back
            <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex-grow relative overflow-hidden border rounded-lg bg-white shadow-inner"
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Hoodie background image */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <img 
            src={getHoodieImage()} 
            alt={`${currentView} view of hoodie`}
            className="max-h-full object-contain"
            style={{
              filter: `brightness(${selectedColor === 'white' ? 1 : 0.9}) 
                       hue-rotate(${selectedColor === 'navy' ? '210deg' : 
                                    selectedColor === 'red' ? '0deg' : 
                                    selectedColor === 'green' ? '120deg' : 
                                    selectedColor === 'blue' ? '240deg' : 
                                    selectedColor === 'purple' ? '280deg' : 
                                    selectedColor === 'yellow' ? '60deg' : 
                                    selectedColor === 'orange' ? '30deg' : '0deg'})`
            }}
          />
        </div>
        
        {/* Design elements */}
        {renderDesignElements()}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Click and drag to reposition elements on the hoodie
      </div>
    </div>
  );
};

export default PreviewPanel;
