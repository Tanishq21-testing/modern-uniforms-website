
import { Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { images } from '@/assets/images';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About UniformConnect</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Since 1978, we've been the trusted partner for companies across the UAE looking for premium uniform solutions that reflect their brand's unique identity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Leading Uniform Manufacturer in the UAE</h3>
            <p className="text-gray-600 mb-6">
              UniformConnect specializes in designing and producing high-quality uniforms for flagship companies across various industries, including hospitality, healthcare, corporate, and more.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-brand-red/10 p-2 rounded-full text-brand-red">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Premium Quality Guaranteed</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    We use only the finest materials and maintain strict quality control throughout the production process to deliver exceptional uniforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Timely Delivery</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    We understand the importance of deadlines and ensure that your uniform orders are delivered on time, every time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-brand-green/10 p-2 rounded-full text-brand-green">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalized Service</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Our dedicated team works closely with you to understand your specific needs and deliver tailored uniform solutions that align with your brand identity.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/about-us">
              <Button className="w-full sm:w-auto">Learn More About Us</Button>
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src={images.aboutImage} 
              alt="About UniformConnect" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
