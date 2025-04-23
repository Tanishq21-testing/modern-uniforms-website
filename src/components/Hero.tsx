
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';

const Hero = ({ scrollToConsultation }: { scrollToConsultation: () => void }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-brand-blue/20 animate-float"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-brand-red/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-brand-green/10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Premium <span className="text-brand-red">Uniforms</span> for 
            <span className="text-brand-blue"> Enterprise</span> Organizations
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Serving organizations with 50+ employees since 1978. We deliver high-quality, custom-designed uniforms that maintain consistency across multiple locations and departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-brand-red hover:bg-brand-red/90 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
              onClick={scrollToConsultation}
            >
              Get Enterprise Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
              View Enterprise Case Studies
            </Button>
          </div>
          
          <div className="mt-8 flex items-center">
            <BadgeCheck className="text-brand-green h-5 md:h-6 w-5 md:w-6 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm md:text-base">Trusted by leading organizations across the UAE</span>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
          <img 
            src={images.heroImage} 
            alt="UniformConnect Concept" 
            className="w-full h-auto max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
