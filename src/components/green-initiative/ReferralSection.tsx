
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

const ReferralSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="text-emerald-600 h-8 w-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              🎁 Refer a Business. We Donate on Your Behalf.
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-10 text-center">
            When you refer another school, restaurant, or organization to UniformConnect, 
            we'll donate school uniforms or essentials to a child in need through one of our 
            trusted charity partners. We'll also feature your business or school on our 
            social media platforms as a Green Partner.
          </p>
          
          <Card className="mb-10 border-emerald-100 shadow-md">
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span className="text-gray-800">You refer a client → we donate uniforms in your name</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span className="text-gray-800">Your brand gets featured in our "Impact Stories"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span className="text-gray-800">You build your CSR profile without any added cost</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8 py-6">
              Refer a Business Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
