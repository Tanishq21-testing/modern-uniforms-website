
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { images } from '@/assets/images';

const SolutionComparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Uniform Connect?</h2>
          <p className="text-xl text-gray-700">
            We differentiate ourselves with premium quality, dedicated service, and comprehensive solutions
            that meet the unique needs of enterprises across the UAE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={images.callToAction} 
              alt="Premium Uniform Service" 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">The Uniform Connect Difference</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-red/10 p-3 rounded-full mr-4 mt-1">
                  <Check className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Premium Quality Materials</h4>
                  <p className="text-gray-700">
                    We source the finest fabrics and materials that withstand the demands of daily use while providing superior comfort.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-red/10 p-3 rounded-full mr-4 mt-1">
                  <Check className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Unparalleled Expertise In The Industry</h4>
                  <p className="text-gray-700">
                    Our team brings decades of experience creating uniforms that enhance brand identity while ensuring functionality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-red/10 p-3 rounded-full mr-4 mt-1">
                  <Check className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">End-to-End Enterprise Solutions</h4>
                  <p className="text-gray-700">
                    From initial design to delivery and reordering, we handle every aspect of your uniform program.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg">
              Learn More About Our Approach
            </Button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">How We Compare</h3>
          
          <div className="relative overflow-x-auto shadow-xl rounded-xl">
            <table className="w-full text-left">
              <thead className="text-white bg-brand-blue">
                <tr>
                  <th className="p-6 text-lg font-semibold">Features</th>
                  <th className="p-6 text-lg font-semibold text-center">Uniform Connect</th>
                  <th className="p-6 text-lg font-semibold text-center">Generic Providers</th>
                </tr>
              </thead>
              
              <tbody>
                <tr className="bg-white">
                  <td className="p-6 border-b">Custom Design Services</td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="bg-gray-50">
                  <td className="p-6 border-b">Dedicated Account Manager</td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="bg-white">
                  <td className="p-6 border-b">Premium Material Selection</td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="bg-white">
                  <td className="p-6 border-b">Sustainable Material Options</td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="bg-gray-50">
                  <td className="p-6 border-b">Years Of Experience</td>
                  <td className="p-6 border-b text-center">
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  </td>
                  <td className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  </td>
                </tr>
        
                
                <tr className="bg-gray-50">
                  <td className="p-6">Satisfaction Guarantee</td>
                  <td className="p-6 text-center font-bold text-brand-red">100%</td>
                  <td className="p-6 text-center text-gray-500">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionComparison;
