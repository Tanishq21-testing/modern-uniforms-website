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
  ChevronRight,
  FileText,
  Palette,
  Settings,
  HeartHandshake
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

      {/* Hero Section - Updated Design */}
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      Not Covering Your Team —<br />
                      <span className="text-brand-blue">But Reflecting Your Brand</span>
                    </h1>
                  </div>
                  <div className="hidden lg:block">
                    <img src={images.logo} alt="UniformConnect" className="h-16" />
                  </div>
                </div>
                
                {/* Updated Bullet Points with Modern Icons */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">100% Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Trusted By Industry Leaders</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <HeartHandshake className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Employee Satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">Detailed quote and production schedule</span>
                  </div>
                </div>

                {/* Updated Process Flow */}
                <div className="my-12">
                  <h3 className="text-lg font-semibold mb-6">Customisation</h3>
                  <div className="flex items-center justify-between max-w-md">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                      <div className="text-sm">
                        <div className="font-semibold">Initial</div>
                        <div className="text-gray-600">Consultation</div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                      <div className="text-sm">
                        <div className="font-semibold">Customisation</div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                      <div className="text-sm">
                        <div className="font-semibold">Production</div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                      <div className="text-sm">
                        <div className="font-semibold">Ongoing Program</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-brand-red font-bold text-lg">300AED/ 100pieces</span>
                  </div>
                  <Button 
                    className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-12 py-6 rounded-full"
                    onClick={scrollToConsultation}
                  >
                    Get Custom Uniform
                  </Button>
                  <div className="flex space-x-6 text-sm">
                    <span className="text-blue-500">Tailored to your brand identity</span>
                    <span className="text-green-500">Free Design Consultation</span>
                  </div>
                </div>
              </div>

              {/* Right Side Images with Colored Borders */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={images.uniformServices} 
                    alt="Chef uniforms" 
                    className="rounded-lg border-4 border-green-500 w-full h-48 object-cover"
                  />
                  <img 
                    src={images.Hoodieimage} 
                    alt="Custom hoodies" 
                    className="rounded-lg border-4 border-blue-500 w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src={images.schoolHoodie} 
                    alt="School uniforms" 
                    className="rounded-lg border-4 border-blue-500 w-full h-32 object-cover"
                  />
                  <img 
                    src={images.JCProducts} 
                    alt="Hospitality staff" 
                    className="rounded-lg border-4 border-red-500 w-full h-48 object-cover"
                  />
                </div>
                <div className="col-span-2 mt-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <span className="text-lg font-bold">50+ Years Experience</span>
                    <div className="text-sm text-gray-600">GCC READY • DUBAI BASED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Uniform Quality Matters - Updated Design */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="bg-white text-black rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 italic">WHY UNIFORM QUALITY MATTERS</h2>
                <p className="text-gray-600 mb-8">Your team's uniforms represent your brand in every interaction. High-quality, well-designed uniforms deliver tremendous value to your organization.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <Building className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Enhanced Brand Image</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>→ Reinforces brand recognition</li>
                      <li>→ Projects professionalism to clients</li>
                      <li>→ Creates a cohesive visual identity</li>
                    </ul>
                  </div>
                  <div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Improved Team Culture</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>→ Boosts employee morale and pride</li>
                      <li>→ Creates sense of belonging</li>
                      <li>→ Eliminates dress code confusion</li>
                    </ul>
                  </div>
                  <div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Business Growth</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>→ Stronger customer trust and loyalty</li>
                      <li>→ Increased referrals and growth</li>
                      <li>→ Improved customer experience</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - T-shirt with Overlays */}
              <div className="relative">
                <img 
                  src={images.Tshirt} 
                  alt="Quality uniform" 
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold">98% Fit Accuracy</span>
                </div>
                <div className="absolute top-1/2 left-4 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold">100% Branded Clothes</span>
                </div>
                <div className="absolute bottom-1/3 left-4 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold">Durable weave</span>
                </div>
                <div className="absolute bottom-1/4 left-4 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold">holds shape after 30+ washes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Guarantee - Updated Design */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - T-shirt with overlays */}
              <div className="relative">
                <img 
                  src={images.Tshirt} 
                  alt="Quality uniform" 
                  className="w-full max-w-md mx-auto opacity-80"
                />
                <div className="absolute top-1/4 left-8">
                  <div className="w-24 h-24 border-4 border-green-500 rounded-full opacity-60"></div>
                  <div className="absolute -right-32 top-8 bg-green-500 text-white px-4 py-1 rounded text-sm">
                    100% Branded Clothes
                  </div>
                </div>
                <div className="absolute bottom-1/3 left-12">
                  <div className="w-20 h-20 border-4 border-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute -right-24 top-4 bg-blue-500 text-white px-4 py-1 rounded text-sm">
                    Durable weave
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-16">
                  <div className="absolute -right-32 -top-2 bg-blue-500 text-white px-4 py-1 rounded text-sm">
                    holds shape after 30+ washes
                  </div>
                </div>
              </div>

              {/* Right Side - Service Guarantee */}
              <div className="bg-white text-black rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold">Our Service Guarantee</h2>
                </div>
                <p className="text-gray-600 mb-8">We stand behind the quality and craftsmanship of our uniform solutions with our comprehensive satisfaction guarantee.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">100% Satisfaction Guarantee</h3>
                      <p className="text-gray-600 text-sm">If you're not completely satisfied with your uniforms, we'll make it right.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Assurance</h3>
                      <p className="text-gray-600 text-sm">Every uniform undergoes rigorous quality checks before delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Timeliness Promise</h3>
                      <p className="text-gray-600 text-sm">We deliver on schedule or we'll offer a discount on your order.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Our Expertise - Updated Design */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Trust Our Expertise</h2>
            <div className="bg-white rounded-2xl p-8 border-4 border-purple-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-red-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-xl font-semibold mb-2">Years Experience</div>
                  <p className="text-gray-600">Decades of expertise serving the UAE market</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-xl font-semibold mb-2">Enterprise Clients</div>
                  <p className="text-gray-600">Trusted by leading businesses across the UAE</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2">35+</div>
                  <div className="text-xl font-semibold mb-2">Expert Team</div>
                  <p className="text-gray-600">Dedicated professionals across design, production and service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Made Bigger */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img src={images.clientLogos.jonesTheGrocer} alt="Jones The Grocer" className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.littleBangkok} alt="Little Bangkok" className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.fairgreen} alt="Fairgreen School" className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.aud} alt="American University Dubai" className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={images.clientLogos.hilton} alt="Hilton" className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity" />
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
