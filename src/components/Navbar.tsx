
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="public/lovable-uploads/7b06a816-98dc-4284-9f22-f5f23c2e2494.png" 
            alt="UniformConnect Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-red transition-colors">Home</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-brand-blue transition-colors">About Us</Link>
          <Link to="/case-studies" className="text-gray-700 hover:text-brand-green transition-colors">Case Studies</Link>
          <Link to="/services" className="text-gray-700 hover:text-brand-blue transition-colors">Services</Link>
          <Link to="/clients" className="text-gray-700 hover:text-brand-green transition-colors">Clients</Link>
        </nav>

        <Link to="/contact-us">
          <Button className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white">
            Contact Us
          </Button>
        </Link>

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
            <Link 
              to="/"
              className="text-gray-700 hover:text-brand-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us"
              className="text-gray-700 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/case-studies"
              className="text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              to="/services"
              className="text-gray-700 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/clients"
              className="text-gray-700 hover:text-brand-green transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
