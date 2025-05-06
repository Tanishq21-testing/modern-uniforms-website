
import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/PageFooter";
import DesignEditor from "@/components/design-lab/DesignEditor";
import { useIsMobile } from '@/hooks/use-mobile';
import { Toaster } from "sonner";

const DesignLab = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Toaster position="bottom-right" closeButton richColors />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Design Lab
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create your custom hoodie with our interactive design tool. 
              Customize colors, add text, logos, or artwork and see your design come to life.
            </p>
          </div>
          
          <DesignEditor isMobile={isMobile} />
          
          <div className="mt-10 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
                <div className="font-bold mb-2">1. Design</div>
                <p className="text-gray-600">Choose colors, add text or upload your designs</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
                <div className="font-bold mb-2">2. Preview</div>
                <p className="text-gray-600">See your creation from different angles</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
                <div className="font-bold mb-2">3. Order</div>
                <p className="text-gray-600">Select size, quantity and complete your purchase</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default DesignLab;
