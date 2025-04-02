
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2">
          <img 
            src="public/lovable-uploads/4feb5bf9-5dd6-4d6e-9a1d-ec2829a7bf5e.png" 
            alt="UniformConnect Logo" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-brand-red transition-colors">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-brand-blue transition-colors">Services</a>
          <a href="#clients" className="text-gray-700 hover:text-brand-green transition-colors">Clients</a>
          <a href="#why-us" className="text-gray-700 hover:text-brand-red transition-colors">Why Choose Us</a>
        </nav>

        <Button className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white">
          Contact Us
        </Button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#clients" 
              className="text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </a>
            <a 
              href="#why-us" 
              className="text-gray-700 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
