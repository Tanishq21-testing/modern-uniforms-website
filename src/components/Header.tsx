
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { images } from '@/assets/images';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  scrollToConsultation?: () => void;
}

const Header = ({ scrollToConsultation }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Effect to handle scroll-based styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleConsultationClick = () => {
    if (scrollToConsultation) {
      scrollToConsultation();
      closeMenu();
    }
  };
  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-2 lg:px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center mr-12 lg:mr-16">
          <img 
            src={images.logo} 
            alt="UniformConnect" 
            className="h-10 md:h-12"
            loading="eager"
          />
        </Link>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            className="text-gray-700 hover:text-brand-blue focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium">Services</Link>
            <Link to="/clients" className="text-gray-700 hover:text-brand-blue font-medium">Clients</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium">Contact</Link>
            <Link to="/green-initiative" className="text-green-700 hover:text-green-600 font-medium">Green Initiative</Link>
            <Link to="/school" className="text-blue-700 hover:text-blue-600 font-medium">School</Link>
            
            {scrollToConsultation && (
              <Button 
                className="bg-brand-red hover:bg-brand-red/90 text-white"
                onClick={handleConsultationClick}
              >
                Free Consultation
              </Button>
            )}
          </nav>
        )}
        
        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 pt-20 px-6">
            <nav className="flex flex-col space-y-6 items-center">
              <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium text-xl" onClick={closeMenu}>Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-brand-blue font-medium text-xl" onClick={closeMenu}>Services</Link>
              <Link to="/clients" className="text-gray-700 hover:text-brand-blue font-medium text-xl" onClick={closeMenu}>Clients</Link>
              <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium text-xl" onClick={closeMenu}>About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium text-xl" onClick={closeMenu}>Contact</Link>
              <Link to="/green-initiative" className="text-green-700 hover:text-green-600 font-medium text-xl" onClick={closeMenu}>Green Initiative</Link>
              <Link to="/school" className="text-blue-700 hover:text-blue-600 font-medium text-xl" onClick={closeMenu}>School</Link>
              
              {scrollToConsultation && (
                <Button 
                  className="bg-brand-red hover:bg-brand-red/90 text-white text-xl mt-4 w-full"
                  onClick={handleConsultationClick}
                >
                  Free Consultation
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
