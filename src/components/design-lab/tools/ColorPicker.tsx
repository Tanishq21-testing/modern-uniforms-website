
import { ColorOption } from '../types';

interface ColorPickerProps {
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
}

const ColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
  const colors: ColorOption[] = [
    'black', 'navy', 'gray', 'white', 'red', 
    'green', 'blue', 'purple', 'yellow', 'orange'
  ];
  
  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map(color => (
        <div 
          key={color}
          className={`w-10 h-10 rounded-full cursor-pointer ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-brand-blue' : ''
          }`}
          style={{ 
            backgroundColor: color,
            border: color === 'white' ? '1px solid #e5e7eb' : 'none'
          }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
