import { Type, Image, Hash, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DesignPlacement } from '../types';

export type ContentType = 'text' | 'art' | 'number' | null;

interface ContentActionCardsProps {
  placement: DesignPlacement;
  selectedContent: ContentType;
  onSelectContent: (type: ContentType) => void;
}

const PLACEMENT_LABELS: Record<DesignPlacement, string> = {
  'chest-left': 'Left Chest',
  'chest-right': 'Right Chest',
  'back-center': 'Back Center',
};

const CONTENT_OPTIONS = [
  {
    type: 'text' as const,
    label: 'Add Text',
    description: 'Custom text & lettering',
    icon: Type,
  },
  {
    type: 'art' as const,
    label: 'Add Art / Logo',
    description: 'Upload or select artwork',
    icon: Image,
  },
  {
    type: 'number' as const,
    label: 'Add Name / Number',
    description: 'Player names & jersey numbers',
    icon: Hash,
  },
];

const ContentActionCards = ({ 
  placement, 
  selectedContent, 
  onSelectContent 
}: ContentActionCardsProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Plus className="w-4 h-4 text-primary" />
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Add to {PLACEMENT_LABELS[placement]}
        </label>
      </div>
      
      <div className="grid gap-2">
        {CONTENT_OPTIONS.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedContent === option.type;
          const isDisabled = option.type === 'number'; // Coming soon
          
          return (
            <button
              key={option.type}
              onClick={() => !isDisabled && onSelectContent(isSelected ? null : option.type)}
              disabled={isDisabled}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl",
                "border transition-all duration-200",
                "text-left",
                isDisabled && "opacity-50 cursor-not-allowed",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-sm" 
                  : "border-border bg-background hover:border-primary/30 hover:bg-accent/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                "transition-colors duration-200",
                isSelected 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-semibold",
                  isSelected && "text-primary"
                )}>
                  {option.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </div>
              
              {isDisabled && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentActionCards;
