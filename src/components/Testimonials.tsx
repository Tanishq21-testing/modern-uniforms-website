
import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Head of Operations, Hilton Hotel Group UAE",
      text: "As a hotel chain with over 200 staff members across multiple properties, consistency is critical. UniformConnect delivered perfectly matched uniforms for all our locations, maintaining our brand standards while accommodating different regional requirements.",
      rating: 5,
      organization: "Hospitality Chain"
    },
    {
      name: "Ahmed Al Falasi",
      position: "Director of Corporate Services, Dubai Golf",
      text: "Managing uniforms for 120 staff across our golf clubs used to be a logistical challenge. UniformConnect's account management system and quality control processes have simplified our uniform program while elevating our professional appearance.",
      rating: 5,
      organization: "Sports & Recreation"
    },
    {
      name: "Maria Rodriguez",
      position: "Executive Principal, Fairgreen International School Network",
      text: "With three campuses and over 150 staff members, we needed a uniform partner who understood our educational environment and brand values. UniformConnect provided a solution that works for our administrative staff, teachers, and support personnel.",
      rating: 5,
      organization: "Educational Institution"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-fade-in');
      void testimonialRef.current.offsetWidth; // Force reflow
      testimonialRef.current.classList.add('animate-fade-in');
    }
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Enterprise Clients</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            See how we've helped organizations with 50+ employees solve their uniform challenges with tailored solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={testimonialRef} 
            className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center animate-fade-in"
          >
            <div className="inline-flex items-center justify-center bg-gray-100 p-3 rounded-full mb-6">
              <Building size={28} className="text-brand-blue" />
              <span className="ml-2 font-semibold text-gray-700">{testimonials[currentIndex].organization}</span>
            </div>
            
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-gray-300" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500">{testimonials[currentIndex].position}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 text-gray-500 hover:text-brand-blue hover:border-brand-blue"
              disabled={isAnimating}
            >
              <ArrowLeft size={20} />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  currentIndex === index ? 'bg-brand-blue' : 'bg-gray-300'
                }`}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 text-gray-500 hover:text-brand-blue hover:border-brand-blue"
              disabled={isAnimating}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
