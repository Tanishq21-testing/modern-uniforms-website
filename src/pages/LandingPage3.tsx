import { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { ArrowRight, Check, Star, Shield, Clock, Users, Award, Building, FileText, Settings, MessageCircle, Scissors, Palette, Zap, Target, Factory, Sparkles, Heart, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '@/assets/images';

const LandingPage3 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

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

      {/* Hero Section - White/Light Gradient Background */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Not Covering Your Team<br />
                    But <span className="bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Reflecting Your Brand</span>
                  </h1>
                  <div className="flex items-center space-x-4 text-lg font-medium text-gray-700">
                    <div className="flex space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <span>50+ Years Experience • GCC READY - Dubai Based</span>
                  </div>
                </div>
                
                {/* Pricing & CTA */}
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">300AED / 100pieces</div>
                      <p className="text-gray-600 font-medium">Tailored to your brand identity</p>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <button 
                      className="relative bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden group" 
                      onClick={scrollToConsultation}
                    >
                      <span className="relative z-10">Get Custom Uniform</span>
                      {/* Metallic shine animation */}
                      <div className="absolute inset-0 -top-1 -bottom-1 w-6 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out] translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000"></div>
                    </button>
                    
                    {/* Two centered lines under button */}
                    <div className="mt-6 space-y-2 text-center lg:text-left">
                      <p className="text-lg font-semibold text-gray-700">Tailored to your brand identity</p>
                      <p className="text-lg font-semibold text-gray-700">Free Design Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Images Grid */}
              <div className="relative animate-fade-in">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <img 
                      src={images.uniformServices} 
                      alt="Chef uniforms" 
                      className="rounded-3xl w-full h-48 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-105" 
                    />
                    <img 
                      src={images.Hoodieimage} 
                      alt="Custom hoodies" 
                      className="rounded-3xl w-full h-32 object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-6 mt-8">
                    <img 
                      src={images.schoolHoodie} 
                      alt="School uniforms" 
                      className="rounded-3xl w-full h-32 object-cover shadow-xl transform transition-transform duration-500 hover:scale-105" 
                    />
                    <img 
                      src={images.JCProducts} 
                      alt="Hospitality staff" 
                      className="rounded-3xl w-full h-48 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Client Logos - Infinite Sliding Carousel */}
            <div className="mt-20 text-center">
              <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
                  {/* First set of logos */}
                  {logoCarousel.concat(logoCarousel).map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-48 px-8 flex items-center justify-center"
                    >
                      <img 
                        src={logo} 
                        alt={`Client logo ${index}`} 
                        className="h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110" 
                      />
                    </div>
                  ))}
                </div>
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality Section - BLACK BACKGROUND (Exactly like Canva) */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">PREMIUM QUALITY</h2>
              <p className="text-xl text-gray-300">Craftsmanship that speaks for your brand</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Quality icons */}
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Premium Fabrics</h3>
                    <p className="text-gray-400 text-sm">Highest quality materials sourced globally</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Target className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Detail Finishing</h3>
                    <p className="text-gray-400 text-sm">Precision in every stitch and seam</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Scissors className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Expert Stitching</h3>
                    <p className="text-gray-400 text-sm">Master craftsmen with decades of experience</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Wash-Tested</h3>
                    <p className="text-gray-400 text-sm">Durability tested through 100+ wash cycles</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Perfect Fit Cutting</h3>
                    <p className="text-gray-400 text-sm">Tailored patterns for optimal comfort</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">Color Stability</h3>
                    <p className="text-gray-400 text-sm">Fade-resistant colors that last</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Premium craftsmanship with sewing machine visual */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                    {/* Craftsmanship imagery */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <Scissors className="w-20 h-20 mx-auto mb-4 text-blue-400" />
                        <h3 className="text-2xl font-bold mb-2">Master Craftsmanship</h3>
                        <p className="text-gray-300">Precision in every stitch</p>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white/10 rounded-lg p-3">
                            <Factory className="w-6 h-6 mx-auto mb-2 text-green-400" />
                            <span>Premium Factory</span>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <Award className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
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

      {/* T-Shirt Customization Section - Dark Background with Spotlight */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Spotlight effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">CUSTOMIZATION</h2>
              <p className="text-xl text-gray-300">Make it uniquely yours</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Customization table */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-3xl font-bold mb-8 text-center">What Can I Customise?</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold text-lg">GARMENT TYPE</span>
                      <span className="text-gray-300">T-shirts, hoodies, chef coats, pants</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold text-lg">FABRIC & COLOR</span>
                      <span className="text-gray-300">Wide range of materials and color tones</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold text-lg">DECORATION</span>
                      <span className="text-gray-300">Embroidery or screen printing</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold text-lg">FIT & CUT</span>
                      <span className="text-gray-300">Unisex, tailored, relaxed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">YOUR DESIGN</span>
                      <span className="text-gray-300">Logos, slogans, patterns</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - T-shirt mockup with color-coded callouts */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={images.Tshirt} 
                    alt="Customizable uniform" 
                    className="max-w-lg w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Green callout */}
                  <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ 100% Branded Clothes
                  </div>
                  
                  {/* Blue callout */}
                  <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ Durable weave
                  </div>
                  
                  {/* Red callout */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-300">
                    ✓ Holds shape after 30+ washes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Light Background with Premium Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">PRICING</h2>
              <p className="text-xl text-gray-600">Premium quality, competitive pricing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Hoodieimage} alt="Hoodies" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">HOODIES</h3>
                <div className="text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-4xl font-bold text-red-600 mb-4">100 AED</div>
                <p className="text-gray-600 mb-2">Logo + Fabric Choice</p>
                <p className="text-sm text-gray-500">Popular for Teams</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Varsityjacket} alt="Jackets" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">JACKETS</h3>
                <div className="text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-4xl font-bold text-red-600 mb-4">150 AED</div>
                <p className="text-gray-600 mb-2">Tailored Branding</p>
                <p className="text-sm text-gray-500">Great for Front Desk</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <img src={images.Tshirt} alt="T-Shirts" className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">T-SHIRTS</h3>
                <div className="text-sm text-gray-500 mb-2">FROM</div>
                <div className="text-4xl font-bold text-red-600 mb-4">50 AED</div>
                <p className="text-gray-600 mb-2">Print or embroidery</p>
                <p className="text-sm text-gray-500">Fast Delivery Items</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30" 
                onClick={scrollToConsultation}
              >
                Order Now
                <ArrowRight className="ml-2 h-6 w-6 inline" />
              </button>
              <p className="text-sm text-gray-500 mt-3">Cut-Color-Decoration defined with you • we respond under 24H</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 - Dark Background */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 text-gray-300">Join hundreds of UAE businesses who trust us with their uniform needs</p>
          <button 
            className="bg-white text-black hover:bg-gray-100 font-bold text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
            onClick={scrollToConsultation}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-6 w-6 inline" />
          </button>
          <p className="text-sm mt-4 text-gray-400">50+ Years Experience | 100% Premium Quality Guarantee</p>
        </div>
      </section>

      {/* Interactive Portfolio / Showcase Section - 3D Carousel */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-3" />
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-3" />
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-3" />
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-3" />
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                HIGH PERSONALISATION
              </h2>
              <div className="text-2xl font-bold mb-6">
                <span className="text-blue-400">COLOR</span> & <span className="text-red-500">CUT</span> & <span className="text-green-400">DESIGN</span>
              </div>
            </div>
            
            {/* 3D Carousel */}
            <div className="relative flex items-center justify-center h-96 mb-8">
              {/* Navigation Arrows */}
              <button 
                onClick={prevShowcase}
                className="absolute left-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </button>
              
              <button 
                onClick={nextShowcase}
                className="absolute right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </button>
              
              {/* Carousel Images */}
              <div className="relative w-full h-full flex items-center justify-center">
                {showcaseImages.map((image, index) => {
                  const isCenter = index === currentShowcaseIndex;
                  const isLeft = index === (currentShowcaseIndex - 1 + showcaseImages.length) % showcaseImages.length;
                  const isRight = index === (currentShowcaseIndex + 1) % showcaseImages.length;
                  const isVisible = isCenter || isLeft || isRight;
                  
                  if (!isVisible) return null;
                  
                  let transformClass = '';
                  let zIndex = 0;
                  let scale = 'scale-75';
                  let opacity = 'opacity-50';
                  
                  if (isCenter) {
                    transformClass = 'translate-x-0';
                    zIndex = 30;
                    scale = 'scale-100';
                    opacity = 'opacity-100';
                  } else if (isLeft) {
                    transformClass = '-translate-x-32 -rotate-y-12';
                    zIndex = 20;
                  } else if (isRight) {
                    transformClass = 'translate-x-32 rotate-y-12';
                    zIndex = 20;
                  }
                  
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out ${transformClass} ${scale} ${opacity} hover:scale-105 hover:opacity-100 cursor-pointer`}
                      style={{ 
                        zIndex,
                        transform: `${transformClass} perspective(1000px)`,
                        transformStyle: 'preserve-3d'
                      }}
                      onClick={() => setCurrentShowcaseIndex(index)}
                    >
                      <div className="relative">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl flex items-end">
                            <div className="p-6 text-center w-full">
                              <h3 className="text-xl font-bold text-white drop-shadow-lg">{image.alt}</h3>
                            </div>
                          </div>
                        )}
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 blur-xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center space-x-3 mb-8">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowcaseIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

      {/* Final CTA Section - Dark Background */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Team's Look Today</h2>
          <p className="text-xl mb-8 text-gray-300">Premium uniforms that reflect your brand's excellence</p>
          <button 
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30" 
            onClick={scrollToConsultation}
          >
            Get Custom Uniform
            <ArrowRight className="ml-2 h-6 w-6 inline" />
          </button>
          <p className="text-sm mt-4 text-gray-400">Free consultation • Trusted by 200+ companies • 24H response guarantee</p>
        </div>
      </section>

      {/* Consultation Form Section - Light Gradient */}
      <section ref={consultationFormRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-center mb-4">Get Your Free Consultation</h3>
              <p className="text-center text-gray-600 mb-10 text-lg">We'll create a custom proposal tailored to your needs</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                  />
                </div>
                <select className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50">
                  <option>Number of Employees</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-100</option>
                  <option>100+</option>
                </select>
                <textarea 
                  placeholder="Tell us about your uniform requirements..." 
                  rows={4} 
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white/50" 
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl px-12 py-5 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                  Get My Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default LandingPage3;