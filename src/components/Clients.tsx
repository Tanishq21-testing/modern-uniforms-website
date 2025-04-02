
import { useEffect, useRef } from 'react';

const Clients = () => {
  const clients = [
    { name: "Hilton Dubai", logo: "public/lovable-uploads/2614de58-ea35-4170-9839-08bbbce4eeed.png" },
    { name: "Dubai Golf", logo: "public/lovable-uploads/770df8ec-a0bc-4a00-ba18-7d166c71a7f8.png" },
    { name: "Radisson Blu", logo: "public/lovable-uploads/194371d9-ffe8-4715-aadc-e3bb4d7f5aa2.png" },
    { name: "Little Bangkok", logo: "public/lovable-uploads/5c02239f-d1aa-4a39-8b4b-4f1ea4180b59.png" },
    { name: "Jones the Grocer", logo: "public/lovable-uploads/34708d28-a3c3-4142-8d90-f0def4d8b341.png" },
    { name: "Fairgreen International School", logo: "public/lovable-uploads/22a3dd05-a767-49f8-8ae6-5801a509bf62.png" },
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
