import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '@/assets/images';

const ResultsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Premium Uniforms for Leading Brands
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We've been helping UAE's top companies create distinctive brand identities through high-quality, custom uniform solutions for over 50 years.
              </p>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-brand-red mr-3"></div>
                  <span className="text-lg">Exceptional craftsmanship and attention to detail</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-brand-blue mr-3"></div>
                  <span className="text-lg">Premium fabrics sourced globally</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-green mr-3"></div>
                  <span className="text-lg">Custom designs that enhance your brand</span>
                </div>
              </div>
              <Link to="/services">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-6 py-6">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={} 
                alt="about Image" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8">Trusted By Leading UAE Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <img 
                src={images.clientLogos.jonesTheGrocer} 
                alt="Jones The Grocer" 
                className="w-full max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={images.clientLogos.littleBangkok} 
                alt="Little Bangkok" 
                className="w-full max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={images.clientLogos.fairgreen} 
                alt="Fairgreen School" 
                className="w-full max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={images.clientLogos.aud} 
                alt="American University Dubai" 
                className="w-full max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={images.clientLogos.hilton} 
                alt="Hilton Hotel" 
                className="w-full max-h-32 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-brand-red mb-2">500+</div>
                <p className="text-xl">Enterprise Clients</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
                <p className="text-xl">Years of Excellence</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-brand-green mb-2">100K+</div>
                <p className="text-xl">Uniforms Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
