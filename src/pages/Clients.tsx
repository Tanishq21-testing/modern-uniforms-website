
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientList from '@/components/ClientList';
import ClientGallery from '@/components/ClientGallery';
import CallToAction from '@/components/CallToAction';

const Clients = () => {
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

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Clients;
