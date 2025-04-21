
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ResultsSection from '@/components/ResultsSection';
import OfferConsultation from '@/components/OfferConsultation';
import AddedValue from '@/components/AddedValue';
import SolutionComparison from '@/components/SolutionComparison';
import ResultsShowcase from '@/components/ResultsShowcase';
import AuthoritySection from '@/components/AuthoritySection';
import SocialProofSection from '@/components/SocialProofSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import PageFooter from '@/components/PageFooter';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { images } from '@/assets/images';

const LandingPage2 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* 1. Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Premium Uniforms for Leading Brands
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We've been helping UAE's top companies create distinctive brand identities through high-quality, custom uniform solutions for over 50 years.
                </p>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-brand-red mr-3"></div>
                    <span className="text-lg">Exceptional craftsmanship and attention to detail</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-brand-blue mr-3"></div>
                    <span className="text-lg">Premium fabrics sourced globally</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-brand-green mr-3"></div>
                    <span className="text-lg">Custom designs that enhance your brand</span>
                  </div>
                </div>
                <Link to="/services">
                  <button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-6 py-6 rounded-md inline-flex items-center gap-2">
                    Explore Our Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={images.uniformServices} 
                  alt="Uniform Services" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-8">Trusted By Leading UAE Companies</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
                <img 
                  src={images.clientLogos.jonesTheGrocer} 
                  alt="Jones The Grocer" 
                  className="w-full max-h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <img 
                  src={images.clientLogos.littleBangkok} 
                  alt="Little Bangkok" 
                  className="w-full max-h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <img 
                  src={images.clientLogos.fairgreen} 
                  alt="Fairgreen School" 
                  className="w-full max-h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <img 
                  src={images.clientLogos.aud} 
                  alt="American University Dubai" 
                  className="w-full max-h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <img 
                  src={images.clientLogos.hilton} 
                  alt="Hilton Hotel" 
                  className="w-full max-h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Offer Consultation */}
      <OfferConsultation ref={consultationFormRef} />

      {/* 3. Added Value / Problem */}
      <AddedValue />

      {/* 4. Solution / Why Our Company */}
      <SolutionComparison />

      {/* 5. Why This Solution Works */}
      <ResultsShowcase />

      {/* 6. Authority and Trust */}
      <AuthoritySection />

      {/* 7. Social Proof */}
      <SocialProofSection />

      {/* 8. Guarantee */}
      <GuaranteeSection scrollToConsultation={scrollToConsultation} />

      {/* Footer */}
      <PageFooter />

      {/* Floating Action Button for consultation */}
      <FloatingActionButton onClick={scrollToConsultation} />
    </div>
  );
};

export default LandingPage2;
