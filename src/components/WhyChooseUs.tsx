
import { useEffect, useRef } from 'react';
import { Check, Award, Users, Building, Clock, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "45+ Years of Enterprise Experience",
      description: "Since 1978, we've been the trusted uniform partner for leading companies across the UAE, understanding the unique challenges of organizations with 50+ employees.",
      icon: Award,
      color: "blue"
    },
    {
      title: "Trusted by Major Organizations",
      description: "From hospitality chains to corporate offices and educational institutions, we serve prestigious clients who demand the highest quality at scale.",
      icon: Building,
      color: "red"
    },
    {
      title: "Enterprise-Grade Quality",
      description: "We combine traditional craftsmanship with modern manufacturing to deliver uniforms that maintain their professional appearance even with intensive daily use.",
      icon: Sparkles,
      color: "green"
    },
    {
      title: "Brand-Aligned Uniform Programs",
      description: "Our design team creates comprehensive uniform programs that perfectly represent your brand identity across multiple locations and departments.",
      icon: Users,
      color: "blue"
    },
    {
      title: "Efficient Large-Scale Production",
      description: "Our streamlined processes ensure we can outfit your entire organization with consistent quality and on-time delivery, even for large orders.",
      icon: Clock,
      color: "red"
    },
    {
      title: "Dedicated Account Management",
      description: "Each enterprise client is assigned a dedicated account manager who understands your organization's unique uniform requirements.",
      icon: Check,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Enterprise Clients Choose Us</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            For over four decades, we've been the uniform partner of choice for large organizations across the UAE, from restaurant chains to corporate enterprises and educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="reason-card opacity-0 p-6 border border-gray-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-transparent relative overflow-hidden"
              >
                <div 
                  className={`absolute top-0 left-0 w-1 h-full bg-brand-${reason.color}`}
                ></div>
                <div className="flex items-start mb-4">
                  <div className={`mr-4 mt-1 text-brand-${reason.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-gray-600 pl-8">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
