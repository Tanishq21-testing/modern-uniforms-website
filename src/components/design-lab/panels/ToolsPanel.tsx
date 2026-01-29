import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Palette, Wand2, ImageIcon } from "lucide-react";
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
  ModernDesignTab,
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
    <div className="h-full overflow-auto p-4 border-r bg-background">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Customize</h2>
        <p className="text-sm text-muted-foreground">Build your perfect product</p>
      </div>
      
      <ProductSelector 
        selectedProduct={selectedProduct}
        onProductChange={onProductChange}
      />
      
      <Tabs defaultValue="design" className="mt-4">
        <TabsList className="w-full mb-4 h-11 p-1 bg-muted/50">
          <TabsTrigger value="color" className="flex-1 gap-2 data-[state=active]:bg-background">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Color</span>
          </TabsTrigger>
          <TabsTrigger value="design" className="flex-1 gap-2 data-[state=active]:bg-background">
            <Wand2 className="w-4 h-4" />
            <span className="hidden sm:inline">Design</span>
          </TabsTrigger>
          <TabsTrigger value="art" className="flex-1 gap-2 data-[state=active]:bg-background">
            <ImageIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Gallery</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="color" className="space-y-4 mt-0">
          {/* Beta Layer Mode Toggle for Hoodie */}
          {selectedProduct === 'hoodie' && (
            <div className="p-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                    BETA
                  </Badge>
                  <span className="text-sm font-medium">Layer Mode</span>
                </div>
                <Button
                  variant={useBetaLayerMode ? "default" : "outline"}
                  size="sm"
                  onClick={onToggleBetaMode}
                  className="text-xs h-8"
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
            <div className="space-y-4 p-4 bg-muted/30 rounded-xl border">
              <div>
                <h3 className="font-medium mb-3 text-sm">Select Part</h3>
                <HoodiePartSelector
                  selectedPart={selectedHoodiePart}
                  onPartChange={onHoodiePartChange}
                />
              </div>
              
              <div className="border-t border-border pt-4">
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
            <div className="space-y-3">
              <h3 className="font-medium text-sm">Product Color</h3>
              <ColorPicker 
                selectedColor={selectedColor} 
                onColorChange={onColorChange} 
              />
            </div>
          )}
          
          {selectedProduct === 'varsityJacket' && (
            <div className="space-y-4 p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium text-sm">Custom Parts</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="body-color" className="text-xs text-muted-foreground">Body</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                          customPartColor.body === color ? 'ring-2 ring-offset-2 ring-primary' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onPartColorChange('body', color)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="sleeves-color" className="text-xs text-muted-foreground">Sleeves</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                          customPartColor.sleeves === color ? 'ring-2 ring-offset-2 ring-primary' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onPartColorChange('sleeves', color)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="hood-color" className="text-xs text-muted-foreground">Hood</Label>
                  <div className="flex gap-2 mt-1">
                    {['black', 'navy', 'gray', 'white', 'red'].map(color => (
                      <div 
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                          customPartColor.hood === color ? 'ring-2 ring-offset-2 ring-primary' : ''
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
        
        {/* NEW Modern Design Tab */}
        <TabsContent value="design" className="mt-0">
          <ModernDesignTab
            placement={placement}
            setPlacement={setPlacement}
            addTextElement={addTextElement}
            addImageElement={addImageElement}
            selectedElement={selectedElement}
            updateElement={updateElement}
            removeElement={removeElement}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
        </TabsContent>
        
        <TabsContent value="art" className="space-y-4 mt-0">
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Upload Artwork</h3>
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
