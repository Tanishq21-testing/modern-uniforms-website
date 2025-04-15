
import React from 'react';
import { Button } from '@/components/ui/button';
import { images } from '@/assets/images';

const ResultsShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">See the Difference Quality Makes</h2>
          <p className="text-xl text-gray-700">
            Our clients experience tangible results that impact their business success. 
            Here's how our uniform solutions deliver measurable value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition hover:-translate-y-2 duration-300">
            <div className="text-5xl font-bold text-brand-red mb-4">94%</div>
            <p className="text-xl font-semibold mb-2">Customer Satisfaction</p>
            <p className="text-gray-600">Of clients report improved team morale after uniform program implementation</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition hover:-translate-y-2 duration-300">
            <div className="text-5xl font-bold text-brand-blue mb-4">3x</div>
            <p className="text-xl font-semibold mb-2">Longer Lifespan</p>
            <p className="text-gray-600">Our uniforms last three times longer than average market alternatives</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition hover:-translate-y-2 duration-300">
            <div className="text-5xl font-bold text-green-600 mb-4">91%</div>
            <p className="text-xl font-semibold mb-2">Brand Recognition</p>
            <p className="text-gray-600">Increase in customer brand recognition with custom uniform programs</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Success Stories</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={images.uniformServices}
                  alt="Little Bangkok Uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={images.clientLogos.littleBangkok}
                    alt="Little Bangkok Logo" 
                    className="h-12 mr-4"
                  />
                  <h4 className="text-2xl font-bold">Little Bangkok</h4>
                </div>
                <p className="text-gray-700 mb-6">
                  "Uniform Connect delivered stunning staff uniforms that perfectly capture our brand's 
                  essence. The quality and attention to detail have impressed both our staff and customers."
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm">Food & Beverage</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Restaurant Chain</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Staff Uniforms</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold">Results:</span>
                  <span className="ml-2">35% increase in staff satisfaction, improved brand consistency</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={images.schoolHoodie}
                  alt="Fairgreen School Uniform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={images.clientLogos.fairgreen}
                    alt="Fairgreen International School Logo" 
                    className="h-12 mr-4"
                  />
                  <h4 className="text-2xl font-bold">Fairgreen International School</h4>
                </div>
                <p className="text-gray-700 mb-6">
                  "The school uniforms from Uniform Connect have exceeded our expectations. The durability, 
                  comfort, and professional appearance have made a significant impact on our school community."
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm">Education</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">School Uniforms</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Custom Design</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold">Results:</span>
                  <span className="ml-2">90% parent satisfaction, simplified morning routines</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 text-lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
