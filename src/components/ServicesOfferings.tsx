
import React from 'react';
import { Shirt, Scissors, Pen, Umbrella } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOfferings = () => {
  const services = [
    {
      id: 'embroidery',
      title: 'Embroidery',
      description: 'High-quality embroidery that brings your logos and designs to life with precision and vibrant colors.',
      icon: <Pen size={32} />,
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      hoverColor: 'hover:bg-brand-blue/10',
      borderColor: 'border-brand-blue',
      delay: '0.2s',
    },
    {
      id: 'printing',
      title: 'Screen Printing',
      description: 'Professional screen printing services for durable, high-quality designs that withstand regular washing and wear.',
      icon: <Pen size={32} />,
      color: 'text-brand-red',
      bgColor: 'bg-brand-red/10',
      hoverColor: 'hover:bg-brand-red/10',
      borderColor: 'border-brand-red',
      delay: '0.4s',
    },
    {
      id: 'embossing',
      title: 'Embossing',
      description: 'Create textured, raised designs that add a sophisticated and premium feel to your branded uniforms and products.',
      icon: <Pen size={32} />,
      color: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
      hoverColor: 'hover:bg-brand-green/10',
      borderColor: 'border-brand-green',
      delay: '0.6s',
    },
    {
      id: 'tailoring',
      title: 'Tailoring',
      description: 'Custom tailoring to ensure each uniform fits perfectly, enhancing comfort and professional appearance.',
      icon: <Scissors size={32} />,
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      hoverColor: 'hover:bg-brand-blue/10',
      borderColor: 'border-brand-blue',
      delay: '0.8s',
    },
  ];

  return (
    <section id="core-services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Services</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            We offer comprehensive premium services to customize your uniforms with the highest quality standards and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card opacity-0 animate-fade-in`}
              style={{ animationDelay: service.delay }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.bgColor}`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                className={`border ${service.borderColor} ${service.color} ${service.hoverColor}`}
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

export default ServicesOfferings;
