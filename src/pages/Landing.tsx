import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Check } from 'lucide-react';
import Clients from '@/components/Clients';
import { images } from '@/assets/images';

const Landing = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real implementation, you would send the form data to a server
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <img 
              src={images.logo} 
              alt="UniformConnect Logo" 
              className="h-12 w-auto"
            />
          </div>
          <Button className="bg-brand-red hover:bg-brand-red/90 text-white">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center relative overflow-hidden py-12">
        {/* Background Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-brand-blue/20 animate-float"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-brand-red/10 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Custom <span className="text-brand-red">Uniform</span> Solutions for Your <span className="text-brand-blue">Brand</span>
              </h1>
              <p className="text-lg text-gray-600">
                Premium uniform manufacturing in the UAE since 1978. Elevate your brand with our custom-designed uniforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-brand-green mr-2" />
                  <span>Free design consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-green mr-2" />
                  <span>High-quality materials</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-green mr-2" />
                  <span>Fast turnaround times</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6 rounded-md">
                  Get A Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <img 
                src={images.heroImage} 
                alt="UniformConnect Concept" 
                className="w-auto h-auto max-w-full shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose UniformConnect?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-red">
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Our uniforms are crafted from the highest quality materials, ensuring durability and comfort for your staff.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue">
              <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
              <p className="text-gray-600">
                We tailor each uniform to reflect your brand's unique identity and meet your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-green">
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and ensure your uniforms are delivered when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Now using the Clients component */}
      <Clients />

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Consultation Today</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      required 
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg">
                      Get A Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/20 mb-4">
                  <Check className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-gray-300">
                  We've received your request for a consultation. One of our experts will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src={images.logo} 
                alt="UniformConnect Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} UniformConnect. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
