import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Users, CheckCircle, Award, Star, Phone, Mail, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import PageFooter from '@/components/PageFooter';

const LandingPage4 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    phone: '',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.schoolName || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert consultation submission
      const { error } = await supabase
        .from('consultation_submissions')
        .insert({
          name: formData.fullName,
          email: `${formData.schoolName}@school.ae`,
          company: formData.schoolName,
          phone: formData.phone,
          employee_count: '50+',
          message: formData.description,
        });

      if (error) throw error;

      toast.success('Thank you! We\'ll contact you within 24 hours.');
      setFormData({ fullName: '', schoolName: '', phone: '', description: '' });
      setFile(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    { name: 'Hoodies', price: 'from AED 100', image: 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Products/Hoodie%20Mockup.png' },
    { name: 'Varsity Jackets', price: 'from AED 150', image: 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/jackets/Varsity%20Jacket%20Mockup.JPG' },
    { name: 'Sweaters', price: 'from AED 100', image: 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Products/Sweater%20Mockup.jpg' },
    { name: 'Graduation Gowns', price: 'from AED 90', image: 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Products/Graduation%20Gown%20Mockup.jpg' },
    { name: 'Graduation Hats', price: 'from AED 75', image: 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Products/Graduation%20Caps.jpg' },
  ];

  const schoolProjects = [
    { name: 'Repton School 2025', type: 'Varsity Jackets', image: '/assets/Fairgreen school hoodie.png' },
    { name: 'GEMS Founders', type: 'Hoodies', image: '/assets/fairgreen logo.png' },
    { name: 'Dubai International Academy', type: 'Graduation Gowns', image: '/assets/DIA LOGO.png' },
    { name: 'Emirates International School', type: 'Sweaters', image: '/assets/EIS Logo.jpg' },
  ];

  const howItWorks = [
    { icon: Upload, title: 'Upload Your Design', desc: 'Send your school\'s logo or artwork' },
    { icon: CheckCircle, title: 'Get a Digital Mockup', desc: 'We\'ll send design options for approval' },
    { icon: Award, title: 'We Produce & Deliver', desc: 'Made in our Dubai facility' },
    { icon: Star, title: 'Celebrate Together', desc: 'Your students wear their identity with pride' },
  ];

  const testimonials = [
    { school: 'Fairgreen International School', quote: 'UniformConnect made our Class of 2025 hoodies exactly how we imagined — and delivered on time!' },
    { school: 'Dubai International Academy', quote: 'The quality and attention to detail exceeded our expectations. Highly recommend!' },
    { school: 'Emirates International School', quote: 'Professional service from start to finish. Our students love their new uniforms!' },
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <Card className="shadow-2xl border-2 animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Bring My Design to Life</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      placeholder="School Name *"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Phone Number *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                      <Upload className="h-5 w-5" />
                      <span>{file ? file.name : 'Upload Your Design / Logo'}</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us what you want to create"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full premium-button h-auto py-4"
                    disabled={isSubmitting}
                  >
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

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="premium-card group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-brand-blue/5 to-brand-red/5 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-brand-red font-semibold">{product.price}</p>
                  </div>
                  <Button variant="outline" className="w-full">Quick Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery of School Projects */}
      <section className="py-20 section-bg-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See What Other Schools Designed</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading schools across Dubai & the UAE</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolProjects.map((project, index) => (
              <Card key={index} className="premium-card group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-brand-blue/5 to-brand-green/5 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-8"
                    />
                  </div>
                  <div className="p-4 bg-white/50 backdrop-blur-sm">
                    <h3 className="font-bold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <Button className="premium-button">Refer a School</Button>
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
            {howItWorks.map((step, index) => (
              <Card key={index} className="process-step text-center">
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
              </Card>
            ))}
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
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <p className="font-bold text-brand-blue">— {testimonial.school}</p>
                </CardContent>
              </Card>
            ))}
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
            <a href="tel:+971501234567" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone className="h-6 w-6" />
              <span className="text-lg">+971 50 123 4567</span>
            </a>
            <a href="mailto:schools@uniformconnect.ae" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail className="h-6 w-6" />
              <span className="text-lg">schools@uniformconnect.ae</span>
            </a>
            <a href="https://instagram.com/uniformconnect" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Instagram className="h-6 w-6" />
              <span className="text-lg">@uniformconnect</span>
            </a>
          </div>

          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8 py-6 h-auto"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default LandingPage4;
