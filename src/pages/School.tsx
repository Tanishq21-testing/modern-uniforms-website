
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, FileText, Package, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { images } from '@/assets/images';

const School = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-brand-blue/10 to-brand-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Custom Apparel for Schools in the UAE
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium Hoodies, Jackets, T-Shirts & Sweaters for Students, Seniors, Teams, and Events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-lg px-8 py-6">
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
              UniformConnect provides high-quality, customized clothing for schools across the UAE — including hoodies, varsity jackets, sweaters, and t-shirts. Whether it's for graduating seniors, school sports teams, clubs, or events, our apparel helps students proudly represent their school both in and outside the classroom.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We collaborate directly with schools to streamline the ordering process, offer flexible design support, and ensure timely delivery.
            </p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Send us your design</h3>
              <p className="text-gray-600">Email your design or idea to premparsram@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get a quote</h3>
              <p className="text-gray-600">We'll respond with an estimated price and details</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Place your order</h3>
              <p className="text-gray-600">We produce and deliver within 4-5 weeks</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Items delivered directly to the school</p>
              <p className="text-sm text-gray-500 mt-2">*Add-on: Deliver to home address for 15 AED extra (optional)</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Display Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our School Apparel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Varsity Jackets</h3>
                <p className="text-gray-600 mb-4">Premium varsity jackets that showcase school pride with custom embroidery and high-quality materials.</p>
                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Options
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hoodies</h3>
                <p className="text-gray-600 mb-4">Comfortable and stylish hoodies perfect for everyday wear, featuring your school logo and colors.</p>
                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Options
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sweaters</h3>
                <p className="text-gray-600 mb-4">Elegant sweaters that combine comfort with style, ideal for formal school events or cooler weather.</p>
                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Options
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">T-Shirts</h3>
                <p className="text-gray-600 mb-4">Durable and comfortable t-shirts perfect for school events, PE classes, or casual wear.</p>
                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  View Options
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Material Options Section */}
      <section className="py-16 bg-gray-50">
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
                <Button variant="outline" className="border-white text-brand-blue hover:bg-white/10 text-lg px-8 py-6">
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
