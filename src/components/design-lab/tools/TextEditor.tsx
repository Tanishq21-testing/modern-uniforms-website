
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Trash2 } from "lucide-react";
import { DesignElement, Font } from '../types';

interface TextEditorProps {
  addTextElement: (text: string, font: Font, color: string) => void;
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  removeElement: (id: string) => void;
}

const TextEditor = ({
  addTextElement,
  selectedElement,
  updateElement,
  removeElement
}: TextEditorProps) => {
  const [text, setText] = useState('');
  const [font, setFont] = useState<Font>({
    family: 'Arial',
    weight: 'normal',
    style: 'normal',
    size: 20,
    align: 'center'
  });
  const [textColor, setTextColor] = useState('#000000');
  
  // When a text element is selected, populate the editor with its values
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
    }
  };
  
  const handleFontChange = (property: keyof Font, value: any) => {
    const newFont = { ...font, [property]: value };
    setFont(newFont);
    
    if (selectedElement) {
      updateElement(selectedElement.id, {
        font: newFont
      });
    }
  };
  
  const toggleFontWeight = () => {
    const newWeight = font.weight === 'bold' ? 'normal' : 'bold';
    handleFontChange('weight', newWeight);
  };
  
  const toggleFontStyle = () => {
    const newStyle = font.style === 'italic' ? 'normal' : 'italic';
    handleFontChange('style', newStyle);
  };
  
  return (
    <div className="space-y-3">
      <div>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          className="mb-2"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="font-family" className="text-xs">Font</Label>
          <Select 
            value={font.family} 
            onValueChange={(value) => handleFontChange('family', value)}
          >
            <SelectTrigger id="font-family" className="h-8">
              <SelectValue placeholder="Font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Arial">Arial</SelectItem>
              <SelectItem value="Times New Roman">Times New Roman</SelectItem>
              <SelectItem value="Courier New">Courier New</SelectItem>
              <SelectItem value="Georgia">Georgia</SelectItem>
              <SelectItem value="Verdana">Verdana</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="font-size" className="text-xs">Size</Label>
          <Select 
            value={font.size.toString()} 
            onValueChange={(value) => handleFontChange('size', parseInt(value))}
          >
            <SelectTrigger id="font-size" className="h-8">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12px</SelectItem>
              <SelectItem value="14">14px</SelectItem>
              <SelectItem value="16">16px</SelectItem>
              <SelectItem value="20">20px</SelectItem>
              <SelectItem value="24">24px</SelectItem>
              <SelectItem value="32">32px</SelectItem>
              <SelectItem value="48">48px</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex space-x-1">
        <Button 
          type="button" 
          variant={font.weight === 'bold' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-8"
          onClick={toggleFontWeight}
        >
          <Bold size={14} />
        </Button>
        
        <Button 
          type="button" 
          variant={font.style === 'italic' ? 'default' : 'outline'} 
          size="sm" 
          className="flex-1 h-8"
          onClick={toggleFontStyle}
        >
          <Italic size={14} />
        </Button>
        
        <Button 
          type="button" 
          variant={font.align === 'left' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-8"
          onClick={() => handleFontChange('align', 'left')}
        >
          <AlignLeft size={14} />
        </Button>
        
        <Button 
          type="button" 
          variant={font.align === 'center' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-8"
          onClick={() => handleFontChange('align', 'center')}
        >
          <AlignCenter size={14} />
        </Button>
        
        <Button 
          type="button" 
          variant={font.align === 'right' ? 'default' : 'outline'} 
          size="sm"
          className="flex-1 h-8"
          onClick={() => handleFontChange('align', 'right')}
        >
          <AlignRight size={14} />
        </Button>
      </div>
      
      <div>
        <Label htmlFor="text-color" className="text-xs">Text Color</Label>
        <div className="flex gap-2">
          <Input
            type="color"
            id="text-color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value);
              if (selectedElement) {
                updateElement(selectedElement.id, { color: e.target.value });
              }
            }}
            className="w-10 h-8 p-1"
          />
          <Input
            type="text"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value);
              if (selectedElement) {
                updateElement(selectedElement.id, { color: e.target.value });
              }
            }}
            className="flex-1 h-8"
          />
        </div>
      </div>
      
      <div className="flex gap-2 pt-2">
        {selectedElement ? (
          <>
            <Button 
              onClick={handleUpdateText} 
              className="flex-1 h-9 bg-brand-blue hover:bg-brand-blue/90"
            >
              Update Text
            </Button>
            <Button 
              onClick={handleRemoveText} 
              variant="outline" 
              className="h-9"
            >
              <Trash2 size={16} />
            </Button>
          </>
        ) : (
          <Button 
            onClick={handleAddText} 
            className="w-full h-9 bg-brand-blue hover:bg-brand-blue/90"
            disabled={!text.trim()}
          >
            Add Text
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextEditor;
