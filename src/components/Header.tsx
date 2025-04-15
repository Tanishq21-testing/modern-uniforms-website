
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
