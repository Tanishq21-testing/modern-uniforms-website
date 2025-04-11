
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Users, CheckCircle, BadgeCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientList from '@/components/ClientList';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { useRef } from 'react';
import { images } from '@/assets/images';

const Landing = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <img 
              src={images.logo} 
              alt="UniformConnect Logo" 
              className="h-12 w-auto"
            />
          </div>
          <Button 
            className="bg-brand-red hover:bg-brand-red/90 text-white"
            onClick={scrollToConsultation}
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section - Now using the Hero component */}
      <Hero scrollToConsultation={scrollToConsultation} />

      {/* Enterprise Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Uniform Solutions</h2>
            <p className="text-gray-600">
              Designed specifically for organizations with 50+ employees, our uniform programs deliver consistency, quality, and brand alignment at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue">
              <div className="flex items-center mb-4">
                <Building className="text-brand-blue mr-3 h-8 w-8" />
                <h3 className="text-xl font-semibold">Corporate & Institutions</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive uniform programs for corporate offices, educational institutions, and government organizations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-red">
              <div className="flex items-center mb-4">
                <Users className="text-brand-red mr-3 h-8 w-8" />
                <h3 className="text-xl font-semibold">Multi-Location Businesses</h3>
              </div>
              <p className="text-gray-600">
                Consistent uniform solutions for hospitality chains, restaurant groups, and retail businesses with multiple locations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-green">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-green mr-3 h-8 w-8" />
                <h3 className="text-xl font-semibold">Large Workforce Solutions</h3>
              </div>
              <p className="text-gray-600">
                Efficient uniform management systems for organizations with 50 to 5,000+ employees across different departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Using the WhyChooseUs component */}
      <WhyChooseUs />

      {/* Trusted By Section - Using the ClientList component with full client list */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Enterprise Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join these prestigious organizations who trust us with their uniform needs
          </p>
        </div>
        <ClientList />
        <div className="container mx-auto px-4 mt-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Become One of Our Trusted Clients</h3>
            <Button 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-8 py-6"
              onClick={scrollToConsultation}
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using the Testimonials component */}
      <Testimonials />

      {/* CallToAction Section - Using the CallToAction component */}
      <CallToAction scrollToConsultation={scrollToConsultation} />

      {/* CTA Section with Form */}
      <section className="py-16 bg-gray-900 text-white" ref={consultationFormRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Enterprise Consultation Today</h2>
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
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  required 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                />
              </div>
              <div>
                <label htmlFor="employees" className="block text-sm font-medium mb-1">Number of Employees</label>
                <select 
                  id="employees" 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <option value="50-100">50-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your uniform needs</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                ></textarea>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg">
                  Get Your Enterprise Consultation
                  <BadgeCheck className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src={images.logo} 
                alt="UniformConnect Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} UniformConnect. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
