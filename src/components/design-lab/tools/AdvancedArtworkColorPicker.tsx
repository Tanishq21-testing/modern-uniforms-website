
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Palette, RotateCcw } from "lucide-react";
import { DesignElement } from '../types';

interface AdvancedArtworkColorPickerProps {
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
}

const AdvancedArtworkColorPicker = ({ selectedElement, updateElement }: AdvancedArtworkColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [activeEffect, setActiveEffect] = useState<'hue' | 'tint' | 'contrast' | 'brightness'>('hue');

  // Comprehensive color palette
  const colorPalette = [
    // Row 1 - Grays and Browns
    '#000000', '#4a5568', '#718096', '#a0aec0', '#e2e8f0',
    '#8b4513', '#654321', '#d2691e', '#deb887', '#f5deb3',
    
    // Row 2 - Greens
    '#006400', '#228b22', '#32cd32', '#90ee90', '#98fb98',
    '#2d5016', '#0f5132', '#157347', '#20c997', '#6f42c1',
    
    // Row 3 - Blues and Purples  
    '#000080', '#4169e1', '#6495ed', '#87ceeb', '#e6f3ff',
    '#663399', '#8a2be2', '#9932cc', '#da70d6', '#dda0dd',
    
    // Row 4 - Reds and Pinks
    '#8b0000', '#dc143c', '#ff1493', '#ff69b4', '#ffb6c1',
    '#b22222', '#cd5c5c', '#f08080', '#ffc0cb', '#ffe4e1',
    
    // Row 5 - Yellows and Oranges
    '#ff4500', '#ff8c00', '#ffd700', '#ffff00', '#ffffe0',
    '#b8860b', '#daa520', '#f0e68c', '#fff8dc', '#fffacd'
  ];

  if (!selectedElement || selectedElement.type !== 'image') {
    return null;
  }

  const applyColorEffect = (color: string, effect: string) => {
    let filter = '';
    
    switch (effect) {
      case 'hue':
        const hue = getHueFromColor(color);
        filter = `hue-rotate(${hue}deg) saturate(1.2)`;
        break;
      case 'tint':
        filter = `sepia(1) hue-rotate(${getHueFromColor(color)}deg) saturate(2)`;
        break;
      case 'contrast':
        filter = `contrast(1.2) brightness(1.1) hue-rotate(${getHueFromColor(color)}deg)`;
        break;
      case 'brightness':
        filter = `brightness(1.2) contrast(1.1) hue-rotate(${getHueFromColor(color)}deg)`;
        break;
    }

    updateElement(selectedElement.id, { 
      color: color,
      style: {
        ...selectedElement.style,
        filter: filter
      }
    });
  };

  const getHueFromColor = (hexColor: string): number => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;

    if (max !== min) {
      const delta = max - min;
      switch (max) {
        case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
        case g: h = (b - r) / delta + 2; break;
        case b: h = (r - g) / delta + 4; break;
      }
      h /= 6;
    }

    return Math.round(h * 360);
  };

  const resetColors = () => {
    updateElement(selectedElement.id, { 
      color: '#000000',
      style: {
        ...selectedElement.style,
        filter: 'none'
      }
    });
    setSelectedColor('#000000');
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center gap-2">
        <Palette size={16} />
        <Label className="text-sm font-medium">Advanced Artwork Colors</Label>
      </div>

      {/* Effect Type Selector */}
      <div className="space-y-2">
        <Label className="text-xs text-gray-600">Color Effect</Label>
        <div className="grid grid-cols-2 gap-1">
          {[
            { key: 'hue', label: 'Hue Shift' },
            { key: 'tint', label: 'Color Tint' },
            { key: 'contrast', label: 'High Contrast' },
            { key: 'brightness', label: 'Bright Mode' }
          ].map(effect => (
            <button
              key={effect.key}
              className={`px-2 py-1 text-xs rounded border transition-colors ${
                activeEffect === effect.key 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
              onClick={() => setActiveEffect(effect.key as any)}
            >
              {effect.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Input */}
      <div className="flex gap-2">
        <Input
          type="color"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            applyColorEffect(e.target.value, activeEffect);
          }}
          className="w-12 h-8 p-1 border rounded"
        />
        <Input
          type="text"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            applyColorEffect(e.target.value, activeEffect);
          }}
          className="flex-1 h-8 text-xs"
          placeholder="#000000"
        />
      </div>
      
      {/* Color Palette */}
      <div className="space-y-2">
        <Label className="text-xs text-gray-600">Color Palette</Label>
        <div className="grid grid-cols-5 gap-1 max-h-32 overflow-y-auto">
          {colorPalette.map(color => (
            <button
              key={color}
              className={`w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform relative ${
                selectedColor === color ? 'ring-2 ring-blue-500 ring-offset-1' : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
                applyColorEffect(color, activeEffect);
              }}
              title={color}
            >
              {selectedColor === color && (
                <div className="absolute inset-0 border-2 border-white rounded"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <Button
          onClick={resetColors}
          variant="outline"
          size="sm"
          className="flex-1 h-8 text-xs"
        >
          <RotateCcw size={12} className="mr-1" />
          Reset
        </Button>
      </div>

      {/* Info */}
      <div className="text-xs text-gray-500 bg-blue-50 p-2 rounded border">
        <strong>Tip:</strong> Different effect modes provide various color transformations. Experiment with each mode to find the perfect look for your artwork.
      </div>
    </div>
  );
};

export default AdvancedArtworkColorPicker;
