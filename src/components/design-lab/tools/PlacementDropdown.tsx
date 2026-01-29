import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DesignPlacement, HoodieView } from '../types';

interface PlacementDropdownProps {
  placement: DesignPlacement;
  setPlacement: (placement: DesignPlacement) => void;
  currentView?: HoodieView;
  setCurrentView?: (view: HoodieView) => void;
}

type ExtendedPlacement = DesignPlacement | 'sleeve-left' | 'sleeve-right';

const PLACEMENT_OPTIONS: { value: ExtendedPlacement; label: string; view: HoodieView }[] = [
  { value: 'chest-left', label: 'Left Chest', view: 'front' },
  { value: 'chest-right', label: 'Right Chest', view: 'front' },
  { value: 'back-center', label: 'Back Center', view: 'back' },
  { value: 'sleeve-left', label: 'Left Sleeve', view: 'front' },
  { value: 'sleeve-right', label: 'Right Sleeve', view: 'front' },
];

const PlacementDropdown = ({ 
  placement, 
  setPlacement, 
  currentView, 
  setCurrentView 
}: PlacementDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = PLACEMENT_OPTIONS.find(p => p.value === placement) || PLACEMENT_OPTIONS[0];
  
  const handleSelect = (option: typeof PLACEMENT_OPTIONS[0]) => {
    // For now, map extended placements back to DesignPlacement type
    const mappedPlacement: DesignPlacement = 
      option.value === 'sleeve-left' || option.value === 'sleeve-right' 
        ? 'chest-left' 
        : option.value;
    
    setPlacement(mappedPlacement);
    
    // Auto-switch view based on placement
    if (setCurrentView) {
      setCurrentView(option.view);
    }
    
    setIsOpen(false);
  };
  
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Placement
      </label>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between gap-3 p-4",
            "bg-background border border-border rounded-xl",
            "hover:border-primary/50 hover:bg-accent/50",
            "transition-all duration-200",
            isOpen && "border-primary ring-2 ring-primary/20"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">{selectedOption.label}</p>
              <p className="text-xs text-muted-foreground">
                {selectedOption.view === 'front' ? 'Front view' : 'Back view'}
              </p>
            </div>
          </div>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-background border border-border rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {PLACEMENT_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 text-left",
                  "hover:bg-accent transition-colors",
                  option.value === placement && "bg-primary/5"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  option.value === placement 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                )}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className={cn(
                    "font-medium",
                    option.value === placement && "text-primary"
                  )}>
                    {option.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {option.view === 'front' ? 'Front view' : 'Back view'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementDropdown;
