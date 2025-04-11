
import { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EnterpriseFeatures from '@/components/EnterpriseFeatures';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientList from '@/components/ClientList';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import ConsultationForm from '@/components/ConsultationForm';
import PageFooter from '@/components/PageFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* Hero Section */}
      <Hero scrollToConsultation={scrollToConsultation} />

      {/* Enterprise Features Section */}
      <EnterpriseFeatures />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Trusted By Section */}
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* CallToAction Section */}
      <CallToAction scrollToConsultation={scrollToConsultation} />

      {/* CTA Section with Form */}
      <ConsultationForm ref={consultationFormRef} />

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Landing;
