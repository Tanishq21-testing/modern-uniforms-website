
import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/PageFooter";
import DesignEditor from "@/components/design-lab/DesignEditor";
import { useIsMobile } from '@/hooks/use-mobile';

const DesignLab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            Design Lab
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your custom hoodie with our interactive design tool. Customize colors, add text, logos, or artwork.
          </p>
          
          <DesignEditor isMobile={isMobile} />
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default DesignLab;
