
import React from 'react';
import { images } from '@/assets/images';
import { Quote, Star } from 'lucide-react';

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trusted By Industry Leaders</h2>
          <p className="text-xl text-gray-700">
            Join these prestigious organizations who trust us with their uniform needs.
            Our clients span hospitality, education, food service, and corporate sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {[
            { name: "Hilton", logo: images.clientLogos.hilton },
            { name: "Dubai Golf", logo: images.clientLogos.dubaiGolf },
            { name: "Radisson Blu", logo: images.clientLogos.radissonBlu },
            { name: "Radisson Red", logo: images.clientLogos.radissonRed },
            { name: "Little Bangkok", logo: images.clientLogos.littleBangkok },
            { name: "Jones the Grocer", logo: images.clientLogos.jonesTheGrocer },
            { name: "Fairgreen International School", logo: images.clientLogos.fairgreen },
            { name: "Mezza House", logo: images.clientLogos.mezzaHouse },
            { name: "GEMS Education", logo: images.clientLogos.gems },
            { name: "Raffles", logo: images.clientLogos.raffles },
            { name: "Khansaheb", logo: images.clientLogos.khansaheb },
            { name: "Dubai Creek", logo: images.clientLogos.dubaiCreek },
          ].slice(0, 12).map((client, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-28 shadow-md">
              <img 
                src={client.logo} 
                alt={`${client.name} Logo`} 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 text-brand-red opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              <div className="relative">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic">
                  "Uniform Connect has been our trusted partner for over 5 years. Their attention to detail, 
                  quality of materials, and consistent delivery have made them invaluable to our hotel operations. 
                  The staff uniforms they provide perfectly represent our brand and receive compliments from guests."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DH
                  </div>
                  <div>
                    <p className="font-bold">David Henderson</p>
                    <p className="text-gray-600">Operations Director, Hilton Dubai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 text-brand-red opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              <div className="relative">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic">
                  "As an educational institution, we needed unified hoodies that would be practical, comfortable, and 
                  represent our schools brand and indentities. Uniform Connect delivered exactly what we needed, with exceptional 
                  customer service throughout the process. The quality of the school uniforms has impressed 
                  parents and students alike."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SR
                  </div>
                  <div>
                    <p className="font-bold">Sarah Reynolds</p>
                    <p className="text-gray-600">Principal, Fairgreen International School</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 text-brand-red opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              <div className="relative">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic">
                  "Finding a uniform provider that could accommodate our multi-location restaurant chain was 
                  challenging until we partnered with Uniform Connect. They simplified our ordering process, 
                  ensured consistent quality across all locations, and provided uniforms that our staff 
                  actually enjoy wearing."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AK
                  </div>
                  <div>
                    <p className="font-bold">Ahmed Khan</p>
                    <p className="text-gray-600">Operations Manager, Little Bangkok</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 text-brand-red opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              <div className="relative">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic">
                  "The dedicated account management and attention to detail that Uniform Connect provides 
                  has been exceptional. They understand our brand and consistently deliver uniforms that 
                  reflect our premium image. The quality and durability are unmatched in the market."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MJ
                  </div>
                  <div>
                    <p className="font-bold">Michael Johnson</p>
                    <p className="text-gray-600">Brand Director, Jones the Grocer</p>
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

export default SocialProofSection;
