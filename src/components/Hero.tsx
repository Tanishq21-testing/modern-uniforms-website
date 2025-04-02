
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-brand-blue/20 animate-float"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-brand-red/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-brand-green/10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Premium <span className="text-brand-red">Uniforms</span> for 
            <span className="text-brand-blue"> Prestigious</span> Brands
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Manufacturing excellence since 1978. We deliver high-quality, custom-designed uniforms that reflect your brand's unique identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-lg px-8 py-6">
              Our Portfolio
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="absolute -left-16 top-0 w-32 h-32 rounded-full bg-brand-blue flex items-center justify-center animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-black mask-uniform"></div>
            </div>
            <div className="w-64 h-64 rounded-full bg-brand-red flex items-center justify-center">
              <div className="w-32 h-32 bg-black mask-uniform"></div>
            </div>
            <div className="absolute -right-8 bottom-4 w-24 h-24 rounded-full bg-brand-green flex items-center justify-center animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 bg-black mask-uniform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
