
import { useState, useRef, useEffect } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import ToolsPanel from './panels/ToolsPanel';
import PreviewPanel from './panels/PreviewPanel';
import OrderPanel from './panels/OrderPanel';
import { ColorOption, DesignPlacement, HoodieView, DesignElement, Font } from './types';
import { toast } from "sonner";

interface DesignEditorProps {
  isMobile: boolean;
}

const DesignEditor = ({ isMobile }: DesignEditorProps) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('black'); // Default black color
  const [customPartColor, setCustomPartColor] = useState<{
    body: string;
    sleeves: string;
    hood: string;
  }>({
    body: 'black',
    sleeves: 'black',
    hood: 'black',
  });
  
  const [currentView, setCurrentView] = useState<HoodieView>('back'); // Start with back view
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(49.99);
  const [designElements, setDesignElements] = useState<DesignElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [placement, setPlacement] = useState<DesignPlacement>('chest-left');
  
  // Calculate price based on quantity and customizations
  useEffect(() => {
    // Base price
    let basePrice = 49.99;
    
    // Add price for custom elements
    const elementsPrice = designElements.length * 5;
    
    // Calculate total
    const total = basePrice + elementsPrice;
    
    // Update price based on quantity
    setPrice(parseFloat((total * quantity).toFixed(2)));
  }, [quantity, designElements]);

  const handleViewChange = (view: HoodieView) => {
    setCurrentView(view);
    toast.info(`Viewing ${view} of hoodie`);
  };
  
  const addTextElement = (text: string, font: Font, color: string) => {
    const newElement: DesignElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: text,
      font,
      color,
      position: { x: 100, y: 100 },
      size: { width: 200, height: 50 },
      placement
    };
    
    setDesignElements([...designElements, newElement]);
    setSelectedElement(newElement.id);
    toast.success('Text element added');
  };
  
  const addImageElement = (imageUrl: string) => {
    const newElement: DesignElement = {
      id: `image-${Date.now()}`,
      type: 'image',
      content: imageUrl,
      position: { x: 100, y: 100 },
      size: { width: 100, height: 100 },
      placement
    };
    
    setDesignElements([...designElements, newElement]);
    setSelectedElement(newElement.id);
    toast.success('Image element added');
  };
  
  const updateElement = (id: string, updates: Partial<DesignElement>) => {
    setDesignElements(
      designElements.map(element => 
        element.id === id ? { ...element, ...updates } : element
      )
    );
  };
  
  const removeElement = (id: string) => {
    setDesignElements(designElements.filter(element => element.id !== id));
    setSelectedElement(null);
    toast.info('Element removed');
  };
  
  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
    setCustomPartColor({
      body: color,
      sleeves: color,
      hood: color
    });
    toast.success(`Hoodie color updated to ${color}`);
  };
  
  const handlePartColorChange = (part: 'body' | 'sleeves' | 'hood', color: string) => {
    setCustomPartColor({
      ...customPartColor,
      [part]: color
    });
    toast.success(`${part} color updated`);
  };
  
  // For mobile, render a stacked layout
  if (isMobile) {
    return (
      <div className="flex flex-col gap-6">
        <PreviewPanel 
          currentView={currentView}
          setCurrentView={handleViewChange}
          designElements={designElements}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          updateElement={updateElement}
          selectedColor={selectedColor}
          customPartColor={customPartColor}
        />
        
        <ToolsPanel 
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
          customPartColor={customPartColor}
          onPartColorChange={handlePartColorChange}
          placement={placement}
          setPlacement={setPlacement}
          addTextElement={addTextElement}
          addImageElement={addImageElement}
          selectedElement={selectedElement ? designElements.find(el => el.id === selectedElement) : null}
          updateElement={updateElement}
          removeElement={removeElement}
        />
        
        <OrderPanel 
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
        />
      </div>
    );
  }
  
  // Desktop 3-panel layout
  return (
    <ResizablePanelGroup 
      direction="horizontal" 
      className="min-h-[650px] rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={20}>
        <ToolsPanel 
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
          customPartColor={customPartColor}
          onPartColorChange={handlePartColorChange}
          placement={placement}
          setPlacement={setPlacement}
          addTextElement={addTextElement}
          addImageElement={addImageElement}
          selectedElement={selectedElement ? designElements.find(el => el.id === selectedElement) : null}
          updateElement={updateElement}
          removeElement={removeElement}
        />
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel defaultSize={50}>
        <PreviewPanel 
          currentView={currentView}
          setCurrentView={handleViewChange}
          designElements={designElements}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          updateElement={updateElement}
          selectedColor={selectedColor}
          customPartColor={customPartColor}
        />
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel defaultSize={25} minSize={20}>
        <OrderPanel 
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default DesignEditor;
