
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SolutionComparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose UniformConnect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of experience with innovative technology to deliver uniform solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Standard Uniform Providers</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Basic uniform options</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Limited customization</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Standard fabrics only</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Fixed production timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Minimal post-sale support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-blue rounded-xl p-8 text-white transform scale-105 shadow-xl relative z-10 h-full">
              <div className="absolute top-0 right-0 bg-brand-red text-white text-sm font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold mb-6">UniformConnect</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Premium custom uniform design</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Full brand alignment & identity integration</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Premium global fabrics selection</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Flexible production & rush options</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Free consultation & design services</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Ongoing maintenance program</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Large Global Providers</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Advanced uniform options</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Some customization available</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Higher minimum order quantities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Long lead times</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-gray-600">Less personalized service</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/about-us">
              <Button variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-6 py-6">
                Learn More About Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionComparison;
