
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';

interface HeaderProps {
  scrollToConsultation: () => void;
}

const Header = ({ scrollToConsultation }: HeaderProps) => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img 
            src={images.logo} 
            alt="UniformConnect Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              console.error('Image failed to load:', e);
              // Fallback for logo if it fails to load
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite error loop
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMDAwIj5Vbmlmb3JtQ29ubmVjdDwvdGV4dD48L3N2Zz4=';
            }}
          />
        </div>
        <Button 
          className="bg-brand-red hover:bg-brand-red/90 text-white"
          onClick={scrollToConsultation}
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
