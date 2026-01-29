import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Upload, RotateCw, Trash2, X, ZoomIn, Image as ImageIcon } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { DesignElement } from '../types';

interface ContextualArtEditorProps {
  addImageElement: (imageUrl: string) => void;
  selectedElement: DesignElement | null;
  updateElement: (id: string, updates: Partial<DesignElement>) => void;
  removeElement: (id: string) => void;
  onClose: () => void;
}

const ContextualArtEditor = ({
  addImageElement,
  selectedElement,
  updateElement,
  removeElement,
  onClose
}: ContextualArtEditorProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [scale, setScale] = useState(100);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file format",
        description: "Please select an image file (PNG, JPG, or SVG).",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      if (imageUrl) {
        addImageElement(imageUrl);
        toast({
          title: "Artwork added!",
          description: "Your image has been added to the design.",
        });
      }
      setIsUploading(false);
    };
    
    reader.onerror = () => {
      toast({
        title: "Upload failed",
        description: "Failed to process your image. Please try again.",
        variant: "destructive",
      });
      setIsUploading(false);
    };
    
    reader.readAsDataURL(file);
    event.target.value = '';
  };
  
  const handleRemoveArt = () => {
    if (selectedElement) {
      removeElement(selectedElement.id);
      onClose();
    }
  };
  
  const isEditMode = selectedElement?.type === 'image';
  
  return (
    <div className="space-y-4 p-4 bg-muted/30 rounded-xl border border-border animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">
          {isEditMode ? 'Edit Artwork' : 'Add Artwork'}
        </h4>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Upload Zone */}
      {!isEditMode && (
        <label
          htmlFor="art-upload"
          className={cn(
            "flex flex-col items-center justify-center w-full h-36",
            "border-2 border-dashed border-border rounded-xl",
            "cursor-pointer bg-background/50",
            "hover:bg-accent/50 hover:border-primary/50 transition-all",
            isUploading && "opacity-50 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">
              {isUploading ? 'Uploading...' : 'Click to upload'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG, or SVG (max 800×800px)
            </p>
          </div>
          <Input
            id="art-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
      )}
      
      {/* Edit Controls - Only show when artwork is selected */}
      {isEditMode && (
        <>
          {/* Preview */}
          <div className="w-full h-32 rounded-lg bg-muted/50 border border-border flex items-center justify-center overflow-hidden">
            <img 
              src={selectedElement.content} 
              alt="Selected artwork"
              className="max-w-full max-h-full object-contain"
              style={{
                transform: `scale(${scale / 100}) rotate(${rotation}deg)`
              }}
            />
          </div>
          
          {/* Scale Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                <ZoomIn className="w-3 h-3" />
                Scale
              </label>
              <span className="text-xs text-muted-foreground">{scale}%</span>
            </div>
            <Slider
              value={[scale]}
              onValueChange={([value]) => {
                setScale(value);
                if (selectedElement) {
                  updateElement(selectedElement.id, {
                    size: {
                      width: Math.round(100 * (value / 100)),
                      height: Math.round(100 * (value / 100))
                    }
                  });
                }
              }}
              min={25}
              max={200}
              step={5}
              className="w-full"
            />
          </div>
          
          {/* Rotation Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                <RotateCw className="w-3 h-3" />
                Rotation
              </label>
              <span className="text-xs text-muted-foreground">{rotation}°</span>
            </div>
            <Slider
              value={[rotation]}
              onValueChange={([value]) => {
                setRotation(value);
                // Note: Rotation would need to be added to the DesignElement type
              }}
              min={0}
              max={360}
              step={5}
              className="w-full"
            />
          </div>
          
          {/* Remove Button */}
          <Button 
            onClick={handleRemoveArt} 
            variant="destructive" 
            className="w-full h-11"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remove Artwork
          </Button>
        </>
      )}
      
      {/* Art Gallery Preview - Could be expanded later */}
      {!isEditMode && (
        <div className="pt-2">
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
            <ImageIcon className="w-3 h-3" />
            Or select from our library
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i}
                className="aspect-square rounded-lg bg-muted/50 border border-border hover:border-primary/50 cursor-pointer transition-all flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">#{i}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContextualArtEditor;
