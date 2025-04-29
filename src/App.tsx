
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { useEffect } from "react";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import LandingPage2 from "./pages/LandingPage2";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import School from "./pages/School";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import DesignLab from "./pages/DesignLab";
import NotFound from "./pages/NotFound";

// Setup image mappings for easier reference
import { images } from "@/assets/images";

const queryClient = new QueryClient();

const App = () => {
  // Pre-load images to ensure they're available in production
  useEffect(() => {
    // Create an array of all image paths to preload
    const imageUrls = [
      images.logo,
      images.heroImage,
      images.servicesHero,
      images.uniformServices,
      images.callToAction,
      ...Object.values(images.clientLogos)
    ];

    // Preload all images
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/landing2" element={<LandingPage2 />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/school" element={<School />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/products" element={<Products />} />
              <Route path="/design-lab" element={<DesignLab />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
