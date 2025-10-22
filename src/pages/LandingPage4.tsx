import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Users, CheckCircle, Award, Star, Phone, Mail, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import PageFooter from '@/components/PageFooter';
import LazyImage from '@/components/LazyImage';
const LandingPage4 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    phone: '',
    description: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.schoolName || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    try {
      // Insert consultation submission
      const {
        error
      } = await supabase.from('consultation_submissions').insert({
        name: formData.fullName,
        email: `${formData.schoolName}@school.ae`,
        company: formData.schoolName,
        phone: formData.phone,
        employee_count: '50+',
        message: formData.description
      });
      if (error) throw error;
      toast.success('Thank you! We\'ll contact you within 24 hours.');
      setFormData({
        fullName: '',
        schoolName: '',
        phone: '',
        description: ''
      });
      setFile(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const baseUrl = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/graduation2026/';
  const products = [{
    name: 'T-Shirts',
    price: 'from AED 75',
    image: `${baseUrl}Tshirt%20Mockup.png`,
    fallbacks: [`${baseUrl}Tshirt%20Mockup.jpg`, `${baseUrl}Tshirt%20Mockup.JPG`, `${baseUrl}T-Shirt%20Mockup.png`, `${baseUrl}T-Shirt%20Mockup.jpg`, `${baseUrl}Tshirt_Mockup.png`, `${baseUrl}tshirt%20mockup.png`, `${baseUrl}tshirt%20mockup.jpg`]
  }, {
    name: 'Hoodies',
    price: 'from AED 100',
    image: `${baseUrl}Hoodie%20Mockup.png`,
    fallbacks: [`${baseUrl}Hoodie%20Mockup.jpg`, `${baseUrl}Hoodie%20Mockup.JPG`, `${baseUrl}Hoodie%20Mockup.jpeg`, `${baseUrl}Hoodie_Mockup.png`, `${baseUrl}Hoodie_Mockup.jpg`, `${baseUrl}hoodie%20mockup.png`, `${baseUrl}hoodie%20mockup.jpg`]
  }, {
    name: 'Varsity Jackets',
    price: 'from AED 150',
    image: `${baseUrl}Varsity%20Jacket%20Mockup.png`,
    fallbacks: [`${baseUrl}Varsity%20Jacket%20Mockup.jpg`, `${baseUrl}Varsity%20Jacket%20Mockup.JPG`, `${baseUrl}Varsity%20Jacket%20Mockup.jpeg`, `${baseUrl}Varsity_Jacket_Mockup.png`, `${baseUrl}Varsity_Jacket_Mockup.jpg`, `${baseUrl}varsity%20jacket%20mockup.png`, `${baseUrl}varsity%20jacket%20mockup.jpg`]
  }, {
    name: 'Sweaters',
    price: 'from AED 100',
    image: `${baseUrl}Sweater%20Mockup.png`,
    fallbacks: [`${baseUrl}Sweater%20Mockup.jpg`, `${baseUrl}Sweater%20Mockup.JPG`, `${baseUrl}Sweater%20Mockup.jpeg`, `${baseUrl}Sweater.png`, `${baseUrl}Sweater.jpg`, `${baseUrl}sweater%20mockup.png`, `${baseUrl}sweater%20mockup.jpg`]
  }, {
    name: 'Graduation Gowns',
    price: 'from AED 90',
    image: `${baseUrl}Graduation%20Gowns%20Mockup.png`,
    fallbacks: [`${baseUrl}Graduation%20Gowns%20Mockup.jpg`, `${baseUrl}Graduation%20Gowns%20Mockup.JPG`, `${baseUrl}Graduation%20Gowns.jpg`, `${baseUrl}Graduation%20Gowns.png`, `${baseUrl}Graduation_Gowns_Mockup.png`, `${baseUrl}graduation%20gowns%20mockup.png`, `${baseUrl}graduation%20gowns.jpg`]
  }, {
    name: 'Graduation Caps',
    price: 'from AED 75',
    image: `${baseUrl}Graduation%20Caps%20Mockup.png`,
    fallbacks: [`${baseUrl}Graduation%20Caps%20Mockup.jpg`, `${baseUrl}Graduation%20Caps%20Mockup.JPG`, `${baseUrl}Graduation%20Caps.jpg`, `${baseUrl}Graduation%20Caps.png`, `${baseUrl}Graduation_Caps_Mockup.png`, `${baseUrl}graduation%20caps%20mockup.png`, `${baseUrl}graduation%20caps.jpg`]
  }];
  const schoolProjects = [{
    name: 'Raffles School',
    type: 'Hoodies',
    image: `${baseUrl}Raffle%20Hoodie.jpg`,
    fallbacks: [`${baseUrl}Raffle%20Hoodie.JPG`, `${baseUrl}Raffle%20Hoodie.jpeg`, `${baseUrl}Raffles%20Hoodie.jpg`, `${baseUrl}Raffles%20Hoodie.JPG`, `${baseUrl}raffle%20hoodie.jpg`]
  }, {
    name: 'DIA',
    type: 'Hoodies',
    image: `${baseUrl}Dia%20hoodie%202.jpg`,
    fallbacks: [`${baseUrl}Dia%20hoodie%202.JPG`, `${baseUrl}DIA%20Hoodie%202.jpg`, `${baseUrl}DIA%20Hoodie%202.JPG`, `${baseUrl}DIA%20Hoodie.JPG`, `${baseUrl}dia%20hoodies%20back.png`, `${baseUrl}dia%20hoodie%202.jpeg`]
  }, {
    name: 'Winchester School',
    type: 'Varsity Jacket',
    image: `${baseUrl}WinchesterJacket.jpg`,
    fallbacks: [`${baseUrl}WinchesterJacket.JPG`, `${baseUrl}Winchester%20Jacket.jpg`, `${baseUrl}Winchester%20Jacket.JPG`, `${baseUrl}winchester%20jacket.jpg`]
  }, {
    name: 'Al Salam Community School',
    type: 'Varsity Jacket',
    image: `${baseUrl}ASCS%20Jackets.jpg`,
    fallbacks: [`${baseUrl}ASCS%20Jackets.JPG`, `${baseUrl}ASCS%20Jacket.jpg`, `${baseUrl}ASCS%20Jacket.JPG`, `${baseUrl}ASCS%20Jacket.jpeg`, `${baseUrl}ascs%20jackets.jpg`]
  }];
  const howItWorks = [{
    icon: Upload,
    title: 'Upload Your Design',
    desc: 'Send your school\'s logo or artwork'
  }, {
    icon: CheckCircle,
    title: 'Get a Digital Mockup',
    desc: 'We\'ll send design options for approval'
  }, {
    icon: Award,
    title: 'We Produce & Deliver',
    desc: 'Made in our Dubai facility'
  }, {
    icon: Star,
    title: 'Celebrate Together',
    desc: 'Your students wear their identity with pride'
  }];
  const testimonials = [{
    school: 'Fairgreen International School',
    quote: 'UniformConnect made our Class of 2025 hoodies exactly how we imagined — and delivered on time!'
  }, {
    school: 'Dubai International Academy',
    quote: 'The quality and attention to detail exceeded our expectations. Highly recommend!'
  }, {
    school: 'Emirates International School',
    quote: 'Professional service from start to finish. Our students love their new uniforms!'
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue/10 via-background to-brand-red/10">
        <div className="absolute inset-0 hero-pattern"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your School. Your Style.{' '}
                <span className="premium-gradient-text">Class of 2026</span>{' '}
                Starts Here.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Design your school's hoodies, varsity jackets, and graduation outfits — 
                made in Dubai, delivered across the UAE.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span className="text-sm font-medium">Made in Dubai</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-brand-red" />
                  <span className="text-sm font-medium">Custom Designs</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <Card id="lead-form" className="shadow-2xl border-2 animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Bring My Design to Life</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Full Name *" value={formData.fullName} onChange={e => setFormData({
                    ...formData,
                    fullName: e.target.value
                  })} required />
                  </div>
                  
                  <div>
                    <Input placeholder="School Name *" value={formData.schoolName} onChange={e => setFormData({
                    ...formData,
                    schoolName: e.target.value
                  })} required />
                  </div>
                  
                  <div>
                    <Input placeholder="Phone Number *" type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} required />
                  </div>
                  
                  <div>
                    <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                      <Upload className="h-5 w-5" />
                      <span>{file ? file.name : 'Upload Your Design / Logo'}</span>
                      <input type="file" className="hidden" accept="image/*,.pdf" onChange={e => setFile(e.target.files?.[0] || null)} />
                    </label>
                  </div>
                  
                  <div>
                    <Textarea placeholder="Tell us what you want to create" value={formData.description} onChange={e => setFormData({
                    ...formData,
                    description: e.target.value
                  })} rows={4} />
                  </div>
                  
                  <Button type="submit" className="w-full premium-button h-auto py-4" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Bring My Design to Life'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground">Premium quality uniforms for your school</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => <Card key={index} className="premium-card group cursor-pointer overflow-hidden">
                <div className="aspect-square bg-white overflow-hidden">
                  <LazyImage src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fallbackSources={product.fallbacks as string[]} priority={index < 2} fetchPriority={index < 2 ? 'high' : 'auto'} />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="text-center">
                    <h3 className="font-bold text-base md:text-lg mb-1">{product.name}</h3>
                    <p className="text-brand-red font-semibold text-sm">{product.price}</p>
                  </div>
                  <Button variant="outline" className="w-full text-xs" onClick={scrollToForm}>
                    Quick Quote
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Gallery of School Projects */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="aspect-[7/8] bg-white flex items-center justify-center overflow-visible">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See What Other Schools Designed</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading schools across Dubai & the UAE</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {schoolProjects.map((project, index) => <Card key={index} className="premium-card group overflow-hidden hover:shadow-xl transition-all duration-300">
                <className="w-full h-full object-contain scale-[3] group-hover:scale-[3.1] transition-transform duration-500">
                  <LazyImage src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fallbackSources={project.fallbacks as string[]} priority={index === 0} fetchPriority={index === 0 ? 'high' : 'auto'} />
                </div>
                <CardContent className="p-4 bg-gradient-to-br from-background to-muted/50 space-y-1">
                  <p className="text-xs md:text-sm text-muted-foreground">{project.type}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Refer a School */}
      <section className="py-20 section-bg-3 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Refer a School, Get Rewarded!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Know a school that needs new uniforms or graduation outfits? Help us connect and earn a reward when they order!
            </p>
            <Button className="premium-button" onClick={() => navigate('/refer-school')}>
              Refer a School
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll reach out and thank you personally when it turns into an order.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple process from design to delivery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => <Card key={index} className="process-step text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-blue to-brand-red rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Schools Across the UAE</h2>
            <p className="text-xl text-muted-foreground">See what schools are saying about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="premium-card">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <p className="font-bold text-brand-blue">— {testimonial.school}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 cta-section text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start? Let's Design Your 2026 Collection Together.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today and bring your school's vision to life
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="tel:+971550759245" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone className="h-6 w-6" />
              <span className="text-lg">+971 50 759 9245</span>
            </a>
            <a href="mailto:premparsram@gmail.com" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail className="h-6 w-6" />
              <span className="text-lg">premparsram@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/uniformconnectdxb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Instagram className="h-6 w-6" />
              <span className="text-lg">@uniformconnectdxb</span>
            </a>
          </div>

          <Button onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })} className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8 py-6 h-auto">
            Get Started Now
          </Button>
        </div>
      </section>

      <PageFooter />
    </div>;
};
export default LandingPage4;
