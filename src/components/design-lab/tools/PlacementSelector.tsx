
import { DesignPlacement, HoodieView } from '../types';

interface PlacementSelectorProps {
  placement: DesignPlacement;
  setPlacement: (placement: DesignPlacement) => void;
  currentView?: HoodieView;
  setCurrentView?: (view: HoodieView) => void;
}

const PlacementSelector = ({ placement, setPlacement, currentView, setCurrentView }: PlacementSelectorProps) => {
  const placements = [
    { value: 'chest-left', label: 'Left Chest' },
    { value: 'chest-right', label: 'Right Chest' },
    { value: 'back-center', label: 'Back Center' }
  ];
  
  const handlePlacementChange = (newPlacement: DesignPlacement) => {
    setPlacement(newPlacement);
    
    // Automatically switch to back view when "Back Center" is selected
    if (newPlacement === 'back-center' && setCurrentView) {
      setCurrentView('back');
    }
    // Switch to front view when chest placements are selected
    else if ((newPlacement === 'chest-left' || newPlacement === 'chest-right') && setCurrentView) {
      setCurrentView('front');
    }
  };
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {placements.map(p => (
        <button
          key={p.value}
          className={`p-2 border rounded-md text-xs text-center transition-all ${
            placement === p.value as DesignPlacement
              ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => handlePlacementChange(p.value as DesignPlacement)}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
};

export default PlacementSelector;
