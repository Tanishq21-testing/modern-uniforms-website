
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '../styles/logo.css';

const Index = () => {
  const contactRef = useRef<HTMLElement>(null);
  
  const scrollToConsultation = () => {
    // Scroll to the Contact section which contains the consultation form
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        const viewportHeight = window.innerHeight;
        
        // If section is in viewport
        if (sectionTop < viewportHeight * 0.75 && sectionTop > -sectionHeight * 0.5) {
          section.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero scrollToConsultation={scrollToConsultation} />
      <About />
      <Services />
      <Clients />
      <WhyChooseUs />
      <Testimonials />
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
