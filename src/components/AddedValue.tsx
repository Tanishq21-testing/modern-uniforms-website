
import React from 'react';
import { ArrowRight, Heart, TrendingUp, Users } from 'lucide-react';

const AddedValue = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Uniform Quality Matters</h2>
          <p className="text-xl text-gray-700">
            Your team's uniforms represent your brand in every interaction. High-quality, 
            well-designed uniforms deliver tremendous value to your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-brand-red/10 p-4 rounded-full inline-block mb-6">
              <Heart className="h-8 w-8 text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enhanced Brand Image</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-red mr-2 flex-shrink-0" />
                <p className="text-gray-700">Reinforces brand recognition</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-red mr-2 flex-shrink-0" />
                <p className="text-gray-700">Projects professionalism to clients</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-red mr-2 flex-shrink-0" />
                <p className="text-gray-700">Creates a cohesive visual identity</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-brand-blue/10 p-4 rounded-full inline-block mb-6">
              <Users className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Improved Team Culture</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                <p className="text-gray-700">Boosts employee morale and pride</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                <p className="text-gray-700">Creates sense of belonging</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                <p className="text-gray-700">Eliminates dress code confusion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-green-600/10 p-4 rounded-full inline-block mb-6">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Growth</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Stronger customer trust and loyalty</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Increased referrals and growth</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Improved customer experience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-brand-blue to-brand-red p-[1px] rounded-2xl">
            <div className="bg-white p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">The Cost of Poor Quality Uniforms</h3>
                  <p className="text-gray-700 mb-6">
                    Cheap, poorly made uniforms might seem cost-effective initially, but they lead to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-gray-700">Frequent replacements due to wear and tear</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-gray-700">Employee discomfort and reduced productivity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-gray-700">Inconsistent branding and unprofessional image</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h4 className="text-xl font-bold mb-4 text-center">The Real Value of Premium Uniforms</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                        <div>
                          <p className="font-semibold">Long-term durability</p>
                          <p className="text-sm text-gray-600">Premium fabrics last 3-4x longer than budget options</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                        <div>
                          <p className="font-semibold">Employee satisfaction</p>
                          <p className="text-sm text-gray-600">Comfortable, well-fitting uniforms increase morale</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                        <div>
                          <p className="font-semibold">Brand consistency</p>
                          <p className="text-sm text-gray-600">Colors stay vibrant, logos remain intact</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedValue;
