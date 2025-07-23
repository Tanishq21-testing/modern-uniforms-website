import { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { ArrowRight, Check, Star, Shield, Clock, Users, Award, Building, FileText, Settings, MessageCircle, Scissors, Palette, Zap, Target, Factory, Sparkles, Heart, TrendingUp, ChevronLeft, ChevronRight, Truck, Eye, Globe, HeartHandshake } from 'lucide-react';
import { images } from '@/assets/images';
import OptimizedConsultationForm from '@/components/OptimizedConsultationForm';

const LandingPage3 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Auto-advance carousel for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowcaseIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Showcase images for 3D carousel
  const showcaseImages = [
    { src: images.uniformServices, alt: "Chef uniforms" },
    { src: images.Hoodieimage, alt: "Custom hoodies" },
    { src: images.schoolHoodie, alt: "School uniforms" },
    { src: images.JCProducts, alt: "Hospitality staff" },
    { src: images.Tshirt, alt: "Custom T-shirts" },
    { src: images.Varsityjacket, alt: "Varsity jackets" }
  ];

  const nextShowcase = () => {
    setCurrentShowcaseIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevShowcase = () => {
    setCurrentShowcaseIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  // Logo carousel data
  const logoCarousel = [
    images.clientLogos.hilton,
    images.clientLogos.jonesTheGrocer,
    images.clientLogos.radissonRed,
    images.clientLogos.raffles,
    images.clientLogos.gems,
    images.clientLogos.khansaheb,
    images.clientLogos.littleBangkok,
    images.clientLogos.fairgreen,
    images.clientLogos.mezzaHouse,
    images.clientLogos.aud,
    images.clientLogos.dubaiCreek,
    images.clientLogos.jc,
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Not Covering Your Team<br />
                    But <span className="bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Reflecting Your Brand</span>
                  </h1>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg font-medium text-gray-700">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Service Awareness Icons - Sharper text */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Premium Quality</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Account Manager</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Fast Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <HeartHandshake className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Ongoing Support</span>
                  </div>
                </div>

                {/* Process Steps - Exact smooth curved arrows from reference */}
                <div className="relative py-6">
                  <div className="flex items-center justify-center max-w-3xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold mb-3">1</div>
                      <span className="text-xs font-semibold text-gray-800 max-w-20 leading-tight">Initial Consultation</span>
                    </div>
                    
                    {/* Premium Curved Arrow 1 - Upward curve */}
                    <div className="flex items-center justify-center mx-4">
                      <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-700">
                        <path d="M10 20 Q 50 8 90 20" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#premiumArrow1)"/>
                        <defs>
                          <marker id="premiumArrow1" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
                            <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold mb-3">2</div>
                      <span className="text-xs font-semibold text-gray-800 max-w-20 leading-tight">Customisation</span>
                    </div>
                    
                    {/* Premium Curved Arrow 2 - Downward curve */}
                    <div className="flex items-center justify-center mx-4">
                      <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-700">
                        <path d="M10 20 Q 50 32 90 20" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#premiumArrow2)"/>
                        <defs>
                          <marker id="premiumArrow2" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
                            <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold mb-3">3</div>
                      <span className="text-xs font-semibold text-gray-800 max-w-20 leading-tight">Production</span>
                    </div>
                    
                    {/* Premium Curved Arrow 3 - Upward curve */}
                    <div className="flex items-center justify-center mx-4">
                      <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-700">
                        <path d="M10 20 Q 50 8 90 20" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#premiumArrow3)"/>
                        <defs>
                          <marker id="premiumArrow3" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
                            <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold mb-3">4</div>
                      <span className="text-xs font-semibold text-gray-800 max-w-20 leading-tight">Ongoing Program</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                  <div className="space-y-4 sm:space-y-6">
                    <img 
                      src={images.uniformServices} 
                      alt="Chef uniforms" 
                      className="rounded-2xl sm:rounded-3xl w-full h-32 sm:h-48 object-cover shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]" 
                    />
                    <img 
                      src={images.Hoodieimage} 
                      alt="Custom hoodies" 
                      className="rounded-2xl sm:rounded-3xl w-full h-24 sm:h-32 object-cover shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]" 
                    />
                  </div>
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    <img 
                      src={images.schoolHoodie} 
                      alt="School uniforms" 
                      className="rounded-2xl sm:rounded-3xl w-full h-24 sm:h-32 object-cover shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]" 
                    />
                    <img 
                      src={images.JCProducts} 
                      alt="Hospitality staff" 
                      className="rounded-2xl sm:rounded-3xl w-full h-32 sm:h-48 object-cover shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]" 
                    />
                  </div>
                  
                  {/* Clean text block under pictures */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-sm font-bold text-gray-700">50+ Years Experience</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">GCC READY - Dubai Based</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Centered CTA Section - Tighter spacing */}
            <div className="mt-12 text-center">
              <div className="space-y-4">
                {/* Clean price text without box */}
                <div className="text-base font-bold text-red-600">300 AED / 100 pieces</div>
                
                {/* Centered CTA Button */}
                <div>
                  <button 
                    className="relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden group" 
                    onClick={scrollToConsultation}
                  >
                    <span className="relative z-10">Get Custom Uniform</span>
                  </button>
                </div>
                
                {/* Subtle supporting text on one line */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-light">Tailored to your brand identity • Free Design Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ 3D Carousel Section */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 fill-yellow-400 mr-2 sm:mr-3 last:mr-0" />
                ))}
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                HIGH PERSONALISATION
              </h2>
              <div className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
                <span className="text-blue-400">COLOR</span> & <span className="text-red-500">CUT</span> & <span className="text-green-400">DESIGN</span>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] mb-6 sm:mb-8 perspective-1000">
              <button 
                onClick={prevShowcase}
                className="absolute left-2 sm:left-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </button>
              
              <button 
                onClick={nextShowcase}
                className="absolute right-2 sm:right-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </button>
              
              <div className="relative w-full h-full flex items-center justify-center">
                {showcaseImages.map((image, index) => {
                  const offset = index - currentShowcaseIndex;
                  const absOffset = Math.abs(offset);
                  
                  if (absOffset > 2) return null;
                  
                  if (offset === 0) {
                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-700 ease-in-out cursor-pointer z-40"
                        onClick={() => setCurrentShowcaseIndex(index)}
                      >
                        <div className="relative group">
                          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-red-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                          <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm"></div>
                          
                          <div className="relative">
                            <img 
                              src={image.src}
                              alt={image.alt}
                              className="w-48 sm:w-64 h-60 sm:h-80 object-cover rounded-2xl shadow-2xl border border-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500"
                              style={{
                                aspectRatio: '3/4'
                              }}
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end">
                              <div className="p-3 sm:p-4 text-center w-full">
                                <h3 className="text-sm sm:text-lg font-bold text-white drop-shadow-lg">{image.alt}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  const isLeft = offset < 0;
                  const zIndex = 30 - absOffset;
                  const scale = Math.max(0.6, 1 - (absOffset * 0.25));
                  const opacity = Math.max(0.3, 1 - (absOffset * 0.4));
                  const translateX = isLeft ? -80 - (absOffset * 60) : 80 + (absOffset * 60);
                  const translateY = absOffset * 20;
                  const rotateY = isLeft ? -12 - (absOffset * 8) : 12 + (absOffset * 8);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-700 ease-in-out cursor-pointer hover:scale-105 hover:opacity-70"
                      style={{
                        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
                        opacity,
                        zIndex,
                        transformStyle: 'preserve-3d'
                      }}
                      onClick={() => setCurrentShowcaseIndex(index)}
                    >
                      <div className="relative">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-40 sm:w-56 h-52 sm:h-72 object-cover rounded-xl shadow-xl border border-white/10"
                          style={{
                            aspectRatio: '3/4',
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowcaseIndex(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentShowcaseIndex
                      ? 'bg-white shadow-lg scale-125'
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Customization Table Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">CUSTOMIZATION</h2>
              <p className="text-lg sm:text-xl text-gray-300">Make it uniquely yours</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              {/* Left side - Customization table */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">What Can I Customise?</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/20 pb-4 space-y-2 sm:space-y-0">
                      <span className="font-bold text-base sm:text-lg">GARMENT TYPE</span>
                      <span className="text-gray-300 text-sm sm:text-base">T-shirts, hoodies, chef coats, pants</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/20 pb-4 space-y-2 sm:space-y-0">
                      <span className="font-bold text-base sm:text-lg">FABRIC & COLOR</span>
                      <span className="text-gray-300 text-sm sm:text-base">Wide range of materials and color tones</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/20 pb-4 space-y-2 sm:space-y-0">
                      <span className="font-bold text-base sm:text-lg">DECORATION</span>
                      <span className="text-gray-300 text-sm sm:text-base">Embroidery or screen printing</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/20 pb-4 space-y-2 sm:space-y-0">
                      <span className="font-bold text-base sm:text-lg">FIT & CUT</span>
                      <span className="text-gray-300 text-sm sm:text-base">Unisex, tailored, relaxed</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                      <span className="font-bold text-base sm:text-lg">YOUR DESIGN</span>
                      <span className="text-gray-300 text-sm sm:text-base">Logos, slogans, patterns</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - T-shirt mockup with color-coded callouts */}
              <div className="flex justify-center">
                <div className="relative max-w-md mx-auto">
                  <img 
                    src={images.Tshirt} 
                    alt="Customizable uniform" 
                    className="w-full max-w-lg rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ 100% Branded Clothes
                  </div>
                  
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ Durable weave
                  </div>
                  
                  <div className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ Holds shape after 30+ washes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Brand Identity Blocks Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">BUILD YOUR BRAND</h2>
              <p className="text-lg sm:text-xl text-gray-300">Three pillars of uniform excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Brand Identity Block - Blue */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 group">
                <Building className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Brand Identity</h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  Professional uniforms that reflect your company's values and create lasting impressions with clients and customers.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-blue-200" />
                    <span className="text-blue-200 text-xs sm:text-sm">Custom Logo Integration</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-blue-200" />
                    <span className="text-blue-200 text-xs sm:text-sm">Brand Color Matching</span>
                  </div>
                </div>
              </div>

              {/* Team Culture Block - Red */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 group">
                <Users className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Team Culture</h3>
                <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                  Foster unity and pride among your team with matching uniforms that enhance collaboration and professional identity.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-red-200" />
                    <span className="text-red-200 text-xs sm:text-sm">Team Unity</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-red-200" />
                    <span className="text-red-200 text-xs sm:text-sm">Professional Appearance</span>
                  </div>
                </div>
              </div>

              {/* Long-Term Growth Block - Green */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 group">
                <TrendingUp className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Long-Term Growth</h3>
                <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                  Invest in quality uniforms that grow with your business, offering durability and style that lasts for years.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-green-200" />
                    <span className="text-green-200 text-xs sm:text-sm">Scalable Solutions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-green-200" />
                    <span className="text-green-200 text-xs sm:text-sm">Future-Ready Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Pricing Section - Light Background */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">PRICING</h2>
              <p className="text-lg sm:text-xl text-gray-600">Premium quality, competitive pricing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Hoodieimage} alt="Hoodies" className="w-full h-32 sm:h-48 object-cover rounded-2xl mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">HOODIES</h3>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">100 AED</div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Logo + Fabric Choice</p>
                <p className="text-xs sm:text-sm text-gray-500">Popular for Teams</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Varsityjacket} alt="Jackets" className="w-full h-32 sm:h-48 object-cover rounded-2xl mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">JACKETS</h3>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">150 AED</div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Tailored Branding</p>
                <p className="text-xs sm:text-sm text-gray-500">Great for Front Desk</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Tshirt} alt="T-Shirts" className="w-full h-32 sm:h-48 object-cover rounded-2xl mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">T-SHIRTS</h3>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">50 AED</div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Print or embroidery</p>
                <p className="text-xs sm:text-sm text-gray-500">Fast Delivery Items</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 w-full sm:w-auto" 
                onClick={scrollToConsultation}
              >
                Order Now
                <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6 inline" />
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3">Cut-Color-Decoration defined with you • we respond under 24H</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Product Quality Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">PREMIUM QUALITY</h2>
              <p className="text-lg sm:text-xl text-gray-300">Craftsmanship that speaks for your brand</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              {/* Left side - Quality icons */}
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Sparkles className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Premium Fabrics</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Highest quality materials sourced globally</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Target className="w-10 sm:w-12 h-10 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Detail Finishing</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Precision in every stitch and seam</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Scissors className="w-10 sm:w-12 h-10 sm:h-12 text-red-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Expert Stitching</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Master craftsmen with decades of experience</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Shield className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Wash-Tested</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Durability tested through 100+ wash cycles</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Zap className="w-10 sm:w-12 h-10 sm:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Perfect Fit Cutting</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Tailored patterns for optimal comfort</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Palette className="w-10 sm:w-12 h-10 sm:h-12 text-pink-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base sm:text-lg font-bold mb-2">Color Stability</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Fade-resistant colors that last</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Premium craftsmanship visual */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6 sm:p-8">
                        <Scissors className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 text-blue-400" />
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">Master Craftsmanship</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Precision in every stitch</p>
                        <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                          <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                            <Factory className="w-5 sm:w-6 h-5 sm:h-6 mx-auto mb-1 sm:mb-2 text-green-400" />
                            <span>Premium Factory</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                            <Award className="w-5 sm:w-6 h-5 sm:h-6 mx-auto mb-1 sm:mb-2 text-yellow-400" />
                            <span>Quality Certified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Trust Our Expertise Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">TRUST OUR EXPERTISE</h2>
              <p className="text-lg sm:text-xl text-gray-300">50+ years of uniform excellence in the UAE</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <Award className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-400 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-300 text-sm sm:text-base">Years Experience</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <Building className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">500+</h3>
                <p className="text-gray-300 text-sm sm:text-base">Companies Served</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <Truck className="w-12 sm:w-16 h-12 sm:h-16 text-green-400 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">24H</h3>
                <p className="text-gray-300 text-sm sm:text-base">Response Time</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <Shield className="w-12 sm:w-16 h-12 sm:h-16 text-red-400 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">100%</h3>
                <p className="text-gray-300 text-sm sm:text-base">Quality Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Our Expert Process Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">OUR EXPERT PROCESS</h2>
              <p className="text-lg sm:text-xl text-gray-300">From concept to delivery in 5 simple steps</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">1. Consultation</h3>
                <p className="text-gray-300 text-sm sm:text-base">Free design consultation to understand your needs</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">2. Design</h3>
                <p className="text-gray-300 text-sm sm:text-base">Custom design creation with your brand elements</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">3. Approval</h3>
                <p className="text-gray-300 text-sm sm:text-base">Review and approve the final design mockup</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">4. Production</h3>
                <p className="text-gray-300 text-sm sm:text-base">Expert manufacturing with quality control</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">5. Delivery</h3>
                <p className="text-gray-300 text-sm sm:text-base">Fast delivery across UAE with quality guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Trusted by Industry Leaders - Infinite Carousel */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">TRUSTED BY INDUSTRY LEADERS</h2>
              <p className="text-lg sm:text-xl text-gray-600">Premium brands that trust our quality</p>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
                {logoCarousel.concat(logoCarousel, logoCarousel).map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-32 sm:w-48 px-4 sm:px-8 flex items-center justify-center"
                  >
                    <img 
                      src={logo} 
                      alt={`Client logo ${index}`} 
                      className="h-8 sm:h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Why UniformConnect? Summary with Icons */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">WHY UNIFORMCONNECT?</h2>
              <p className="text-lg sm:text-xl text-gray-300">Your trusted partner for uniform excellence</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                  <Eye className="w-8 sm:w-12 h-8 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-lg font-bold mb-2">Premium Quality</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Superior materials & craftsmanship</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                  <Clock className="w-8 sm:w-12 h-8 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-lg font-bold mb-2">Fast Delivery</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Quick turnaround times</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                  <Globe className="w-8 sm:w-12 h-8 sm:h-12 text-purple-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-lg font-bold mb-2">UAE Based</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Local expertise & support</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
                  <HeartHandshake className="w-8 sm:w-12 h-8 sm:h-12 text-red-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-lg font-bold mb-2">Trusted Partner</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">50+ years of excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ Comparison Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">WHY CHOOSE US?</h2>
              <p className="text-lg sm:text-xl text-gray-300">See the UniformConnect difference</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-4 sm:p-6 text-left text-sm sm:text-lg font-bold">Feature</th>
                    <th className="p-4 sm:p-6 text-center text-sm sm:text-lg font-bold text-green-400">UniformConnect</th>
                    <th className="p-4 sm:p-6 text-center text-sm sm:text-lg font-bold text-gray-400">Other Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium">Free Design Consultation</td>
                    <td className="p-4 sm:p-6 text-center">
                      <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <span className="text-gray-400 text-sm sm:text-base">Extra Cost</span>
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium">50+ Years Experience</td>
                    <td className="p-4 sm:p-6 text-center">
                      <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <span className="text-gray-400 text-sm sm:text-base">Limited</span>
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium">24H Response Time</td>
                    <td className="p-4 sm:p-6 text-center">
                      <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <span className="text-gray-400 text-sm sm:text-base">3-5 Days</span>
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium">Premium Quality Guarantee</td>
                    <td className="p-4 sm:p-6 text-center">
                      <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <span className="text-gray-400 text-sm sm:text-base">Basic</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣2️⃣ Guarantee Section - Seamless Black Background */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
              <Shield className="w-16 sm:w-20 h-16 sm:h-20 text-green-400 mx-auto mb-6 sm:mb-8" />
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">OUR GUARANTEE</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                We stand behind every uniform we create with our 100% satisfaction guarantee
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <Award className="w-8 sm:w-12 h-8 sm:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Quality Promise</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Premium materials guaranteed</p>
                </div>
                
                <div className="text-center">
                  <Clock className="w-8 sm:w-12 h-8 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">On-Time Delivery</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Or your money back</p>
                </div>
                
                <div className="text-center">
                  <Heart className="w-8 sm:w-12 h-8 sm:h-12 text-red-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">100% Satisfaction</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Love it or we'll make it right</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣3️⃣ Reviews Section - Light Background */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">CLIENT TESTIMONIALS</h2>
              <p className="text-lg sm:text-xl text-gray-600">What our clients say about us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base italic">
                  "Exceptional quality and service. Our hotel staff uniforms look professional and feel comfortable. Highly recommended!"
                </p>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Sarah Al-Mansouri</div>
                  <div className="text-gray-500">Hotel Manager, Luxury Resort Dubai</div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base italic">
                  "Fast delivery and premium quality. Our team loves the new uniforms and they really enhance our brand image."
                </p>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Ahmed Hassan</div>
                  <div className="text-gray-500">Operations Director, Restaurant Chain</div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base italic">
                  "Outstanding customer service and attention to detail. They understood our requirements perfectly and delivered beyond expectations."
                </p>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Maria Rodriguez</div>
                  <div className="text-gray-500">HR Manager, Corporate Office</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Trusted by Industry Leaders - Infinite Carousel */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">TRUSTED BY INDUSTRY LEADERS</h2>
              <p className="text-lg sm:text-xl text-gray-600">Premium brands that trust our quality</p>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
                {logoCarousel.concat(logoCarousel, logoCarousel).map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-32 sm:w-48 px-4 sm:px-8 flex items-center justify-center"
                  >
                    <img 
                      src={logo} 
                      alt={`Client logo ${index}`} 
                      className="h-8 sm:h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣4️⃣ Final Offer Section */}
      <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                READY TO TRANSFORM YOUR TEAM?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Join 500+ companies who trust UniformConnect for their uniform needs
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <button 
                className="relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-10 sm:px-16 py-5 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden group w-full sm:w-auto"
                onClick={scrollToConsultation}
              >
                <span className="relative z-10">Get My Free Consultation</span>
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 text-center">
                <div className="space-y-2">
                  <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                  <p className="text-gray-300 text-sm sm:text-base">Free Design Consultation</p>
                </div>
                <div className="space-y-2">
                  <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                  <p className="text-gray-300 text-sm sm:text-base">24H Response Guarantee</p>
                </div>
                <div className="space-y-2">
                  <Check className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mx-auto" />
                  <p className="text-gray-300 text-sm sm:text-base">100% Satisfaction Promise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Consultation Form Section */}
      <div ref={consultationFormRef}>
        <OptimizedConsultationForm />
      </div>

      <PageFooter />
    </div>
  );
};

export default LandingPage3;
