
import { useEffect, useRef } from 'react';

const Clients = () => {
  const clients = [
    { name: "Hilton Dubai", logo: "/placeholder.svg" },
    { name: "Dubai Golf", logo: "/placeholder.svg" },
    { name: "Raddison Red", logo: "/placeholder.svg" },
    { name: "Little Bangkok", logo: "/placeholder.svg" },
    { name: "Jones the Grocer", logo: "/placeholder.svg" },
    { name: "Fairgreen International School", logo: "/placeholder.svg" },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const clientCards = document.querySelectorAll('.client-card');
            clientCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
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
    <section id="clients" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Clients</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We are proud to serve some of the most prestigious brands and establishments in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card opacity-0 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-40 transition-transform hover:scale-105"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-16 mb-4 opacity-70"
              />
              <p className="text-center font-medium text-gray-700">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-600 text-lg italic">
            "...and many other satisfied clients throughout the UAE."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
