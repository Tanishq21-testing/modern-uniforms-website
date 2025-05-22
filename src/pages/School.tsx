
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, FileText, Package, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { images } from '@/assets/images';

const School = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "School Apparel | UniformConnect";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section 
        className="pt-32 pb-16 bg-gradient-to-r from-brand-blue/10 to-brand-red/10 relative"
        style={{
          backgroundImage: `url(${images.JCProducts})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-white">
              Custom School Apparel for Institutions Across the UAE
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium Hoodies, Jackets, T-Shirts & Sweaters for Students, Seniors, Teams, and Events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Start Your Design
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UniformConnect specializes in high-quality, custom-made school uniforms tailored to your institution's identity. From design to delivery, we work closely with procurement managers and school leaders to ensure a seamless, on-brand apparel experience—on time, every time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's senior class gear, school sports uniforms, club attire, or merchandise for events, we help your students represent their school with pride.
            </p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process – Tailored to Fit Your School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Send Your Design</h3>
              <p className="text-gray-600">Email your design brief or apparel request to premparsram@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
              <p className="text-gray-600">Our team will share a customized quote with fabric details, customization options, and delivery timelines.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Approve & Confirm Order</h3>
              <p className="text-gray-600">Once approved, we begin production with a typical turnaround of 4–5 weeks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hassle-Free Delivery</h3>
              <p className="text-gray-600">We deliver directly to your school. Home delivery options are also available for an added AED 15 per student.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Display Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Explore Our Custom School Apparel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={images.Varsityjacket} 
                  alt="Varsity Jackets" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZhcnNpdHkgSmFja2V0czwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white/90 text-brand-blue hover:bg-white">
                    View Options
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Varsity Jackets</h3>
                <p className="text-gray-600 mb-4">Showcase school pride with custom-embroidered, high-quality varsity jackets.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={images.Hoodieimage} 
                  alt="Hoodies" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvb2RpZXM8L3RleHQ+PC9zdmc+';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white/90 text-brand-blue hover:bg-white">
                    View Options
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hoodies</h3>
                <p className="text-gray-600 mb-4">Comfortable and stylish, perfect for everyday wear or school trips.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={images.Sweater} 
                  alt="Sweaters" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN3ZWF0ZXJzPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white/90 text-brand-blue hover:bg-white">
                    View Options
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sweaters</h3>
                <p className="text-gray-600 mb-4">Elegant layering pieces for cool weather and formal events.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={images.Tshirt} 
                  alt="T-Shirts" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlQtU2hpcnRzPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white/90 text-brand-blue hover:bg-white">
                    View Options
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">T-Shirts</h3>
                <p className="text-gray-600 mb-4">Durable and affordable for sports, clubs, or casual wear.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* School Program - Free Team Kit Section - Updated to match the image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <span className="text-blue-500 text-5xl">👕</span> 
                <span>Free Jerseys for School Teams</span>
              </h2>
            </div>
            
            <p className="text-lg text-center text-gray-700 mb-10 max-w-4xl mx-auto">
              When your school places a large order (e.g., 100+ uniforms), we'll sponsor free jerseys or hoodies for one of your 
              school sports or arts teams—branded and tailored to your school's identity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-6">Details:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 text-green-700 mt-0.5">✓</div>
                    <span className="text-lg">Custom design + embroidery included</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 text-green-700 mt-0.5">✓</div>
                    <span className="text-lg">Limited to 1 free team set per bulk order</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 text-green-700 mt-0.5">✓</div>
                    <span className="text-lg">Option to schedule a school photoshoot to feature on our social media</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <img
                  src={images.schoolHoodie}
                  alt="School hoodie example"
                  className="rounded-lg shadow-md h-full object-contain"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact-us">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-10 py-6 rounded-md">
                  Claim Your Team's Free Jerseys
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Material Options Section - Updated with gradient background */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 22v-8.5L12 8l9 5.5V22H3z"></path>
                  <path d="M12 8v14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cotton</h3>
              <p className="text-gray-600">Soft, breathable cotton that provides comfort for everyday wear.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                  <path d="M11 7h4"></path>
                  <path d="M11 11h4"></path>
                  <path d="M11 15h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fleece</h3>
              <p className="text-gray-600">Warm and cozy fleece ideal for hoodies and outerwear.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 0-7 7c0 1.2.3 2.4.9 3.5L12 22l6.1-9.5c.6-1 .9-2.2.9-3.5a7 7 0 0 0-7-7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Cotton</h3>
              <p className="text-gray-600">Eco-friendly cotton options that reduce environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-red">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your School's Custom Apparel?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your school's unique requirements and get started on your custom uniform solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8 py-6">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact-us">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default School;
