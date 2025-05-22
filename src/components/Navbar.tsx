
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

  // Add effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/7b06a816-98dc-4284-9f22-f5f23c2e2494.png" 
            alt="UniformConnect Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu - CENTERED */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-8 justify-center">
            <Link to="/" className="text-gray-700 hover:text-brand-red transition-colors">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-brand-blue transition-colors">About Us</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-brand-green transition-colors">Case Studies</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue transition-colors">Services</Link>
            <Link to="/school" className="text-gray-700 hover:text-brand-red transition-colors">School</Link>
            <Link to="/green-initiative" className="text-green-700 hover:text-green-600 transition-colors">Green Initiative</Link>
            <Link to="/clients" className="text-gray-700 hover:text-brand-green transition-colors">Clients</Link>
          </div>
        </nav>
        
        {/* Right side actions */}
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
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className="text-xl text-gray-700 hover:text-brand-red transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about-us"
                  className="text-xl text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/case-studies"
                  className="text-xl text-gray-700 hover:text-brand-green transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/services"
                  className="text-xl text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/school"
                  className="text-xl text-gray-700 hover:text-brand-red transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  School
                </Link>
                <Link 
                  to="/green-initiative"
                  className="text-xl text-green-700 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Green Initiative
                </Link>
                <Link 
                  to="/clients"
                  className="text-xl text-gray-700 hover:text-brand-green transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clients
                </Link>
                <Link 
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white">
                    Contact Us
                  </Button>
                </Link>
                {user ? (
                  <>
                    <Link 
                      to="/products"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        My Products
                      </Button>
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
