
import React from 'react';
import { Award, FileText, Star, Users } from 'lucide-react';

const AuthoritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trust Our Expertise</h2>
          <p className="text-xl text-gray-700">
            With over 50 years of experience, our team of experts provides unmatched uniform solutions
            backed by industry knowledge and a commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 text-brand-red rounded-full mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <p className="text-xl font-semibold mb-2">Years Experience</p>
            <p className="text-gray-600">Decades of expertise serving the UAE market</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full mb-6">
              <Users className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">200+</div>
            <p className="text-xl font-semibold mb-2">Enterprise Clients</p>
            <p className="text-gray-600">Trusted by leading businesses across the UAE</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 text-green-600 rounded-full mb-6">
              <Star className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">35+</div>
            <p className="text-xl font-semibold mb-2">Expert Team</p>
            <p className="text-gray-600">Dedicated professionals across design, production and service</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/10 text-purple-600 rounded-full mb-6">
              <Award className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">12+</div>
            <p className="text-xl font-semibold mb-2">Industry Awards</p>
            <p className="text-gray-600">Recognized for excellence in uniform solutions</p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-12">
            <h3 className="text-3xl font-bold text-center mb-12">Our Expert Process</h3>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-red flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2">Initial Consultation</h4>
                  <p className="text-gray-700">
                    Our senior consultants meet with you to understand your brand, requirements, and objectives.
                    We analyze your current uniform program and identify opportunities for improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2">Custom Design Development</h4>
                  <p className="text-gray-700">
                    Our design team creates custom uniform concepts that align with your brand identity and practical needs.
                    We present multiple options with detailed material specifications and visual mockups.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2">Production Excellence</h4>
                  <p className="text-gray-700">
                    We source the highest quality materials and work with trusted manufacturing partners.
                    Rigorous quality control ensures consistency and attention to detail across all items.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2">Ongoing Program Management</h4>
                  <p className="text-gray-700">
                    Your dedicated account manager oversees your uniform program, handling reorders, addressing concerns,
                    and ensuring continued satisfaction with quarterly reviews and program optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
