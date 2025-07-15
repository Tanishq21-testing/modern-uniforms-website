import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PageFooter from '@/components/PageFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Star, Shield, Clock, Users, Award, Building, ChevronRight, FileText, Palette, Settings, HeartHandshake, Factory, Target, TrendingUp, Zap, MessageCircle, Hash } from 'lucide-react';
import { images } from '@/assets/images';

const LandingPage3 = () => {
  const consultationFormRef = useRef<HTMLDivElement>(null);
  const scrollToConsultation = () => {
    consultationFormRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header scrollToConsultation={scrollToConsultation} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 section-bg-1 hero-pattern overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Not Covering Your Team<br />
                    But <span className="premium-gradient-text">Reflecting Your Brand</span>
                  </h1>
                  <div className="flex items-center space-x-4 text-lg font-medium text-premium-600">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span>50+ Years Experience • GCC READY - Dubai Based</span>
                  </div>
                </div>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">100% Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-green to-green-600 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Trusted By Industry Leaders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Employee Satisfaction</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-red mb-2">300AED / 100pieces</div>
                      <p className="text-premium-600 font-medium">Tailored to your brand identity</p>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <button className="premium-button text-xl px-12 py-5" onClick={scrollToConsultation}>
                      Get Custom Uniform
                    </button>
                    <p className="text-sm text-premium-500 mt-3">Tailored to your brand identity • Free Design Consultation</p>
                  </div>
                </div>
              </div>

              {/* Hero Images Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src={images.uniformServices} alt="Chef uniforms" className="rounded-2xl w-full h-48 object-cover animate-float" style={{boxShadow: 'var(--shadow-medium)'}} />
                    <img src={images.Hoodieimage} alt="Custom hoodies" className="rounded-2xl w-full h-32 object-cover float-delay-1" style={{boxShadow: 'var(--shadow-soft)'}} />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img src={images.schoolHoodie} alt="School uniforms" className="rounded-2xl w-full h-32 object-cover float-delay-2" style={{boxShadow: 'var(--shadow-soft)'}} />
                    <img src={images.JCProducts} alt="Hospitality staff" className="rounded-2xl w-full h-48 object-cover animate-float" style={{boxShadow: 'var(--shadow-medium)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Personalization Section */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">HIGH PERSONALISATION</h2>
              <p className="text-xl text-premium-600">
                <span className="text-brand-blue font-bold">COLOR</span> & <span className="text-brand-red font-bold">CUT</span> & <span className="text-brand-green font-bold">DESIGN</span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="premium-card">
                  <h3 className="text-2xl font-bold mb-6">WHAT CAN I CUSTOMISE?</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-premium-200 pb-2">
                      <span className="font-medium">GARMENT TYPE</span>
                      <span className="text-premium-600">T-shirts, hoodies, chef coats, pants</span>
                    </div>
                    <div className="flex justify-between border-b border-premium-200 pb-2">
                      <span className="font-medium">FABRIC & COLOR</span>
                      <span className="text-premium-600">Wide range of materials and color tones</span>
                    </div>
                    <div className="flex justify-between border-b border-premium-200 pb-2">
                      <span className="font-medium">DECORATION</span>
                      <span className="text-premium-600">Embroidery or screen printing</span>
                    </div>
                    <div className="flex justify-between border-b border-premium-200 pb-2">
                      <span className="font-medium">FIT & CUT</span>
                      <span className="text-premium-600">Unisex, tailored, relaxed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">YOUR DESIGN</span>
                      <span className="text-premium-600">Logos, slogans, patterns – your choice</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-premium-900 text-white p-6 rounded-2xl">
                  <p className="text-lg font-medium italic text-center">
                    "Just tell us what you need, and we'll make it happen."
                  </p>
                  <p className="text-center text-premium-300 mt-2 text-sm">
                    All uniforms are fully customizable — from fabric color to cut and logo placement.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img src={images.Tshirt} alt="Customizable uniform" className="max-w-md w-full rounded-2xl" style={{boxShadow: 'var(--shadow-large)'}} />
                  <div className="absolute top-4 right-4 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-bold">
                    100% Branded Clothes
                  </div>
                  <div className="absolute bottom-4 left-4 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold">
                    Durable weave
                  </div>
                  <div className="absolute right-4 top-1/2 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold transform -translate-y-1/2">
                    holds shape after 30+ washes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 section-bg-3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">BASED ON 70 000+</h2>
              <p className="text-xl text-premium-600">Measured sizing vs received fit.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src={images.Tshirt} alt="Perfect fit uniform" className="max-w-sm w-full mx-auto rounded-2xl" style={{boxShadow: 'var(--shadow-large)'}} />
                <div className="absolute -left-8 top-1/4 stats-card">
                  <div className="text-3xl font-bold text-brand-green mb-2">98% Fit</div>
                  <div className="text-lg font-medium text-brand-green">Accuracy</div>
                </div>
                <div className="absolute -right-8 top-1/2 stats-card">
                  <div className="text-3xl font-bold text-brand-red mb-2">0.4% Return</div>
                  <div className="text-lg font-medium text-brand-red">Rate</div>
                </div>
                <div className="absolute -left-4 bottom-1/4 stats-card">
                  <div className="text-3xl font-bold text-brand-blue mb-2">&lt;24h</div>
                  <div className="text-lg font-medium text-brand-blue">Reorder Processing</div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="premium-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">BRAND IDENTITY</h3>
                      <p className="text-premium-600">Uniforms are a walking extension of your brand</p>
                    </div>
                  </div>
                </div>
                
                <div className="premium-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-red-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Team Unity & Culture</h3>
                      <p className="text-premium-600">by wearing something made for them, they feel it.</p>
                    </div>
                  </div>
                </div>
                
                <div className="premium-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-green-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Long-Term Growth</h3>
                      <p className="text-premium-600">Custom uniforms are assets for long-term visibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Process */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="process-step text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-brand-red mb-3">Initial Consultation</h3>
                <p className="text-premium-600">Our senior consultants meet with you to understand your brand, requirements, and objectives. We analyze your current uniform program and identify opportunities for improvement.</p>
              </div>
              
              <div className="process-step text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Custom Development</h3>
                <p className="text-premium-600">Our team works with you to decide fabric, colors and materials for your uniforms that align with your brand identity and practical needs. We present multiple options with detailed specifications.</p>
              </div>
              
              <div className="process-step text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-3">Production Excellence</h3>
                <p className="text-premium-600">We source the highest quality materials and work with trusted manufacturing partners. Rigorous quality control ensures consistency and attention to detail across all items.</p>
              </div>
              
              <div className="process-step text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-3">Ongoing Program Management</h3>
                <p className="text-premium-600">Your dedicated account manager oversees your uniform program, handling reorders, addressing concerns, and ensuring continued satisfaction with quarterly reviews and program optimization.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="premium-button text-lg px-10 py-4" onClick={scrollToConsultation}>
                Get in Touch with Us
              </button>
              <p className="text-sm text-premium-500 mt-3">Own Account Manager • we respond under 24H</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Our Expertise */}
      <section className="py-20 section-bg-3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Trust Our Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stats-card">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl font-bold mb-4">Years Experience</div>
                <p className="text-premium-600">Decades of expertise serving the UAE market</p>
              </div>
              
              <div className="stats-card">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-xl font-bold mb-4">Enterprise Clients</div>
                <p className="text-premium-600">Trusted by leading businesses across the UAE</p>
              </div>
              
              <div className="stats-card">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-xl font-bold mb-4">Expert Team</div>
                <p className="text-premium-600">Dedicated professionals across design, production and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why UniformConnect Section */}
      <section className="py-20 section-bg-3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why UniformConnect ?</h2>
              <p className="text-xl text-premium-600">Now that you already know</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="premium-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">High satisfaction Rate</h3>
                <p className="text-premium-600">100% Client satisfaction from over 200+ companies</p>
              </div>
              
              <div className="premium-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tailored to Your Brand</h3>
                <p className="text-premium-600">Every uniform is built with your identity in mind</p>
              </div>
              
              <div className="premium-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Seamless Reorders</h3>
                <p className="text-premium-600">&lt;24h reorder processing, always here for consistency</p>
              </div>
              
              <div className="premium-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">One Dedicated Contact</h3>
                <p className="text-premium-600">You'll never chase support. You have your Own Account manager</p>
              </div>
              
              <div className="premium-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Trusted by Leaders</h3>
                <p className="text-premium-600">Hilton, Radisson, Raffles, Gems and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee Section */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Service Guarantee</h2>
                </div>
                
                <p className="text-premium-600 mb-8 italic">
                  We stand behind the quality and craftsmanship of our uniform solutions with our comprehensive satisfaction guarantee.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Check className="w-5 h-5 text-brand-green" />
                      <h3 className="text-xl font-bold">100% Satisfaction Guarantee</h3>
                    </div>
                    <p className="text-premium-600">If you're not completely satisfied with your uniforms, we'll make it right.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Check className="w-5 h-5 text-brand-green" />
                      <h3 className="text-xl font-bold">Quality Assurance</h3>
                    </div>
                    <p className="text-premium-600">Every uniform undergoes rigorous quality checks before delivery.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Check className="w-5 h-5 text-brand-green" />
                      <h3 className="text-xl font-bold">Timeliness Promise</h3>
                    </div>
                    <p className="text-premium-600">We deliver on schedule or we'll offer a discount on your order.</p>
                  </div>
                </div>
              </div>
              
              <div className="premium-card">
                <h3 className="text-2xl font-bold mb-6">Our Guarantee Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Quality Guarantee</h4>
                    <p className="text-sm text-premium-600">We guarantee the quality of our workmanship and materials for 90 days from delivery. If any manufacturing defects occur during this period, we'll repair or replace the items at no cost.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Color Consistency</h4>
                    <p className="text-sm text-premium-600">We guarantee color consistency across your entire uniform program. If colors don't match our approved samples, we'll replace the items free of charge.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Sizing Satisfaction</h4>
                    <p className="text-sm text-premium-600">If standard sizes don't fit properly, we offer size exchanges within 30 days of delivery, ensuring your team has comfortable, well-fitting uniforms.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Long-Term Support</h4>
                    <p className="text-sm text-premium-600">As your uniform provider, we're committed to your long-term satisfaction with ongoing support, reorder assistance, and program optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-xl text-premium-600 mb-4">Join these prestigious organizations who trust us with their uniform needs.</p>
            <p className="text-lg text-premium-500 mb-12">Our clients span hospitality, education, food service, and corporate sectors.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <img src={images.clientLogos.hilton} alt="Hilton" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.jonesTheGrocer} alt="Jones The Grocer" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.radissonRed} alt="Radisson Red" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.littleBangkok} alt="Little Bangkok" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.fairgreen} alt="Fairgreen" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.gems} alt="GEMS" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.raffles} alt="Raffles" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.mezzaHouse} alt="Mezza House" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.khansaheb} alt="Khansaheb" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.aud} alt="AUD" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.dubaiCreek} alt="Dubai Creek" className="h-20 w-auto object-contain logo-hover mx-auto" />
              <img src={images.clientLogos.jc} alt="JC" className="h-20 w-auto object-contain logo-hover mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Garment Pricing Section */}
      <section className="py-20 section-bg-3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Garment Pricing (Examples)</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="pricing-card text-center">
                <img src={images.Hoodieimage} alt="Hoodies" className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">HOODIES</h3>
                <div className="text-sm text-premium-500 mb-2">FROM</div>
                <div className="text-3xl font-bold text-brand-red mb-4">100 AED</div>
                <p className="text-premium-600 mb-2">Logo + Fabric Choice</p>
                <p className="text-sm text-premium-500">Popular for Teams</p>
              </div>
              
              <div className="pricing-card text-center">
                <img src={images.Varsityjacket} alt="Jackets" className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">JACKETS</h3>
                <div className="text-sm text-premium-500 mb-2">FROM</div>
                <div className="text-3xl font-bold text-brand-red mb-4">150 AED</div>
                <p className="text-premium-600 mb-2">Tailored Branding</p>
                <p className="text-sm text-premium-500">Great for Front Desk</p>
              </div>
              
              <div className="pricing-card text-center">
                <img src={images.Tshirt} alt="T-Shirts" className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">T-Shirts</h3>
                <div className="text-sm text-premium-500 mb-2">FROM</div>
                <div className="text-3xl font-bold text-brand-red mb-4">50 AED</div>
                <p className="text-premium-600 mb-2">Print or embroidery</p>
                <p className="text-sm text-premium-500">Fast Delivery Items</p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Other Items ?</h3>
              <ul className="space-y-2 mb-6 text-premium-600">
                <li>• All prices are indicative and vary by quantity and customisation</li>
                <li>• we also produce: Chef coats, school Uniforms, Security Outfits, Custom sets, and more.</li>
              </ul>
              
              <button className="premium-button text-xl px-12 py-5" onClick={scrollToConsultation}>
                Order Now
              </button>
              <p className="text-sm text-premium-500 mt-3">Cut-Color-Decoration defined with you • we respond under 24H</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 text-white/90">Join hundreds of UAE businesses who trust us with their uniform needs</p>
          <button className="bg-white text-premium-900 hover:bg-premium-50 font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105" onClick={scrollToConsultation}>
            Get Custom Uniform
            <ArrowRight className="ml-2 h-6 w-6 inline" />
          </button>
          <p className="text-sm mt-4 text-white/80">Trusted by 50+ brands in Dubai | 100% Premium Fabric Guarantee</p>
        </div>
      </section>

      {/* Consultation Form */}
      <section ref={consultationFormRef} className="py-20 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="premium-card">
              <h3 className="text-3xl font-bold text-center mb-2">Get Your Free Consultation</h3>
              <p className="text-center text-premium-600 mb-8">We'll create a custom proposal tailored to your needs</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300" 
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300" 
                  />
                </div>
                <select className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300">
                  <option>Number of Employees</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-100</option>
                  <option>100+</option>
                </select>
                <textarea 
                  placeholder="Tell us about your uniform requirements..." 
                  rows={4} 
                  className="w-full px-6 py-4 border border-premium-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300" 
                />
                <button className="premium-button w-full text-xl py-4">
                  Get My Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default LandingPage3;