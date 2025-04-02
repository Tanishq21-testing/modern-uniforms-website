
import { useEffect, useRef } from 'react';

const Clients = () => {
  const clients = [
    { name: "Hilton", logo: "public/lovable-uploads/99892b74-d545-4bd1-bc07-984c4f423139.png" },
    { name: "Dubai Golf", logo: "public/lovable-uploads/de9d1bb9-9276-43e3-b9c1-089a81f98d66.png" },
    { name: "Radisson Blu", logo: "public/lovable-uploads/961d484c-e6d4-41be-b37b-760ef7719be2.png" },
    { name: "Little Bangkok", logo: "public/lovable-uploads/973bd696-f3d4-44b8-ac1f-6b5da097933f.png" },
    { name: "Jones the Grocer", logo: "public/lovable-uploads/e04847a1-d76b-43cc-84b3-ac2918abf1de.png" },
    { name: "Fairgreen International School", logo: "public/lovable-uploads/c522c6f5-23d9-47bc-9d70-926710ca3bfa.png" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card opacity-0 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-40 transition-transform hover:scale-105"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-20 mb-4 object-contain"
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
