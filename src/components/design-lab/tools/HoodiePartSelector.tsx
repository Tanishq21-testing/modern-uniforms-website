import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HoodiePart = 'body' | 'sleeves' | 'hood';

interface HoodiePartSelectorProps {
  selectedPart: HoodiePart;
  onPartChange: (part: HoodiePart) => void;
}

const HoodiePartSelector = ({ selectedPart, onPartChange }: HoodiePartSelectorProps) => {
  const parts: { value: HoodiePart; label: string }[] = [
    { value: 'body', label: 'Body' },
    { value: 'sleeves', label: 'Sleeves' },
    { value: 'hood', label: 'Hood' },
  ];

  return (
    <div className="flex gap-2">
      {parts.map((part) => (
        <Button
          key={part.value}
          variant={selectedPart === part.value ? "default" : "outline"}
          size="sm"
          onClick={() => onPartChange(part.value)}
          className={cn(
            "flex-1 transition-all",
            selectedPart === part.value && "ring-2 ring-offset-2 ring-primary"
          )}
        >
          {part.label}
        </Button>
      ))}
    </div>
  );
};

export default HoodiePartSelector;
