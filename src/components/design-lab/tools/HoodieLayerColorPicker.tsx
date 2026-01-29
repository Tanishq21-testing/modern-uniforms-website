import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoodiePart } from "./HoodiePartSelector";

export type LayerColor = 'black' | 'lightgrey' | 'red' | 'blue' | 'orange';

interface HoodieLayerColorPickerProps {
  selectedPart: HoodiePart;
  partColors: {
    body: LayerColor;
    sleeves: LayerColor;
    hood: LayerColor;
  };
  onColorChange: (part: HoodiePart, color: LayerColor) => void;
}

const HoodieLayerColorPicker = ({ 
  selectedPart, 
  partColors, 
  onColorChange 
}: HoodieLayerColorPickerProps) => {
  const colors: { value: LayerColor; label: string; bgColor: string }[] = [
    { value: 'black', label: 'Black', bgColor: '#1a1a1a' },
    { value: 'lightgrey', label: 'Light Grey', bgColor: '#d1d5db' },
    { value: 'red', label: 'Red', bgColor: '#dc2626' },
    { value: 'blue', label: 'Blue', bgColor: '#2563eb' },
    { value: 'orange', label: 'Orange', bgColor: '#ea580c' },
  ];

  const currentColor = partColors[selectedPart];

  return (
    <TooltipProvider>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Select color for <span className="font-medium capitalize">{selectedPart}</span>
        </p>
        <div className="flex gap-3">
          {colors.map((color) => (
            <Tooltip key={color.value}>
              <TooltipTrigger asChild>
                <button
                  className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-200 
                    hover:scale-110 active:scale-95 border-2 ${
                    currentColor === color.value
                      ? 'ring-2 ring-offset-2 ring-primary shadow-md transform scale-110 border-primary'
                      : 'hover:shadow-md border-gray-200'
                  }`}
                  style={{ backgroundColor: color.bgColor }}
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
      </div>
    </TooltipProvider>
  );
};

export default HoodieLayerColorPicker;
