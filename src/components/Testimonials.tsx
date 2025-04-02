
import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Manager, Hilton Dubai",
      text: "The uniforms provided by UniformConnect have exceeded our expectations. The quality is exceptional, and they perfectly capture our brand's essence. Our staff feels proud wearing them.",
      rating: 5,
    },
    {
      name: "Ahmed Al Falasi",
      position: "Operations Director, Dubai Golf",
      text: "We've been working with UniformConnect for over 5 years now. Their attention to detail and commitment to quality is unmatched. The durability of their uniforms has saved us money in the long run.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      position: "Principal, Fairgreen International School",
      text: "The school uniforms designed by UniformConnect have received positive feedback from both students and parents. They are comfortable, durable, and represent our school's values beautifully.",
      rating: 4,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={testimonialRef} 
            className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center animate-fade-in"
          >
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
