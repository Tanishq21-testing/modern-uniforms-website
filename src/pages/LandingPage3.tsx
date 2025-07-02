
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Clock, 
  Users,
  Award,
  Building,
  ChevronRight
} from 'lucide-react';
import { images } from '@/assets/images';

const LandingPage3 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { name: 'T-shirts', image: images.Tshirt },
    { name: 'Polo Shirts', image: images.Tshirt },
    { name: 'Hoodies', image: images.Hoodieimage },
    { name: 'Sweaters', image: images.Sweater },
    { name: 'Jackets', image: images.Varsityjacket },
    { name: 'Chef Coats', image: images.Tshirt },
    { name: 'Aprons', image: images.Tshirt },
    { name: 'Caps', image: images.Tshirt },
    { name: 'Shirts', image: images.Tshirt },
    { name: 'Trousers', image: images.Tshirt },
    { name: 'Skirts', image: images.Tshirt }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Not Covering Your Team —<br />
                  <span className="text-brand-blue">Reflecting Your Brand</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Custom-tailored uniforms crafted to elevate your brand image, boost team morale, and drive business performance.
                </p>
                
                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-brand-red mr-3" />
                    <span>100% Premium Quality</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-brand-blue mr-3" />
                    <span>Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-brand-green mr-3" />
                    <span>Trusted by Industry Leaders</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-brand-red mr-3" />
                    <span>Designed for Employee Satisfaction</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-brand-blue mr-3" />
                    <span>Transparent Quotes & Production Timelines</span>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4">
                  <Button 
                    className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6 rounded-md"
                    onClick={scrollToConsultation}
                  >
                    Get Custom Uniform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-600">
                    From 100 AED Per Piece for Hoodies
                  </p>
                  <p className="text-sm text-gray-500">
                    Tailored to your brand identity · Free Design Consultation
                  </p>
                </div>
              </div>

              {/* Rotating Client Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={images.uniformServices} 
                    alt="Chef uniforms" 
                    className="rounded-lg border-4 border-brand-green w-full h-48 object-cover"
                  />
                  <img 
                    src={images.Hoodieimage} 
                    alt="Custom hoodies" 
                    className="rounded-lg border-4 border-brand-blue w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src={images.schoolHoodie} 
                    alt="School uniforms" 
                    className="rounded-lg border-4 border-brand-red w-full h-32 object-cover"
                  />
                  <img 
                    src={images.JCProducts} 
                    alt="Hospitality staff" 
                    className="rounded-lg border-4 border-brand-green w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">We understand your needs and brand requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Customization</h3>
                <p className="text-gray-600 text-sm">Design and fabric selection tailored to your brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-gray-600 text-sm">Premium manufacturing with quality control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Program management and easy reordering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Uniform Quality Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Uniform Quality Matters</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Building className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Enhanced Brand Image</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Reinforces recognition</li>
                    <li>Projects professionalism</li>
                    <li>Creates cohesive visual identity</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Improved Team Culture</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Boosts morale</li>
                    <li>Builds belonging</li>
                    <li>Eliminates confusion</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Business Growth</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Stronger customer trust</li>
                    <li>More referrals</li>
                    <li>Better experience</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={images.Tshirt} 
                  alt="Quality uniform" 
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-brand-green">98% Fit Accuracy</span>
                </div>
                <div className="absolute top-1/2 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-brand-blue">Durable Weave</span>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-brand-red">Holds Shape After 30+ Washes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Check className="w-12 h-12 text-brand-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">100% Satisfaction Guarantee</h3>
                  <p className="text-gray-600 text-sm">If you're not completely satisfied, we'll make it right.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">Each uniform undergoes rigorous quality checks.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-brand-red mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Timeliness Promise</h3>
                  <p className="text-gray-600 text-sm">On-time delivery or we offer a discount.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Our Expertise */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Trust Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl font-semibold mb-2">Years Experience</div>
                <p className="text-blue-100">Decades of UAE market service</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-xl font-semibold mb-2">Enterprise Clients</div>
                <p className="text-blue-100">Trusted by leading UAE companies</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-xl font-semibold mb-2">Expert Team</div>
                <p className="text-blue-100">Dedicated designers, tailors & support staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src={images.clientLogos.jonesTheGrocer} alt="Jones The Grocer" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.littleBangkok} alt="Little Bangkok" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.fairgreen} alt="Fairgreen School" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.aud} alt="American University Dubai" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.hilton} alt="Hilton" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Range</h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set of products */}
              {products.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-48">
                  <Card>
                    <CardContent className="p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-center">{product.name}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate for continuous scroll */}
              {products.map((product, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-48">
                  <Card>
                    <CardContent className="p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-center">{product.name}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Jackets Callout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-red-100 text-red-800">🇦🇪 Dubai-based | GCC Ready</Badge>
                <h2 className="text-3xl font-bold mb-6">Custom School Jackets</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Premium senior jackets and graduation wear designed to celebrate achievements and build school pride.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Available for schools and graduating classes.
                </p>
                <div className="space-x-4">
                  <Button variant="outline" onClick={scrollToConsultation}>
                    Request a Sample
                  </Button>
                  <span className="text-sm text-gray-600">Bulk Discounts Available</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={images.schoolHoodie} 
                  alt="School jacket front" 
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img 
                  src={images.Varsityjacket} 
                  alt="School jacket back" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of UAE businesses who trust us with their uniform needs</p>
          <Button 
            className="bg-white text-brand-red hover:bg-gray-100 text-lg px-8 py-6 rounded-md"
            onClick={scrollToConsultation}
          >
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
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue">
                    <option>Number of Employees</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-100</option>
                    <option>100+</option>
                  </select>
                  <textarea 
                    placeholder="Tell us about your uniform requirements..." 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
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
    </div>
  );
};

export default LandingPage3;
