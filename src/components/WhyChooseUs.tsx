
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "50+ Years of Experience",
      description: "With over five decades in the industry, we've perfected our craft and understand the unique needs of businesses in the UAE.",
      color: "blue"
    },
    {
      title: "Trusted by Major Brands",
      description: "We are the preferred choice for some of the biggest restaurants, hotels, and schools in the UAE.",
      color: "red"
    },
    {
      title: "Quality Craftsmanship",
      description: "Every uniform is crafted with meticulous attention to detail, ensuring durability and professional appearance.",
      color: "green"
    },
    {
      title: "Custom Design Solutions",
      description: "We tailor our designs to match your brand's unique identity and specific requirements.",
      color: "blue"
    },
    {
      title: "Quick Turnaround Times",
      description: "We understand the importance of timely delivery and strive to meet your deadlines without compromising quality.",
      color: "red"
    },
    {
      title: "Exceptional Customer Service",
      description: "We prioritize clear communication and responsiveness throughout the entire process.",
      color: "green"
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reasonCards = document.querySelectorAll('.reason-card');
            reasonCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
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
    <section id="why-us" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We are a trusted and experienced manufacturer in the UAE, serving the hospitality industry for over 50 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card opacity-0 p-6 border border-gray-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-transparent relative overflow-hidden"
            >
              <div 
                className={`absolute top-0 left-0 w-1 h-full bg-brand-${reason.color}`}
              ></div>
              <div className="flex items-start mb-4">
                <div className={`mr-4 mt-1 text-brand-${reason.color}`}>
                  <Check size={20} />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600 pl-8">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
