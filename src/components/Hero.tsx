
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';
import { useIsMobile } from '@/hooks/use-mobile';
import { lazy, Suspense } from 'react';

const Hero = ({ scrollToConsultation }: { scrollToConsultation: () => void }) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-24 pb-8 md:pb-12">
      {/* Background Elements - Only render on desktop for better mobile performance */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-brand-blue/20 animate-float"></div>
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-brand-red/10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-brand-green/10 animate-float" style={{ animationDelay: '1s' }}></div>
        </>
      )}
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Premium <span className="text-brand-red">Uniforms</span> for 
            <span className="text-brand-blue"> Enterprise</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Serving organizations with 50+ employees since 1978. We deliver high-quality, custom-designed uniforms that maintain consistency across multiple locations and departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="bg-brand-red hover:bg-brand-red/90 text-white text-sm px-3 py-1.5 h-auto"
              onClick={scrollToConsultation}
            >
              Get Enterprise Consultation
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-sm px-3 py-1.5 h-auto">
              View Enterprise Case Studies
            </Button>
          </div>
          
          <div className="mt-6 md:mt-8 flex items-center">
            <BadgeCheck className="text-brand-green h-5 md:h-6 w-5 md:w-6 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm md:text-base">Trusted by leading organizations across the UAE</span>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
          <img 
            src={images.heroImage} 
            alt="UniformConnect Concept" 
            className="w-full h-auto max-w-md md:max-w-full"
            loading="eager" // Load hero image immediately as it's above the fold
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
