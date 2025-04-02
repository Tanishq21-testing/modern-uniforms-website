
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      id: 'embroidery',
      title: 'Embroidery',
      description: 'High-quality embroidery that brings your logos and designs to life with precision and vibrant colors.',
      className: 'embroidery',
      delay: '0.2s',
    },
    {
      id: 'printing',
      title: 'Screen Printing',
      description: 'Professional screen printing services for durable, high-quality designs that withstand regular washing and wear.',
      className: 'printing',
      delay: '0.4s',
    },
    {
      id: 'tailoring',
      title: 'Tailoring',
      description: 'Custom tailoring to ensure each uniform fits perfectly, enhancing comfort and professional appearance.',
      className: 'tailoring',
      delay: '0.6s',
    },
    {
      id: 'speed',
      title: 'Speed',
      description: 'Quick turnaround times without compromising on quality, meeting your deadlines with exceptional results.',
      className: 'speed',
      delay: '0.8s',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 150);
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
    <section id="services" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of services to meet all your uniform needs with excellence and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${service.className} opacity-0`}
              style={{ animationDelay: service.delay }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  service.id === 'embroidery' ? 'bg-brand-blue/10' : 
                  service.id === 'printing' ? 'bg-brand-red/10' : 
                  service.id === 'tailoring' ? 'bg-brand-green/10' : 
                  'bg-brand-red/10'
                }`}>
                  <div className={`w-8 h-8 ${
                    service.id === 'embroidery' ? 'text-brand-blue' : 
                    service.id === 'printing' ? 'text-brand-red' : 
                    service.id === 'tailoring' ? 'text-brand-green' : 
                    'text-brand-red'
                  }`}>
                    {/* SVG placeholder */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" className="fill-current" opacity="0.2" />
                      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" className="fill-current" />
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" className="fill-current" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                className={`border ${
                  service.id === 'embroidery' ? 'border-brand-blue text-brand-blue hover:bg-brand-blue/10' : 
                  service.id === 'printing' ? 'border-brand-red text-brand-red hover:bg-brand-red/10' : 
                  service.id === 'tailoring' ? 'border-brand-green text-brand-green hover:bg-brand-green/10' : 
                  'border-brand-red text-brand-red hover:bg-brand-red/10'
                }`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
