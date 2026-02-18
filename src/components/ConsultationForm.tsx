
import { Button } from '@/components/ui/button';
import { BadgeCheck, Loader2 } from 'lucide-react';
import { forwardRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SuccessModal from '@/components/SuccessModal';

interface ConsultationFormProps {
  title?: string;
}

const ConsultationForm = forwardRef<HTMLDivElement, ConsultationFormProps>(
  ({ title = "Get Your Free Enterprise Consultation Today" }, ref) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      employeeCount: '50-100',
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
        const { error } = await supabase.from('consultation_leads').insert({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          employee_count: formData.employeeCount,
          message: formData.message,
          page_source: 'Landing Page – Enterprise Form'
        });

        if (error) throw error;

        try {
          await supabase.functions.invoke('send-consultation-email', {
            body: {
              name: formData.name,
              email: formData.email,
              company: formData.company,
              employeeCount: formData.employeeCount,
              message: formData.message,
              pageSource: 'Landing Page – Enterprise Form'
            }
          });
        } catch (emailError) {
          console.error('Email notification failed:', emailError);
        }

        setFormData({ name: '', email: '', company: '', employeeCount: '50-100', message: '' });
        setShowSuccess(true);
      } catch (error) {
        console.error('Error:', error);
        toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section className="py-16 bg-gray-900 text-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <input type="text" id="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" />
              </div>
              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium mb-1">Number of Employees</label>
                <select id="employeeCount" value={formData.employeeCount} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red">
                  <option value="50-100">50-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your uniform needs</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"></textarea>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                  ) : (
                    <>Get Your Enterprise Consultation <BadgeCheck className="ml-2 h-5 w-5" /></>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />
      </section>
    );
  }
);

ConsultationForm.displayName = "ConsultationForm";

export default ConsultationForm;
