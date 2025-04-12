
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
      image: images.clientLogos.jonesTheGrocer,
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
      image: images.callToAction,
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

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden bg-white shadow-lg h-full">
                      <div className="h-64 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-white px-4 py-2 rounded-lg bg-brand-blue/90">View Details</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
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
