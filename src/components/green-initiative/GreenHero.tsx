
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const GreenHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-900 to-green-700">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Green Initiative Background"
          className="w-full h-full object-cover opacity-30"
          priority={true}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Green Initiative – Wear with Purpose, Give with Pride
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            At UniformConnect, every order is a chance to do good. Our uniforms aren't just worn—they give back.
          </p>
          
          <Button 
            className="bg-white text-emerald-800 hover:bg-emerald-50 text-lg px-8 py-6 rounded-md shadow-lg transform transition-all hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            Refer & Make an Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GreenHero;
