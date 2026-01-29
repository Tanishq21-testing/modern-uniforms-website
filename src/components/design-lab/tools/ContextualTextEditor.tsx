import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Trash2, X, Check } from "lucide-react";
import { cn } from '@/lib/utils';
import { DesignElement, Font } from '../types';

interface ContextualTextEditorProps {
  addTextElement: (text: string, font: Font, color: string) => void;
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  removeElement: (id: string) => void;
  onClose: () => void;
}

const FONT_OPTIONS = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Verdana', label: 'Verdana' },
  { value: 'Impact', label: 'Impact' },
];

const TEXT_COLORS = [
  { value: '#000000', label: 'Black' },
  { value: '#FFFFFF', label: 'White' },
  { value: '#DC2626', label: 'Red' },
  { value: '#2563EB', label: 'Blue' },
  { value: '#16A34A', label: 'Green' },
  { value: '#CA8A04', label: 'Gold' },
  { value: '#9333EA', label: 'Purple' },
  { value: '#EA580C', label: 'Orange' },
];

const ContextualTextEditor = ({
  addTextElement,
  selectedElement,
  updateElement,
  removeElement,
  onClose
}: ContextualTextEditorProps) => {
  const [text, setText] = useState('');
  const [font, setFont] = useState<Font>({
    family: 'Arial',
    weight: 'normal',
    style: 'normal',
    size: 24,
    align: 'center'
  });
  const [textColor, setTextColor] = useState('#000000');
  
  // Populate from selected element
  useEffect(() => {
    if (selectedElement && selectedElement.type === 'text') {
      setText(selectedElement.content);
      if (selectedElement.font) setFont(selectedElement.font);
      if (selectedElement.color) setTextColor(selectedElement.color);
    }
  }, [selectedElement]);
  
  const handleAddText = () => {
    if (text.trim()) {
      addTextElement(text, font, textColor);
      setText('');
      onClose();
    }
  };
  
  const handleUpdateText = () => {
    if (selectedElement && text.trim()) {
      updateElement(selectedElement.id, {
        content: text,
        font,
        color: textColor
      });
    }
  };
  
  const handleRemoveText = () => {
    if (selectedElement) {
      removeElement(selectedElement.id);
      setText('');
      onClose();
    }
  };
  
  const handleFontChange = (property: keyof Font, value: any) => {
    const newFont = { ...font, [property]: value };
    setFont(newFont);
    
    if (selectedElement) {
      updateElement(selectedElement.id, { font: newFont });
    }
  };
  
  return (
    <div className="space-y-4 p-4 bg-muted/30 rounded-xl border border-border animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">
          {selectedElement ? 'Edit Text' : 'Add Text'}
        </h4>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Text Input */}
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text..."
        className="h-12 text-base bg-background"
      />
      
      {/* Font Selection */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Font Family</label>
        <Select 
          value={font.family} 
          onValueChange={(value) => handleFontChange('family', value)}
        >
          <SelectTrigger className="h-10 bg-background">
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {FONT_OPTIONS.map(opt => (
              <SelectItem key={opt.value} value={opt.value} style={{ fontFamily: opt.value }}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Size Slider */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-xs font-medium text-muted-foreground">Size</label>
          <span className="text-xs text-muted-foreground">{font.size}px</span>
        </div>
        <Slider
          value={[font.size]}
          onValueChange={([value]) => handleFontChange('size', value)}
          min={12}
          max={72}
          step={1}
          className="w-full"
        />
      </div>
      
      {/* Style Toggles */}
      <div className="flex gap-1">
        <Button 
          type="button" 
          variant={font.weight === 'bold' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-10"
          onClick={() => handleFontChange('weight', font.weight === 'bold' ? 'normal' : 'bold')}
        >
          <Bold className="w-4 h-4" />
        </Button>
        
        <Button 
          type="button" 
          variant={font.style === 'italic' ? 'default' : 'outline'} 
          size="sm" 
          className="flex-1 h-10"
          onClick={() => handleFontChange('style', font.style === 'italic' ? 'normal' : 'italic')}
        >
          <Italic className="w-4 h-4" />
        </Button>
        
        <div className="w-px bg-border mx-1" />
        
        <Button 
          type="button" 
          variant={font.align === 'left' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-10"
          onClick={() => handleFontChange('align', 'left')}
        >
          <AlignLeft className="w-4 h-4" />
        </Button>
        
        <Button 
          type="button" 
          variant={font.align === 'center' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-10"
          onClick={() => handleFontChange('align', 'center')}
        >
          <AlignCenter className="w-4 h-4" />
        </Button>
        
        <Button 
          type="button" 
          variant={font.align === 'right' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-10"
          onClick={() => handleFontChange('align', 'right')}
        >
          <AlignRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Color Picker */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Text Color</label>
        <div className="flex gap-2 flex-wrap">
          {TEXT_COLORS.map(color => (
            <button
              key={color.value}
              onClick={() => {
                setTextColor(color.value);
                if (selectedElement) {
                  updateElement(selectedElement.id, { color: color.value });
                }
              }}
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-all",
                textColor === color.value 
                  ? "border-primary scale-110 shadow-md" 
                  : "border-transparent hover:scale-105"
              )}
              style={{ backgroundColor: color.value }}
              title={color.label}
            />
          ))}
          <Input
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value);
              if (selectedElement) {
                updateElement(selectedElement.id, { color: e.target.value });
              }
            }}
            className="w-8 h-8 p-0 border-0 cursor-pointer rounded-full overflow-hidden"
          />
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex gap-2 pt-2">
        {selectedElement ? (
          <>
            <Button 
              onClick={handleUpdateText} 
              className="flex-1 h-11"
              disabled={!text.trim()}
            >
              <Check className="w-4 h-4 mr-2" />
              Update
            </Button>
            <Button 
              onClick={handleRemoveText} 
              variant="destructive" 
              className="h-11 px-4"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <Button 
            onClick={handleAddText} 
            className="w-full h-11"
            disabled={!text.trim()}
          >
            <Check className="w-4 h-4 mr-2" />
            Add Text
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContextualTextEditor;
