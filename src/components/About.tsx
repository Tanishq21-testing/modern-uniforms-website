
import { Check } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '45+', text: 'Years of Experience' },
    { number: '500+', text: 'Satisfied Clients' },
    { number: '10K+', text: 'Uniforms Delivered' },
    { number: '50+', text: 'Fabric Options' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-brand-blue/10"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-40 rounded-full bg-brand-red/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We have been manufacturing and producing uniforms for flagship companies in the UAE since 1978.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-red/20 rounded-lg"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Uniform manufacturing facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-lg bg-white shadow-xl p-4 flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-brand-red">Since</p>
                <p className="text-4xl font-bold">1978</p>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold mb-6">
              Crafting Excellence in Every Stitch
            </h3>
            <p className="text-gray-600 mb-6">
              With decades of experience, we have established ourselves as a trusted provider of high-quality uniforms. We take immense pride in offering hospitality companies a diverse selection of uniform styles that cater to their specific needs.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you require a professional look for a clinic or a sophisticated ensemble for a fine dining establishment, we have a range of options that will perfectly complement any venue. Our custom-designed uniforms, including waistcoats and aprons, can be tailored to match your brand's style and colors.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-brand-green">
                  <Check size={18} />
                </span>
                <span>Extensive selection of premium fabrics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-brand-red">
                  <Check size={18} />
                </span>
                <span>Custom designs to match your brand identity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-brand-blue">
                  <Check size={18} />
                </span>
                <span>Expert craftsmanship with attention to detail</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 flex-shrink-0 text-brand-green">
                  <Check size={18} />
                </span>
                <span>Quick turnaround without compromising quality</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-0 animate-scale-in" style={{ animationDelay: '0.8s' }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            >
              <p className="text-3xl md:text-4xl font-bold" style={{ 
                color: index % 3 === 0 ? '#1FB5FF' : index % 3 === 1 ? '#FF1E1E' : '#1FFF4B' 
              }}>
                {achievement.number}
              </p>
              <p className="text-gray-600 mt-2">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
