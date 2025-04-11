
import React, { useEffect, useRef, useState } from 'react';
import { images } from '@/assets/images';
import { Building, Users, GraduationCap, Utensils, BadgeCheck } from 'lucide-react';

const ClientList = () => {
  const clients = [
    { name: "Hilton", logo: images.clientLogos.hilton, category: "Hospitality" },
    { name: "Dubai Golf", logo: images.clientLogos.dubaiGolf, category: "Sports" },
    { name: "Radisson Blu", logo: images.clientLogos.radissonBlu, category: "Hospitality" },
    { name: "Radisson Red", logo: images.clientLogos.radissonRed, category: "Hospitality" },
    { name: "Little Bangkok", logo: images.clientLogos.littleBangkok, category: "Food & Beverage" },
    { name: "Jones the Grocer", logo: images.clientLogos.jonesTheGrocer, category: "Food & Beverage" },
    { name: "Fairgreen International School", logo: images.clientLogos.fairgreen, category: "Education" },
    { name: "Mezza House", logo: images.clientLogos.mezzaHouse, category: "Food & Beverage" },
    { name: "GEMS Education", logo: images.clientLogos.gems, category: "Education" },
    { name: "Raffles", logo: images.clientLogos.raffles, category: "Hospitality" },
    { name: "Khansaheb", logo: images.clientLogos.khansaheb, category: "Construction" },
    { name: "Emirates International School", logo: images.clientLogos.eis, category: "Education" },
    { name: "Dubai International Academy", logo: images.clientLogos.dia, category: "Education" },
    { name: "American University in Dubai", logo: images.clientLogos.aud, category: "Education" },
    { name: "Dubai Creek", logo: images.clientLogos.dubaiCreek, category: "Hospitality" },
    { name: "JC", logo: images.clientLogos.jc, category: "Business" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(clients.map(client => client.category)));
  
  const filteredClients = activeCategory 
    ? clients.filter(client => client.category === activeCategory) 
    : clients;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hospitality":
        return <Building className="mr-1 h-4 w-4" />;
      case "Food & Beverage":
        return <Utensils className="mr-1 h-4 w-4" />;
      case "Education":
        return <GraduationCap className="mr-1 h-4 w-4" />;
      default:
        return <Users className="mr-1 h-4 w-4" />;
    }
  };

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
    <section className="py-12 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === null
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              <div className="flex items-center">
                <BadgeCheck className="mr-1 h-4 w-4" />
                <span>All Enterprise Clients</span>
              </div>
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  activeCategory === category
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <div className="flex items-center">
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {filteredClients.map((client, index) => (
            <div 
              key={index} 
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform hover:shadow-xl hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="max-w-full max-h-20 object-contain"
                />
              </div>
              <p className="text-center font-medium text-gray-700">{client.name}</p>
              <div className="flex items-center mt-2">
                {getCategoryIcon(client.category)}
                <p className="text-center text-sm text-gray-500">{client.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            ...and many more satisfied enterprise clients throughout the UAE and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientList;
