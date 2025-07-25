import { Button } from '@/components/ui/button';
import { BadgeCheck, Calendar, Phone } from 'lucide-react';
import { forwardRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface OfferConsultationProps {
  title?: string;
}

const OfferConsultation = forwardRef<HTMLDivElement, OfferConsultationProps>(
  ({ title = "Get Your Free Enterprise Consultation" }, ref) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      phone: '',
      employeeCount: 'under50',
      message: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Save to Supabase
        const { error: dbError } = await supabase
          .from('consultation_submissions')
          .insert({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            employee_count: formData.employeeCount,
            message: formData.message
          });

        if (dbError) throw dbError;

        // Send email notification
        const { error: emailError } = await supabase.functions.invoke('send-consultation-email', {
          body: formData
        });

        if (emailError) throw emailError;

        // Track conversion with Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag && (window as any).gtagSendEvent) {
          (window as any).gtagSendEvent();
        }
        
        // Set session storage flag for thank you page
        sessionStorage.setItem('formSubmitted', 'true');
        
        // Redirect to thank you page
        window.location.href = '/thank-you';
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          employeeCount: 'under50',
          message: ''
        });
      } catch (error) {
        console.error('Submission error:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    };
    
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 to-brand-blue text-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {title}
                </h2>
                
                <p className="text-xl text-gray-200">
                  Our uniform experts will analyze your needs and create a customized solution for your organization.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-red/20 p-3 rounded-full mr-4">
                      <BadgeCheck className="h-6 w-6 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Experience Tailored Uniform Solutions</h3>
                      <p className="text-gray-300">Trusted by many companies in the UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-red/20 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Custom Quote & Timeline</h3>
                      <p className="text-gray-300">Receive a detailed quote and production schedule</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-red/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Dedicated Account Manager</h3>
                      <p className="text-gray-300">A single point of contact for your entire uniform program</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Schedule Your Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                      <Input 
                        id="name" 
                        required 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" 
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name*</label>
                      <Input 
                        id="company" 
                        required 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" 
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
                      <Input 
                        id="phone" 
                        required 
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" 
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-medium mb-1">Number of Employees</label>
                    <select 
                      id="employeeCount" 
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                      value={formData.employeeCount}
                      onChange={handleChange}
                    >
                      <option value="under50">Under 50</option>
                      <option value="50-100">50-100</option>
                      <option value="101-500">101-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your needs</label>
                    <Textarea 
                      id="message" 
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" 
                      placeholder="Please describe your uniform requirements"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-400">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

OfferConsultation.displayName = "OfferConsultation";

export default OfferConsultation;
