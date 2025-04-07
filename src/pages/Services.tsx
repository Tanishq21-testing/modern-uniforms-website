
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesOfferings from '@/components/ServicesOfferings';
import AdditionalServices from '@/components/AdditionalServices';
import CallToAction from '@/components/CallToAction';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <ServicesHero />
        <ServicesOfferings />
        <AdditionalServices />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
