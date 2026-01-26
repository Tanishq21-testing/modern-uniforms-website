import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoodiePart } from "./HoodiePartSelector";

// Now using hex colors for canvas tinting
export type LayerColor = string;

export interface LayerColors {
  body: LayerColor;
  sleeves: LayerColor;
  hood: LayerColor;
}

interface HoodieLayerColorPickerProps {
  selectedPart: HoodiePart;
  partColors: LayerColors;
  onColorChange: (part: HoodiePart, color: LayerColor) => void;
}

// Extended color palette for canvas tinting
const COLOR_SWATCHES: { value: string; label: string }[] = [
  { value: '#000000', label: 'Black' },
  { value: '#FFFFFF', label: 'White' },
  { value: '#D3D3D3', label: 'Light Grey' },
  { value: '#4A4A4A', label: 'Dark Grey' },
  { value: '#C62828', label: 'Red' },
  { value: '#6A1B9A', label: 'Purple' },
  { value: '#2E7D32', label: 'Green' },
  { value: '#1565C0', label: 'Blue' },
  { value: '#0A1F44', label: 'Navy Blue' },
  { value: '#6EC6FF', label: 'Sky Blue' },
];

const HoodieLayerColorPicker = ({ 
  selectedPart, 
  partColors, 
  onColorChange 
}: HoodieLayerColorPickerProps) => {
  const currentColor = partColors[selectedPart];

  return (
    <TooltipProvider>
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Select color for <span className="font-medium capitalize">{selectedPart}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {COLOR_SWATCHES.map((color) => (
            <Tooltip key={color.value}>
              <TooltipTrigger asChild>
                <button
                  className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-200 
                    hover:scale-110 active:scale-95 border-2 ${
                    currentColor === color.value
                      ? 'ring-2 ring-offset-2 ring-primary shadow-md transform scale-110 border-primary'
                      : 'hover:shadow-md border-gray-300'
                  }`}
                  style={{ 
                    backgroundColor: color.value,
                    // Add inner shadow for white to make it visible
                    boxShadow: color.value === '#FFFFFF' ? 'inset 0 0 0 1px rgba(0,0,0,0.1)' : undefined
                  }}
                  onClick={() => onColorChange(selectedPart, color.value)}
                  aria-label={`Select ${color.label} for ${selectedPart}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{color.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Current: <span className="font-mono">{currentColor}</span>
        </p>
      </div>
    </TooltipProvider>
  );
};

export default HoodieLayerColorPicker;
