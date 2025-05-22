
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ReferralSection = () => {
  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            🎁 Refer a Business. We Donate on Your Behalf.
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center">
            When you refer another school, restaurant, or organization to UniformConnect, 
            we'll donate school uniforms or essentials to a child in need through one of our 
            trusted charity partners. We'll also feature your business or school on our 
            social media platforms as a Green Partner.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✅</div>
                <span>You refer a client → we donate uniforms in your name</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✅</div>
                <span>Your brand gets featured in our "Impact Stories"</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✅</div>
                <span>You build your CSR profile without any added cost</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a href="https://forms.gle/XxVRfrRruEbX4xnY6" target="_blank" rel="noopener noreferrer">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6">
                  Refer a Business Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
