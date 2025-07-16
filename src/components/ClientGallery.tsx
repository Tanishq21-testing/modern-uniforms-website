
import React, { useEffect, useRef, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { images } from '@/assets/images';

const ClientGallery = () => {
  const galleryItems = [
    {
      image: images.jonesthegrocercase,
      title: "Restaurant Staff Uniforms",
      description: "Custom aprons and chef uniforms for Jones The Grocer"
    },
    {
      image: images.uniformServices,
      title: "Little Bangkok Uniforms",
      description: "Complete staff attire for all Little Bangkok locations"
    },
    {
      image: images.schoolHoodie,
      title: "School Hoodies",
      description: "Premium embroidered hoodies for Fairgreen International School"
    },
    {
      image: images.jonesthegrocercase,
      title: "Jones the Grocer",
      description: "Professional attire for corporate clients"
    },
    {
      image: images.clientLogos.hilton,
      title: "Hospitality Uniforms",
      description: "Elegant staff uniforms for luxury hotels"
    },
    {
      image: images.clientLogos.dubaiGolf,
      title: "Sports Uniforms",
      description: "Custom sportswear for Dubai Golf"
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Uniform Gallery</h2>
          <p className="text-gray-600">
            Browse through a selection of premium uniforms we've designed for our valued clients
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-2xl"
            >
              <CarouselContent className="ml-0">
                {galleryItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-0 basis-full">
                    <div className="relative h-[500px] flex items-center justify-center">
                      {/* Layered background images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {galleryItems.map((bgItem, bgIndex) => {
                          const offset = Math.abs(bgIndex - index);
                          if (offset === 0) return null; // Skip the main image
                          
                          const isLeft = bgIndex < index;
                          const zIndex = 10 - offset;
                          const scale = Math.max(0.6, 1 - (offset * 0.15));
                          const translateX = isLeft ? -60 - (offset * 40) : 60 + (offset * 40);
                          const translateY = offset * 20;
                          const opacity = Math.max(0.3, 1 - (offset * 0.25));
                          
                          return (
                            <div
                              key={`bg-${bgIndex}`}
                              className="absolute rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-500"
                              style={{
                                transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                                zIndex,
                                opacity,
                                width: '300px',
                                height: '400px'
                              }}
                            >
                              <div className="h-80 relative">
                                <img
                                  src={bgItem.image}
                                  alt={bgItem.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="font-bold text-lg mb-1 text-gray-900">{bgItem.title}</h3>
                                <p className="text-gray-600 text-sm">{bgItem.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Main center image */}
                      <div className="relative z-20 rounded-2xl overflow-hidden bg-white shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group">
                        <div className="h-96 relative overflow-hidden" style={{ width: '320px' }}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/30">
                                <span className="text-sm font-medium">View Details</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation arrows */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30">
                <CarouselPrevious className="bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 w-12 h-12" />
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30">
                <CarouselNext className="bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 w-12 h-12" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className={`text-center mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-700">
            These are just a small sample of the many projects we've completed. Contact us to see more examples or discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientGallery;
