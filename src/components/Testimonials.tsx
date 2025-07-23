import { useRef } from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Khaled Bin Rashid",
      position: "General Manager, Hilton Regional GCC",
      text: "We've worked with multiple suppliers in the past, including some big international names, but none matched the precision and reliability of UniformConnect. Even our regional Hilton partners noticed the upgrade immediately—it's on another level.",
      rating: 5
    },
    {
      name: "Lara Thompson",
      position: "Event Director, Luxury Events GCC",
      text: "At first, I hesitated because I thought a premium service like this would be beyond our budget. But once we saw the durability and how it saved us from constant reordering, it was clear—this is an investment, not an expense.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      position: "Operations Director, High-End Restaurant Chain",
      text: "From the very first call, they understood exactly what we wanted without endless back-and-forth. It felt like they were part of our own team. The process was so seamless, I barely had to follow up.",
      rating: 5
    },
    {
      name: "Sarah Al-Mansouri",
      position: "Hotel Manager, Luxury Resort Dubai",
      text: "We constantly get compliments from clients about our team's new look. It feels like we're setting a new standard in the industry. Honestly, it's the little details that make us stand out—and UniformConnect delivered all of them.",
      rating: 5
    },
    {
      name: "Omar El-Khatib",
      position: "Managing Partner, Corporate Towers Dubai",
      text: "We had an urgent launch event and needed uniforms in record time—without compromising quality. UniformConnect not only delivered on time but exceeded expectations. They proved premium can also be fast.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      position: "HR Director, Raffles Corporate Office",
      text: "We tried working with global suppliers before, but the long lead times and lack of personal attention were frustrating. With UniformConnect, it's the opposite—fast responses, tailored designs, and actual people who care about the result.",
      rating: 5
    },
    {
      name: "David Campbell",
      position: "CEO, Corporate Solutions MENA",
      text: "It's rare to find a supplier who thinks beyond just the order. They checked in even after delivery to make sure everything was perfect. That's why they're not just a supplier for us—they're a long-term partner.",
      rating: 5
    },
    {
      name: "Fatima Al-Harbi",
      position: "Operations Supervisor, Luxury Spa Group UAE",
      text: "You can feel the difference even in how our staff carries themselves. When they wear something that fits well and looks great, their confidence goes up, and it shows in customer interactions.",
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-light">
            What our most exclusive partners say about the UniformConnect experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <div className="bg-gray-900 rounded-xl p-8 h-full shadow-2xl border border-gray-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(255,215,0,0.25)] cursor-pointer">
                      {/* Gold Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className="text-[#FFD700] fill-[#FFD700] mx-0.5" 
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-white text-lg leading-relaxed mb-8 italic font-light min-h-[120px]">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Gold Divider */}
                      <div className="w-12 h-0.5 bg-[#FFD700] mx-auto mb-6"></div>

                      {/* Author Info */}
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-sm font-light">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;