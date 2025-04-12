
import { useRef } from 'react';
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
      <ResultsSection />

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
