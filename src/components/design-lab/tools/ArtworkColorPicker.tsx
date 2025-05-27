
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { DesignElement } from '../types';

interface ArtworkColorPickerProps {
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
}

const ArtworkColorPicker = ({ selectedElement, updateElement }: ArtworkColorPickerProps) => {
  const [artworkColor, setArtworkColor] = useState('#000000');

  if (!selectedElement || selectedElement.type !== 'image') {
    return null;
  }

  const handleColorChange = (color: string) => {
    setArtworkColor(color);
    updateElement(selectedElement.id, { 
      color: color,
      style: {
        ...selectedElement.style,
        filter: `hue-rotate(${getHueRotationFromColor(color)}deg) saturate(1.2)`
      }
    });
  };

  // Convert hex color to hue rotation degrees
  const getHueRotationFromColor = (hexColor: string): number => {
    // Simple color mapping - in a real app you'd want more sophisticated color conversion
    const colorMap: { [key: string]: number } = {
      '#ff0000': 0,    // Red
      '#00ff00': 120,  // Green  
      '#0000ff': 240,  // Blue
      '#ffff00': 60,   // Yellow
      '#ff00ff': 300,  // Magenta
      '#00ffff': 180,  // Cyan
      '#ffffff': 0,    // White
      '#000000': 0     // Black
    };
    
    return colorMap[hexColor.toLowerCase()] || 0;
  };

  return (
    <div className="space-y-3 p-3 border rounded-lg bg-gray-50">
      <div className="flex items-center gap-2">
        <Palette size={16} />
        <Label className="text-sm font-medium">Artwork Color</Label>
      </div>
      
      <div className="flex gap-2">
        <Input
          type="color"
          value={artworkColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-12 h-8 p-1 border rounded"
        />
        <Input
          type="text"
          value={artworkColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="flex-1 h-8 text-xs"
          placeholder="#000000"
        />
      </div>
      
      <div className="grid grid-cols-6 gap-1">
        {['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#008000', '#ffc0cb'].map(color => (
          <button
            key={color}
            className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
            title={color}
          />
        ))}
      </div>
      
      <Button
        onClick={() => handleColorChange('#000000')}
        variant="outline"
        size="sm"
        className="w-full h-7 text-xs"
      >
        Reset Color
      </Button>
    </div>
  );
};

export default ArtworkColorPicker;
