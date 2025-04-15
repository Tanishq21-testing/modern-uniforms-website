
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { images } from '@/assets/images';

const ResultsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-sm font-medium text-brand-red mb-4">
              <Award className="h-4 w-4 mr-1" /> Premium Quality Uniforms
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Elevate Your Brand With</span>
              <span className="text-brand-red">Premium Quality Uniforms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              We craft exceptional uniforms that strengthen your brand identity and elevate your professional image, trusted by the UAE's leading businesses and institutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Custom Design Solutions</h3>
                  <p className="text-gray-600">Unique uniforms tailored to your brand's specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Premium Materials</h3>
                  <p className="text-gray-600">Durable, comfortable fabrics that last through daily wear</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Enterprise Scale Service</h3>
                  <p className="text-gray-600">Handling complete uniform programs for organizations of all sizes</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg rounded-md">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="col-span-2 overflow-hidden rounded-xl shadow-xl transform rotate-1 z-10">
              <img 
                src={images.servicesHero} 
                alt="Premium Uniform Service" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-lg transform -rotate-3 -mt-8 md:-mt-16 z-0">
              <img 
                src={images.clientLogos.jonesTheGrocer} 
                alt="Jones The Grocer" 
                className="w-full h-36 md:h-48 object-contain bg-white p-4"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-lg transform rotate-3 -mt-8 md:-mt-16 z-0">
              <img 
                src={images.schoolHoodie} 
                alt="School Uniforms" 
                className="w-full h-36 md:h-48 object-cover"
              />
            </div>
            
            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
