
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { useEffect, lazy, Suspense } from "react";
import { images } from "@/assets/images";

// Import critical routes immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazily load non-critical routes for better performance
const Landing = lazy(() => import("./pages/Landing"));
const LandingPage2 = lazy(() => import("./pages/LandingPage2"));
const LandingPage3 = lazy(() => import("./pages/LandingPage3"));
const LandingPage4 = lazy(() => import("./pages/LandingPage4"));
const ReferralForm = lazy(() => import("./pages/ReferralForm"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const Clients = lazy(() => import("./pages/Clients"));
const School = lazy(() => import("./pages/School"));
const Auth = lazy(() => import("./pages/Auth"));
const Products = lazy(() => import("./pages/Products"));
const DesignLab = lazy(() => import("./pages/DesignLab"));
const GreenInitiative = lazy(() => import("./pages/GreenInitiative"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Google Analytics page view tracking
function PageViewTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Safe check for gtag function existence
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  
  return null;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const App = () => {
  // Pre-load critical images to ensure they're available in production
  useEffect(() => {
    // Create an array of critical image paths to preload
    const criticalImages = [
      images.logo,
      images.heroImage,
      images.callToAction,
    ];

    // Preload only critical images
    criticalImages.forEach(url => {
      const img = new Image();
      img.src = url;
    });
    
    // Preload remaining images after a delay to prioritize critical content
    const timer = setTimeout(() => {
      const remainingImages = [
        images.servicesHero,
        images.uniformServices,
        ...Object.values(images.clientLogos).slice(0, 5), // Only preload first 5 client logos
      ];
      
      remainingImages.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <PageViewTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/landing" element={
                <Suspense fallback={<PageLoader />}>
                  <Landing />
                </Suspense>
              } />
              <Route path="/landing2" element={
                <Suspense fallback={<PageLoader />}>
                  <LandingPage2 />
                </Suspense>
              } />
              <Route path="/landing3" element={
                <Suspense fallback={<PageLoader />}>
                  <LandingPage3 />
                </Suspense>
              } />
              <Route path="/Graduation" element={
                <Suspense fallback={<PageLoader />}>
                  <LandingPage4 />
                </Suspense>
              } />
              <Route path="/refer-school" element={
                <Suspense fallback={<PageLoader />}>
                  <ReferralForm />
                </Suspense>
              } />
              <Route path="/about-us" element={
                <Suspense fallback={<PageLoader />}>
                  <AboutUs />
                </Suspense>
              } />
              <Route path="/case-studies" element={
                <Suspense fallback={<PageLoader />}>
                  <CaseStudies />
                </Suspense>
              } />
              <Route path="/contact-us" element={
                <Suspense fallback={<PageLoader />}>
                  <ContactUs />
                </Suspense>
              } />
              <Route path="/services" element={
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              } />
              <Route path="/clients" element={
                <Suspense fallback={<PageLoader />}>
                  <Clients />
                </Suspense>
              } />
              <Route path="/school" element={
                <Suspense fallback={<PageLoader />}>
                  <School />
                </Suspense>
              } />
              <Route path="/auth" element={
                <Suspense fallback={<PageLoader />}>
                  <Auth />
                </Suspense>
              } />
              <Route path="/products" element={
                <Suspense fallback={<PageLoader />}>
                  <Products />
                </Suspense>
              } />
              <Route path="/design-lab" element={
                <Suspense fallback={<PageLoader />}>
                  <DesignLab />
                </Suspense>
              } />
              <Route path="/green-initiative" element={
                <Suspense fallback={<PageLoader />}>
                  <GreenInitiative />
                </Suspense>
              } />
              <Route path="/thank-you" element={
                <Suspense fallback={<PageLoader />}>
                  <ThankYou />
                </Suspense>
              } />
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
