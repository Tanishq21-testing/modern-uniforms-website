
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GreenHero from '@/components/green-initiative/GreenHero';
import ReferralSection from '@/components/green-initiative/ReferralSection';
import CharityPartners from '@/components/green-initiative/CharityPartners';
import EcoFriendlyOptions from '@/components/green-initiative/EcoFriendlyOptions';
import PlantTreeProgram from '@/components/green-initiative/PlantTreeProgram';
import GreenFooterCTA from '@/components/green-initiative/GreenFooterCTA';

const GreenInitiative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Green Initiative | UniformConnect";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GreenHero />
        <ReferralSection />
        <CharityPartners />
        <EcoFriendlyOptions />
        <PlantTreeProgram />
        <GreenFooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default GreenInitiative;
