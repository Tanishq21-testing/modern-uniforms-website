
import { useState, useRef, useEffect } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import ToolsPanel from './panels/ToolsPanel';
import PreviewPanel from './panels/PreviewPanel';
import OrderPanel from './panels/OrderPanel';
import { ColorOption, DesignPlacement, HoodieView, DesignElement, Font, ProductType } from './types';
import { toast } from "sonner";
import type { HoodiePart, LayerColor } from './tools';

interface DesignEditorProps {
  isMobile: boolean;
}

const DesignEditor = ({ isMobile }: DesignEditorProps) => {
  // Set default values: Black Hoodie, Front view
  const [selectedProduct, setSelectedProduct] = useState<ProductType>('hoodie');
  const [selectedColor, setSelectedColor] = useState<ColorOption>('black');
  const [customPartColor, setCustomPartColor] = useState<{
    body: string;
    sleeves: string;
    hood: string;
  }>({
    body: 'black',
    sleeves: 'black',
    hood: 'black',
  });
  
  // Beta layer-based hoodie state
  const [useBetaLayerMode, setUseBetaLayerMode] = useState<boolean>(false);
  const [selectedHoodiePart, setSelectedHoodiePart] = useState<HoodiePart>('body');
  const [hoodieLayerColors, setHoodieLayerColors] = useState<{
    body: LayerColor;
    sleeves: LayerColor;
    hood: LayerColor;
  }>({
    body: 'black',
    sleeves: 'black',
    hood: 'black',
  });
  
  // Default to front view as requested
  const [currentView, setCurrentView] = useState<HoodieView>('front');
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
    
    // Different base prices based on product
    if (selectedProduct === 'varsityJacket') {
      basePrice = 89.99;
    } else if (selectedProduct === 'sweater') {
      basePrice = 39.99;
    } else if (selectedProduct === 'tshirt') {
      basePrice = 24.99;
    }
    
    // Add price for custom elements
    const elementsPrice = designElements.length * 5;
    
    // Calculate total
    const total = basePrice + elementsPrice;
    
    // Update price based on quantity
    setPrice(parseFloat((total * quantity).toFixed(2)));
  }, [quantity, designElements, selectedProduct]);

  const handleViewChange = (view: HoodieView) => {
    setCurrentView(view);
    toast.info(`Viewing ${view} of ${selectedProduct}`);
  };
  
  const handleProductChange = (product: ProductType) => {
    setSelectedProduct(product);
    // Reset color to black when changing products
    setSelectedColor('black');
    // Reset beta mode when switching products
    if (product !== 'hoodie') {
      setUseBetaLayerMode(false);
    }
    toast.success(`Product changed to ${product}`);
  };
  
  const handleToggleBetaMode = () => {
    const newBetaMode = !useBetaLayerMode;
    setUseBetaLayerMode(newBetaMode);
    
    if (newBetaMode) {
      // When enabling beta mode, set all layers to black as default
      setHoodieLayerColors({
        body: 'black',
        sleeves: 'black',
        hood: 'black',
      });
      setSelectedColor('black');
      toast.success('Beta layer mode enabled! Select a part and choose its color.');
    } else {
      toast.info('Switched back to standard color mode');
    }
  };
  
  const handleHoodieLayerColorChange = (part: HoodiePart, color: LayerColor) => {
    setHoodieLayerColors(prev => ({
      ...prev,
      [part]: color
    }));
    toast.success(`${part.charAt(0).toUpperCase() + part.slice(1)} color changed to ${color}`);
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
    toast.success(`Product color updated to ${color}`);
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
          removeElement={removeElement}
          selectedColor={selectedColor}
          customPartColor={customPartColor}
          selectedProduct={selectedProduct}
          useBetaLayerMode={useBetaLayerMode}
          hoodieLayerColors={hoodieLayerColors}
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
          selectedProduct={selectedProduct}
          onProductChange={handleProductChange}
          currentView={currentView}
          setCurrentView={handleViewChange}
          selectedHoodiePart={selectedHoodiePart}
          onHoodiePartChange={setSelectedHoodiePart}
          hoodieLayerColors={hoodieLayerColors}
          onHoodieLayerColorChange={handleHoodieLayerColorChange}
          useBetaLayerMode={useBetaLayerMode}
          onToggleBetaMode={handleToggleBetaMode}
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
          selectedProduct={selectedProduct}
          onProductChange={handleProductChange}
          currentView={currentView}
          setCurrentView={handleViewChange}
          selectedHoodiePart={selectedHoodiePart}
          onHoodiePartChange={setSelectedHoodiePart}
          hoodieLayerColors={hoodieLayerColors}
          onHoodieLayerColorChange={handleHoodieLayerColorChange}
          useBetaLayerMode={useBetaLayerMode}
          onToggleBetaMode={handleToggleBetaMode}
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
          removeElement={removeElement}
          selectedColor={selectedColor}
          customPartColor={customPartColor}
          selectedProduct={selectedProduct}
          useBetaLayerMode={useBetaLayerMode}
          hoodieLayerColors={hoodieLayerColors}
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
