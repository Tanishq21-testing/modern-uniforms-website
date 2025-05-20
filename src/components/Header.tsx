
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  scrollToConsultation: () => void;
}

const Header = ({ scrollToConsultation }: HeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white py-3 md:py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img 
              src={images.callToAction} 
              alt="UniformConnect Logo" 
              className="h-10 md:h-12 w-auto cursor-pointer"
              loading="eager" // Logo should load immediately
              width="180"
              height="48"
              onError={(e) => {
                console.error('Image failed to load:', e);
                // Fallback for logo if it fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite error loop
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMDAwIj5Vbmlmb3JtQ29ubmVjdDwvdGV4dD48L3N2Zz4=';
              }}
            />
          </Link>
        </div>
        <Button 
          className="bg-brand-red hover:bg-brand-red/90 text-white text-sm px-3 py-1.5 h-9"
          onClick={scrollToConsultation}
        >
          {isMobile ? "Contact" : "Contact Us"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
