
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover how we've helped businesses and organizations across the UAE with premium uniform solutions tailored to their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Jones The Grocer */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Jones The Grocer</h2>
              <div className="w-20 h-1 bg-brand-red mb-6"></div>
              <p className="text-gray-600 mb-4">
                We've proudly partnered with Jones The Grocer to produce premium uniforms for all 16+ branches across the UAE region, with expansion plans for other locations throughout the Middle East.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive uniform solution includes high-quality aprons, caps, shirts, jackets, hoodies, pullovers and more - all crafted to meet the exacting standards that the Jones The Grocer brand demands.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Aprons</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Caps</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Shirts</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jackets</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Hoodies</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Pullovers</span>
              </div>
              <Link to="/landing">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6">
                  Get Similar Results
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in">
              <div className="relative bg-white shadow-xl rounded-xl p-4 max-w-md overflow-hidden">
                <img 
                  src="public/lovable-uploads/973bd696-f3d4-44b8-ac1f-6b5da097933f.png" 
                  alt="Jones The Grocer Uniforms" 
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Premium uniforms for all 16+ branches across UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Little Bangkok */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="flex justify-center animate-fade-in">
              <div className="relative bg-white shadow-xl rounded-xl p-4 max-w-md overflow-hidden">
                <img 
                  src="public/lovable-uploads/194371d9-ffe8-4715-aadc-e3bb4d7f5aa2.png" 
                  alt="Little Bangkok Uniforms" 
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Uniform solutions for all Little Bangkok staff across Dubai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Little Bangkok</h2>
              <div className="w-20 h-1 bg-brand-green mb-6"></div>
              <p className="text-gray-600 mb-4">
                We're delighted to provide comprehensive uniform solutions for all Little Bangkok staff across Dubai, ensuring their team looks consistently professional and on-brand.
              </p>
              <p className="text-gray-600 mb-6">
                Our relationship extends beyond Little Bangkok itself, as we proudly partner with their sister companies to address their uniform requirements as well, creating a cohesive brand presence across multiple establishments.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Staff Uniforms</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Brand Consistency</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Multi-Location</span>
              </div>
              <Link to="/landing">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-6">
                  Get Similar Results
                </Button>
              </Link>
            </div>
          </div>

          {/* Fairgreen International School */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Fairgreen International School</h2>
              <div className="w-20 h-1 bg-brand-red mb-6"></div>
              <p className="text-gray-600 mb-4">
                We create premium hoodies with exceptional embroidery for Fairgreen International School, ensuring students stay warm and comfortable during the winter months while proudly representing their school.
              </p>
              <p className="text-gray-600 mb-6">
                Our collaboration with Fairgreen extends to various styles of hoodies and jackets designed for club teams, teaching staff, and special events, providing a unified and distinguished look across the entire school community.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Premium Hoodies</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Quality Embroidery</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Club Teams</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Staff Uniforms</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Event Merchandise</span>
              </div>
              <Link to="/landing">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6">
                  Get Similar Results
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in">
              <div className="relative bg-white shadow-xl rounded-xl p-4 max-w-md overflow-hidden">
                <img 
                  src="public/lovable-uploads/770df8ec-a0bc-4a00-ba18-7d166c71a7f8.png" 
                  alt="Fairgreen School Uniforms" 
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Premium embroidered hoodies for students and staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to become our next success story?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you create high-quality, custom uniforms that perfectly represent your brand.
            </p>
            <Link to="/landing">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6">
                Get A Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
