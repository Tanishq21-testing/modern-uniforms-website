import { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { ArrowRight, Check, Star, Shield, Clock, Users, Award, Building, FileText, Settings, MessageCircle, Scissors, Palette, Zap, Target, Factory, Sparkles, Heart, TrendingUp, ChevronLeft, ChevronRight, Truck, Eye, Globe, HeartHandshake } from 'lucide-react';
import { images } from '@/assets/images';

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
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
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
                    <span className="text-sm sm:text-lg">50+ Years Experience • GCC READY - Dubai Based</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">300AED / 100pieces</div>
                      <p className="text-gray-600 font-medium">Tailored to your brand identity</p>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <button 
                      className="relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden group w-full sm:w-auto" 
                      onClick={scrollToConsultation}
                    >
                      <span className="relative z-10">Get Custom Uniform</span>
                    </button>
                    
                    <div className="mt-6 space-y-2 text-center lg:text-left">
                      <p className="text-lg font-semibold text-gray-700">Tailored to your brand identity</p>
                      <p className="text-lg font-semibold text-gray-700">Free Design Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4 sm:space-y-6">
                    <img 
                      src={images.uniformServices} 
                      alt="Chef uniforms" 
                      className="rounded-2xl sm:rounded-3xl w-full h-32 sm:h-48 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-105" 
                    />
                    <img 
                      src={images.Hoodieimage} 
                      alt="Custom hoodies" 
                      className="rounded-2xl sm:rounded-3xl w-full h-24 sm:h-32 object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    <img 
                      src={images.schoolHoodie} 
                      alt="School uniforms" 
                      className="rounded-2xl sm:rounded-3xl w-full h-24 sm:h-32 object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" 
                    />
                    <img 
                      src={images.JCProducts} 
                      alt="Hospitality staff" 
                      className="rounded-2xl sm:rounded-3xl w-full h-32 sm:h-48 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
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

      {/* Consultation Form Section */}
      <section ref={consultationFormRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Get Your Free Consultation</h3>
              <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg">We'll create a custom proposal tailored to your needs</p>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                </div>
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                  Get My Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default LandingPage3;
