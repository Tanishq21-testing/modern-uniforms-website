
import { Button } from '@/components/ui/button';

const GreenFooterCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-800 to-green-700 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Make an Impact?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://forms.gle/XxVRfrRruEbX4xnY6" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-emerald-800 hover:bg-emerald-50 text-lg px-6 py-6">
                Refer a Client
              </Button>
            </a>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-6 py-6">
              Contact Us About a Partnership
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-6 py-6">
              Browse Sustainable Uniforms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenFooterCTA;
