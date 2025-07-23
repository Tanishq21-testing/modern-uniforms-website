import { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Clear any existing timeout
      if (delayTimeout) {
        clearTimeout(delayTimeout);
        setDelayTimeout(null);
      }
      
      // Show after scrolling past hero section (approximately 800px)
      if (scrollY > 800) {
        setHasScrolled(true);
        
        // Check if any CTA buttons or the consultation form are currently visible
        const ctaButtons = document.querySelectorAll('[data-cta-button]');
        const consultationForm = document.querySelector('[data-consultation-form]');
        let anyCtaOrFormVisible = false;

        // Check CTA buttons
        ctaButtons.forEach((button) => {
          const rect = button.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (isInViewport) {
            anyCtaOrFormVisible = true;
          }
        });

        // Check consultation form
        if (consultationForm) {
          const rect = consultationForm.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isInViewport) {
            anyCtaOrFormVisible = true;
          }
        }

        // If no CTA or form is visible, set delay before showing button
        if (!anyCtaOrFormVisible) {
          const timeout = setTimeout(() => {
            setIsVisible(true);
          }, 2500); // 2.5 second delay
          setDelayTimeout(timeout);
        } else {
          setIsVisible(false);
        }
      } else {
        setHasScrolled(false);
        setIsVisible(false);
      }
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
      if (delayTimeout) {
        clearTimeout(delayTimeout);
      }
    };
  }, [delayTimeout]);

  const handleClick = () => {
    // Scroll to consultation form section
    const consultationForm = document.querySelector('[data-consultation-form]');
    if (consultationForm) {
      consultationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border border-yellow-400/20 relative"
      >
        <ShoppingBag className="w-4 h-4 transition-transform duration-200" />
        <span className="text-sm">Order Now</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </button>
      
      {/* Gentle pulse every 10 seconds */}
      <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 animate-[pulse_1s_ease-out_infinite] [animation-duration:10s]"></div>
    </div>
  );
};

export default StickyOrderButton;