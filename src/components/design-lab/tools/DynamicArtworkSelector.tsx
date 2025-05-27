
import { useState } from 'react';
import { useDesignCategories, useDesignFiles } from '@/hooks/use-design-assets';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronRight } from "lucide-react";

interface DynamicArtworkSelectorProps {
  addImageElement: (imageUrl: string) => void;
}

const DynamicArtworkSelector = ({ addImageElement }: DynamicArtworkSelectorProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const { data: categories, isLoading: categoriesLoading } = useDesignCategories();

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (categoriesLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <Skeleton key={i} className="h-8 w-full" />
        ))}
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center text-gray-500 text-sm py-4">
        <p>No design categories available</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {categories.map(category => (
        <CategorySection
          key={category.id}
          category={category}
          isExpanded={expandedCategories.includes(category.id)}
          onToggle={() => toggleCategory(category.id)}
          addImageElement={addImageElement}
        />
      ))}
    </div>
  );
};

interface CategorySectionProps {
  category: { id: string; name: string };
  isExpanded: boolean;
  onToggle: () => void;
  addImageElement: (imageUrl: string) => void;
}

const CategorySection = ({ category, isExpanded, onToggle, addImageElement }: CategorySectionProps) => {
  const { data: designs, isLoading } = useDesignFiles(category.id);

  return (
    <div className="border border-gray-200 rounded-md">
      <Button
        variant="ghost"
        className="w-full justify-between p-3 font-medium text-left"
        onClick={onToggle}
      >
        {category.name}
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </Button>
      
      {isExpanded && (
        <div className="p-3 border-t border-gray-200">
          {isLoading ? (
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map(i => (
                <Skeleton key={i} className="aspect-square rounded-md" />
              ))}
            </div>
          ) : designs && designs.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {designs.map(design => (
                <button
                  key={design.id}
                  className="group relative aspect-square bg-gray-50 rounded-md overflow-hidden border border-gray-200 hover:border-brand-blue transition-colors"
                  onClick={() => addImageElement(design.storage_url)}
                >
                  <img
                    src={design.storage_url}
                    alt={design.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {design.name}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-sm py-4">
              <p>No designs available in this category</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicArtworkSelector;
