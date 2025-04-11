
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientList from '@/components/ClientList';
import ClientGallery from '@/components/ClientGallery';
import CallToAction from '@/components/CallToAction';

const Clients = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're proud to collaborate with leading businesses and organizations across the UAE,
              providing premium uniform solutions that enhance their brand identity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Clients List */}
      <ClientList />
      
      {/* Uniform Gallery */}
      <ClientGallery />
      
      {/* Link to Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">See Our Work in Action</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover how our premium uniform solutions have helped our clients elevate their brand presence.
              Explore our detailed case studies featuring real-world success stories.
            </p>
            <Link to="/case-studies">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-8 py-6">
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction scrollToConsultation={scrollToConsultation} />
      
      {/* Consultation Form Reference */}
      <div ref={consultationFormRef}>
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Enterprise Consultation</h2>
              <form className="space-y-4">
                {/* Form fields similar to Landing page */}
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">How can we help you?</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                  ></textarea>
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Clients;
