
import { useEffect, useRef, useState } from 'react';
import { images } from '@/assets/images';

const Clients = () => {
  const clients = [
    { name: "Hilton", logo: images.clientLogos.hilton },
    { name: "Dubai Golf", logo: images.clientLogos.dubaiGolf },
    { name: "Radisson Blu", logo: images.clientLogos.radissonBlu },
    { name: "Little Bangkok", logo: images.clientLogos.littleBangkok },
    { name: "Jones the Grocer", logo: images.clientLogos.jonesTheGrocer },
    { name: "Fairgreen International School", logo: images.clientLogos.fairgreen },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section id="clients" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted By</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-xl">
            Join these prestigious brands who trust us with their uniform needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-56 transition-transform hover:shadow-xl hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-28 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-28 object-contain"
                />
              </div>
              <p className="text-center font-medium text-gray-700 text-lg">{client.name}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <p className="text-gray-600 text-xl italic">
            "...and many other satisfied clients throughout the UAE."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
