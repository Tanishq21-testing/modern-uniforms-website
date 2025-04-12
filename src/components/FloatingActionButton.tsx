
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={onClick}
        className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center group"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
        <span className="sr-only">Get a free consultation</span>
      </Button>
    </div>
  );
};

export default FloatingActionButton;
