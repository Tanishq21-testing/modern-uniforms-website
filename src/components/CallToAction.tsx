
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { images } from '@/assets/images';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-blue to-brand-red rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Ready to Transform Your Brand?
              </h2>
              <p className="text-white/90 text-lg mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Contact us today to discuss how our premium uniform and custom fabric solutions can elevate your business image.
              </p>
              <div className="flex space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button className="bg-white text-brand-blue hover:bg-white/90 shadow-lg">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src={images.callToAction} 
                alt="Uniform Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-xs mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-xl text-white">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
