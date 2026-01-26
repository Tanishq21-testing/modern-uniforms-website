
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ColorPicker,
  TextEditor,
  DesignUploader,
  PlacementSelector,
  ArtworkSelector,
  ProductSelector,
  AdvancedArtworkColorPicker,
  HoodiePartSelector,
  HoodieLayerColorPicker,
} from '../tools';
import type { HoodiePart, LayerColor } from '../tools';
import { ColorOption, DesignPlacement, DesignElement, ProductType, HoodieView } from '../types';

interface ToolsPanelProps {
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
  customPartColor: {
    body: string;
    sleeves: string;
    hood: string;
  };
  onPartColorChange: (part: 'body' | 'sleeves' | 'hood', color: string) => void;
  placement: DesignPlacement;
  setPlacement: (placement: DesignPlacement) => void;
  addTextElement: (text: string, font: any, color: string) => void;
  addImageElement: (imageUrl: string) => void;
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  removeElement: (id: string) => void;
  selectedProduct: ProductType;
  onProductChange: (product: ProductType) => void;
  currentView?: HoodieView;
  setCurrentView?: (view: HoodieView) => void;
  // Beta layer-based hoodie props
  selectedHoodiePart: HoodiePart;
  onHoodiePartChange: (part: HoodiePart) => void;
  hoodieLayerColors: {
    body: LayerColor;
    sleeves: LayerColor;
    hood: LayerColor;
  };
  onHoodieLayerColorChange: (part: HoodiePart, color: LayerColor) => void;
  useBetaLayerMode: boolean;
  onToggleBetaMode: () => void;
}

const ToolsPanel = ({
  selectedColor,
  onColorChange,
  customPartColor,
  onPartColorChange,
  placement,
  setPlacement,
  addTextElement,
  addImageElement,
  selectedElement,
  updateElement,
  removeElement,
  selectedProduct,
  onProductChange,
  currentView,
  setCurrentView,
  // Beta layer-based hoodie props
  selectedHoodiePart,
  onHoodiePartChange,
  hoodieLayerColors,
  onHoodieLayerColorChange,
  useBetaLayerMode,
  onToggleBetaMode
}: ToolsPanelProps) => {
  return (
    <div className="h-full overflow-auto p-4 border-r">
      <h2 className="text-xl font-semibold mb-4">Customize Your Product</h2>
      
      <ProductSelector 
        selectedProduct={selectedProduct}
        onProductChange={onProductChange}
      />
      
      <Tabs defaultValue="color">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="color" className="flex-1">Color</TabsTrigger>
          <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
          <TabsTrigger value="art" className="flex-1">Art</TabsTrigger>
        </TabsList>
        
        <TabsContent value="color" className="space-y-4">
          {/* Beta Layer Mode Toggle for Hoodie */}
          {selectedProduct === 'hoodie' && (
            <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    BETA
                  </Badge>
                  <span className="text-sm font-medium">Layer Mode</span>
                </div>
                <Button
                  variant={useBetaLayerMode ? "default" : "outline"}
                  size="sm"
                  onClick={onToggleBetaMode}
                  className="text-xs"
                >
                  {useBetaLayerMode ? "Enabled" : "Try it"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Customize body, sleeves, and hood colors separately
              </p>
            </div>
          )}

          {/* Beta Layer Controls - Only show when hoodie and beta mode enabled */}
          {selectedProduct === 'hoodie' && useBetaLayerMode && (
            <div className="space-y-4 p-3 bg-gray-50 rounded-lg border">
              <div>
                <h3 className="font-medium mb-3">Select Part to Customize</h3>
                <HoodiePartSelector
                  selectedPart={selectedHoodiePart}
                  onPartChange={onHoodiePartChange}
                />
              </div>
              
              <div className="border-t pt-3">
                <HoodieLayerColorPicker
                  selectedPart={selectedHoodiePart}
                  partColors={hoodieLayerColors}
                  onColorChange={onHoodieLayerColorChange}
                />
              </div>
            </div>
          )}

          {/* Standard Color Picker - Hide when beta mode is enabled for hoodie */}
          {!(selectedProduct === 'hoodie' && useBetaLayerMode) && (
            <div>
              <h3 className="font-medium mb-2">Product Color</h3>
              <ColorPicker 
                selectedColor={selectedColor} 
                onColorChange={onColorChange} 
              />
            </div>
          )}
          
          {selectedProduct === 'varsityJacket' && (
            <div>
              <h3 className="font-medium mb-2">Custom Parts</h3>
              <div className="space-y-2">
                <div>
                  <Label htmlFor="body-color">Body</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          customPartColor.body === color ? 'ring-2 ring-offset-2 ring-brand-blue' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onPartColorChange('body', color)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="sleeves-color">Sleeves</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          customPartColor.sleeves === color ? 'ring-2 ring-offset-2 ring-brand-blue' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onPartColorChange('sleeves', color)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="hood-color">Hood</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          customPartColor.hood === color ? 'ring-2 ring-offset-2 ring-brand-blue' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onPartColorChange('hood', color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="design" className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Placement</h3>
            <PlacementSelector 
              placement={placement}
              setPlacement={setPlacement}
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Text</h3>
            <TextEditor 
              addTextElement={addTextElement} 
              selectedElement={selectedElement?.type === 'text' ? selectedElement : null}
              updateElement={updateElement}
              removeElement={removeElement}
            />
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Upload Design</h3>
            <DesignUploader addImageElement={addImageElement} />
          </div>

          {/* Show advanced artwork color picker when an image is selected */}
          {selectedElement?.type === 'image' && (
            <AdvancedArtworkColorPicker 
              selectedElement={selectedElement}
              updateElement={updateElement}
            />
          )}
        </TabsContent>
        
        <TabsContent value="art" className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Upload Your Own Artwork</h3>
            <DesignUploader addImageElement={addImageElement} />
          </div>
          
          <div>
            <ArtworkSelector addImageElement={addImageElement} />
          </div>

          {/* Show advanced artwork color picker in art tab too when an image is selected */}
          {selectedElement?.type === 'image' && (
            <AdvancedArtworkColorPicker 
              selectedElement={selectedElement}
              updateElement={updateElement}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsPanel;
