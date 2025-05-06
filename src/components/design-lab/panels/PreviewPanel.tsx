
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ColorOption, HoodieView, DesignElement } from '../types';
import { useHoodieImage } from '@/hooks/use-hoodie-image';
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  const { imageUrl, isLoading } = useHoodieImage(selectedColor, currentView);
  
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
    
    return () => window.addEventListener('resize', updateSize);
  }, []);

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
    <div className="h-full flex flex-col bg-gray-50 rounded-md p-5 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Preview</h2>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="bg-white">
                {currentView === 'front' ? 'Front View' : 'Back View'}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Current view of the hoodie</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex justify-center mb-4">
        <ToggleGroup type="single" value={currentView} onValueChange={(value) => value && setCurrentView(value as HoodieView)}>
          <ToggleGroupItem value="front" aria-label="Front view">
            <ArrowLeft className="mr-2" size={16} />
            Front
          </ToggleGroupItem>
          <ToggleGroupItem value="back" aria-label="Back view">
            Back
            <ArrowRight className="ml-2" size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <TooltipProvider>
        <div 
          ref={containerRef}
          className="flex-grow relative overflow-hidden border rounded-lg bg-white shadow-inner"
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
              <Skeleton className="h-[350px] w-[250px] rounded-md" />
            </div>
          )}
          
          {/* Hoodie image from Supabase */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={`${currentView} view of ${selectedColor} hoodie`}
                className="max-h-full max-w-full object-contain transition-opacity duration-300"
                style={{ opacity: isLoading ? 0 : 1 }}
              />
            )}
          </div>
          
          {/* Design elements */}
          {renderDesignElements()}

          {/* Tooltip helper */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute bottom-3 right-3">
                <Button variant="outline" size="sm" className="bg-white/80">
                  ?
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Click and drag to reposition elements on the hoodie</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Click and drag to reposition elements on the hoodie
      </div>
    </div>
  );
};

export default PreviewPanel;
