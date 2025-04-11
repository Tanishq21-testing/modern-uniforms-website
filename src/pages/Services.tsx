
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesOfferings from '@/components/ServicesOfferings';
import AdditionalServices from '@/components/AdditionalServices';
import CallToAction from '@/components/CallToAction';

const Services = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <ServicesHero />
        <ServicesOfferings />
        <AdditionalServices />
        <CallToAction scrollToConsultation={scrollToConsultation} />
        
        {/* Consultation Form Section */}
        <div ref={consultationFormRef}>
          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Request Service Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                    >
                      <option value="">Select a service</option>
                      <option value="uniforms">Custom Uniforms</option>
                      <option value="embroidery">Embroidery</option>
                      <option value="printing">Screen Printing</option>
                      <option value="tailoring">Tailoring</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 rounded-md text-lg">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
