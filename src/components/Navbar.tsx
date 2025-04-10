
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

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

  const handleSignOut = async () => {
    await signOut();
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
            src="/lovable-uploads/7b06a816-98dc-4284-9f22-f5f23c2e2494.png" 
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

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact-us">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white">
              Contact Us
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full cursor-pointer">My Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="flex items-center gap-2">
                <LogIn size={18} />
                Sign In
              </Button>
            </Link>
          )}
        </div>

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
            
            {user ? (
              <>
                <Link 
                  to="/products"
                  className="text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Products
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link 
                to="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <LogIn size={18} />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
