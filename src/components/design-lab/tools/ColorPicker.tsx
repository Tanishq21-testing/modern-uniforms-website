
import { ColorOption } from '../types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ColorPickerProps {
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
}

const ColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
  const colors: { value: ColorOption; label: string }[] = [
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' },
    { value: 'gray', label: 'Gray' },
    { value: 'lightgray', label: 'Light Gray' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ];
  
  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 gap-3">
        {colors.map(color => (
          <Tooltip key={color.value}>
            <TooltipTrigger asChild>
              <button 
                className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-200 
                  hover:scale-110 active:scale-95 ${
                  selectedColor === color.value 
                    ? 'ring-2 ring-offset-2 ring-brand-blue shadow-md transform scale-110' 
                    : 'hover:shadow-md'
                }`}
                style={{ 
                  backgroundColor: color.value === 'lightgray' ? '#ccc' : color.value,
                  border: color.value === 'lightgray' ? '1px solid #e5e7eb' : 'none'
                }}
                onClick={() => onColorChange(color.value)}
                aria-label={`Select ${color.label} color`}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{color.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default ColorPicker;
