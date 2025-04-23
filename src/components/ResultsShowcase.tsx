
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '@/assets/images';

const ResultsShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results for Real Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our uniform solutions have helped businesses across the UAE enhance their brand image and employee satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.jonesthegrocercase} 
                  alt="Jones The Grocer Uniforms" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Jones The Grocer</h3>
                    <p className="text-gray-200">Premium Restaurant Uniforms</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  We've equipped all 16+ Jones The Grocer locations with premium uniforms that maintain consistency while enhancing their upscale brand image.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Hospitality</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Multi-Location</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Premium</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.uniformServices} 
                  alt="Little Bangkok Uniforms" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Little Bangkok</h3>
                    <p className="text-gray-200">Restaurant Chain Uniforms</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Created distinctive uniforms that reflect Little Bangkok's vibrant brand while ensuring durability and comfort for busy restaurant staff.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">F&B</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Staff Uniforms</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Brand-Aligned</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.schoolHoodie} 
                  alt="Fairgreen School Uniforms" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Fairgreen International School</h3>
                    <p className="text-gray-200">Educational Institution</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Developed premium hoodies and branded apparel for students and staff that embody the school's values while providing comfort and durability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Education</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Embroidery</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Premium</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/case-studies">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-6 py-6">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
