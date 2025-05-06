
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  ColorPicker,
  TextEditor,
  DesignUploader,
  PlacementSelector,
  ArtworkSelector,
  ProductSelector
} from '../tools';
import { ColorOption, DesignPlacement, DesignElement, ProductType } from '../types';

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
  onProductChange
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
          <div>
            <h3 className="font-medium mb-2">Product Color</h3>
            <ColorPicker 
              selectedColor={selectedColor} 
              onColorChange={onColorChange} 
            />
          </div>
          
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
        </TabsContent>
        
        <TabsContent value="art" className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Upload Artwork</h3>
            <DesignUploader addImageElement={addImageElement} />
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Pre-loaded Designs</h3>
            <ArtworkSelector addImageElement={addImageElement} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsPanel;
