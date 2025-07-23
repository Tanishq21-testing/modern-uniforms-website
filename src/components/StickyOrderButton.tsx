import { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show after scrolling past hero section (approximately 800px)
      if (scrollY > 800) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
        setIsVisible(false);
        return;
      }

      // Check if any CTA buttons are currently visible
      const ctaButtons = document.querySelectorAll('[data-cta-button]');
      let anyCtaVisible = false;

      ctaButtons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport) {
          anyCtaVisible = true;
        }
      });

      // Show sticky button only if no CTA is visible and user has scrolled
      setIsVisible(hasScrolled && !anyCtaVisible);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [hasScrolled]);

  const handleClick = () => {
    // Scroll to pricing section or open contact form
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center space-x-3 border border-yellow-400/20"
      >
        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm sm:text-base">Order Now</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
      </button>
      
      {/* Subtle pulse animation */}
      <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping"></div>
    </div>
  );
};

export default StickyOrderButton;