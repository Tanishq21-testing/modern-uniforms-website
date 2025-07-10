import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Star, Shield, Clock, Users, Award, Building, ChevronRight, FileText, Palette, Settings, HeartHandshake } from 'lucide-react';
import { images } from '@/assets/images';
const LandingPage3 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const products = [{
    name: 'T-shirts',
    image: images.Tshirt
  }, {
    name: 'Polo Shirts',
    image: images.Tshirt
  }, {
    name: 'Hoodies',
    image: images.Hoodieimage
  }, {
    name: 'Sweaters',
    image: images.Sweater
  }, {
    name: 'Jackets',
    image: images.Varsityjacket
  }, {
    name: 'Chef Coats',
    image: images.Tshirt
  }, {
    name: 'Aprons',
    image: images.Tshirt
  }, {
    name: 'Caps',
    image: images.Tshirt
  }, {
    name: 'Shirts',
    image: images.Tshirt
  }, {
    name: 'Trousers',
    image: images.Tshirt
  }, {
    name: 'Skirts',
    image: images.Tshirt
  }];
  return <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* Section 1: Uniform Highlights */}
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Not Just Covering Your Team —<br />
                    <span className="text-brand-blue">Reflecting Your Brand Identity</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">Trusted by Industry Leaders Across the UAE</p>
                </div>
                
                {/* Bullet Points */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Boost Employee Confidence and Satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Work with a Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Receive Detailed Quotes and Transparent Production Schedules</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Guaranteed 100% Premium Fabric and Finishing</span>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4 text-center lg:text-left">
                  <div className="text-2xl font-bold text-brand-red">From AED 300 for 100 pieces</div>
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-12 py-6 rounded-md" onClick={scrollToConsultation}>
                    Get Custom Uniforms
                  </Button>
                  <div className="text-sm text-gray-600">
                    Tailored to your brand identity | Free Design Consultation
                  </div>
                </div>
              </div>

              {/* Right Side Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={images.uniformServices} alt="Chef uniforms" className="rounded-lg w-full h-48 object-cover shadow-lg" />
                  <img src={images.Hoodieimage} alt="Custom hoodies" className="rounded-lg w-full h-32 object-cover shadow-lg" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src={images.schoolHoodie} alt="School uniforms" className="rounded-lg w-full h-32 object-cover shadow-lg" />
                  <img src={images.JCProducts} alt="Hospitality staff" className="rounded-lg w-full h-48 object-cover shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 mb-12">Our 4-Step Custom Uniform Process</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                <p className="text-gray-600">We discuss your vision, brand goals, and uniform needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Understanding Your Needs</h3>
                <p className="text-gray-600">Our team guides you through fabrics, colors, styles, and sizing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Production & Delivery</h3>
                <p className="text-gray-600">Uniforms are tailored, branded, and delivered on schedule.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Uniforms in Action</h3>
                <p className="text-gray-600">Your team looks sharp, aligned, and brand-consistent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Product Options</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Designed for Your Brand</p>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set of products */}
              {products.map((product, index) => <div key={index} className="flex-shrink-0 w-64">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                      <h3 className="font-semibold text-center text-lg">{product.name}</h3>
                    </CardContent>
                  </Card>
                </div>)}
              {/* Duplicate for continuous scroll */}
              {products.map((product, index) => <div key={`duplicate-${index}`} className="flex-shrink-0 w-64">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                      <h3 className="font-semibold text-center text-lg">{product.name}</h3>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Personalization Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Customize Every Detail</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Your Brand, Your Way</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Garment Type</h3>
                      <p className="text-gray-600">T-shirts, hoodies, chef coats, pants, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fabric & Color</h3>
                      <p className="text-gray-600">Wide variety of materials and tones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Decoration</h3>
                      <p className="text-gray-600">Embroidery or screen printing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fit & Cut</h3>
                      <p className="text-gray-600">Unisex, tailored, or relaxed fit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Your Design</h3>
                      <p className="text-gray-600">Logos, slogans, patterns – completely your choice</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-center">
                    "Just tell us what you need, and we'll make it happen."
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img src={images.Tshirt} alt="Customizable uniform" className="max-w-md w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: School Product Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Premium School Uniforms</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Designed to Impress</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img src={images.Hoodieimage} alt="School hoodies" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Hoodies</h3>
                  <p className="text-brand-red font-bold text-xl mb-4">Starting from AED 100</p>
                  <p className="text-gray-600 mb-6">Soft fleece lining, custom school logos</p>
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full" onClick={scrollToConsultation}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img src={images.Varsityjacket} alt="School jackets" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Jackets</h3>
                  <p className="text-brand-red font-bold text-xl mb-4">Starting from AED 150</p>
                  <p className="text-gray-600 mb-6">Premium materials, custom designs</p>
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full" onClick={scrollToConsultation}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img src={images.Sweater} alt="School sweaters" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Sweaters</h3>
                  <p className="text-brand-red font-bold text-xl mb-4">Starting from AED 90</p>
                  <p className="text-gray-600 mb-6">Comfortable fit, durable materials</p>
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full" onClick={scrollToConsultation}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg">
              <p className="text-sm text-gray-500 mb-4">All prices are indicative and may vary based on quantity and customization.</p>
              <p className="text-lg font-medium">
                Whether it's for sports day, graduation, or daily wear — we create school uniforms that students are proud to wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Product Quality Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Crafted for Performance & Longevity</h2>
            <p className="text-xl text-gray-600 mb-12">Our uniforms hold shape and color even after 30+ washes</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Fabrics</h3>
                <p className="text-gray-600">Only the finest materials selected</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Finishing & Stitching</h3>
                <p className="text-gray-600">Expert craftsmanship in every detail</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Color Stability</h3>
                <p className="text-gray-600">After repeated washes</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Fit & Comfort</h3>
                <p className="text-gray-600">Designed for all-day wear</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wash-Tested Durability</h3>
                <p className="text-gray-600">Rigorously tested for longevity</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Tailoring</h3>
                <p className="text-gray-600">Professional craftsmanship guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Trust Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">A Seamless Experience</h2>
            <p className="text-xl text-gray-600 mb-12">From Design to Delivery</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Workflow</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-brand-red" />
                    <span>Collaborative planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-brand-red" />
                    <span>Material selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-brand-red" />
                    <span>Real-time updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-brand-red" />
                    <span>Final delivery with quality check</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Our dedicated account management team ensures every detail meets your expectations.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Quality guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Trusted by Industry Leaders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 mb-12">Our Clients Include Some of the Most Recognized Names in the UAE</p>
            <div className="flex flex-wrap justify-center items-center gap-16">
              <img src={images.clientLogos.jonesTheGrocer} alt="Jones The Grocer" className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.littleBangkok} alt="Little Bangkok" className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.fairgreen} alt="Fairgreen School" className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.aud} alt="American University Dubai" className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.hilton} alt="Hilton" className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of UAE businesses who trust us with their uniform needs</p>
          <Button className="bg-white text-brand-red hover:bg-gray-100 text-lg px-8 py-6 rounded-md" onClick={scrollToConsultation}>
            Get Custom Uniform
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm mt-4 opacity-80">UAE's #1 Custom Uniform Partner</p>
        </div>
      </section>

      {/* Consultation Form */}
      <section ref={consultationFormRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Get Your Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                  </div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue">
                    <option>Number of Employees</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-100</option>
                    <option>100+</option>
                  </select>
                  <textarea placeholder="Tell us about your uniform requirements..." rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                  <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3">
                    Get My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>;
};
export default LandingPage3;