
import React from 'react';
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';

const ServicesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Uniform <span className="text-brand-red">Services</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We create high-quality custom uniforms for a wide variety of companies throughout the UAE, 
                combining craftsmanship with attention to detail for exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <img 
                  src={images.servicesHero} 
                  alt="Uniform Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <p className="text-brand-blue font-bold text-xl">50+ Years</p>
                  <p className="text-gray-600">of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
