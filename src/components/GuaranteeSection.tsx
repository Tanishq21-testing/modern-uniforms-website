
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const GuaranteeSection = ({ scrollToConsultation }: { scrollToConsultation: () => void }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-red/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-full">
                      <ShieldCheck className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Service Guarantee</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    We stand behind the quality and craftsmanship of our uniform solutions with our comprehensive satisfaction guarantee.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">100% Satisfaction Guarantee</h3>
                        <p className="text-gray-600">If you're not completely satisfied with your uniforms, we'll make it right.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Quality Assurance</h3>
                        <p className="text-gray-600">Every uniform undergoes rigorous quality checks before delivery.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Timeliness Promise</h3>
                        <p className="text-gray-600">We deliver on schedule or we'll offer a discount on your order.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg"
                    onClick={scrollToConsultation}
                  >
                    Schedule Your Free Consultation
                  </Button>
                </div>
                
                <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6">Our Guarantee Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Quality Guarantee</h4>
                      <p className="text-gray-700">
                        We guarantee the quality of our workmanship and materials for 90 days from delivery. 
                        If any manufacturing defects occur during this period, we'll repair or replace the items at no cost.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Color Consistency</h4>
                      <p className="text-gray-700">
                        We guarantee color consistency across your entire uniform program. If colors don't match our 
                        approved samples, we'll replace the items free of charge.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Sizing Satisfaction</h4>
                      <p className="text-gray-700">
                        If standard sizes don't fit properly, we offer size exchanges within 30 days of delivery, 
                        ensuring your team has comfortable, well-fitting uniforms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Long-Term Support</h4>
                      <p className="text-gray-700">
                        As your uniform provider, we're committed to your long-term satisfaction with ongoing support, 
                        reorder assistance, and program optimization.
                      </p>
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

export default GuaranteeSection;
