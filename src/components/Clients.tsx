
import { useEffect, useRef, useState } from 'react';
import { images } from '@/assets/images';
import LazyImage from '@/components/LazyImage';
import { useIsMobile } from '@/hooks/use-mobile';

const Clients = () => {
  const clients = [
    { name: "Hilton", logo: images.clientLogos.hilton },
    { name: "Dubai Golf", logo: images.clientLogos.dubaiGolf },
    { name: "Radisson Blu", logo: images.clientLogos.radissonBlu },
    { name: "Little Bangkok", logo: images.clientLogos.littleBangkok },
    { name: "Jones the Grocer", logo: images.clientLogos.jonesTheGrocer },
    { name: "Fairgreen International School", logo: images.clientLogos.fairgreen },
  ];

  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Preload client logo images as they're critical content
  useEffect(() => {
    clients.forEach(client => {
      const img = new Image();
      img.src = client.logo;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="clients" 
      className={`py-16 ${isMobile ? '' : 'py-24'} bg-gray-50`} 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto ${isMobile ? 'mb-12' : 'mb-20'} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Trusted By</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6 md:mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl">
            Join these prestigious brands who trust us with their uniform needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center ${isMobile ? 'h-44' : 'h-56'} transition-transform hover:shadow-xl hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-20 md:h-28 flex items-center justify-center mb-4 overflow-visible">
                <LazyImage 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain"
                  width={120}
                  height={80}
                  priority={true} // Mark client logos as priority to ensure immediate loading
                />
              </div>
              <p className="text-center font-medium text-gray-700 text-base md:text-lg">{client.name}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 md:mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <p className="text-gray-600 text-lg md:text-xl italic">
            "...and many other satisfied clients throughout the UAE."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
