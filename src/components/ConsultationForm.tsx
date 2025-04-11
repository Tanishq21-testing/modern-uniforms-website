
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import { forwardRef } from 'react';

interface ConsultationFormProps {
  title?: string;
}

const ConsultationForm = forwardRef<HTMLDivElement, ConsultationFormProps>(
  ({ title = "Get Your Free Enterprise Consultation Today" }, ref) => {
    return (
      <section className="py-16 bg-gray-900 text-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  required 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                />
              </div>
              <div>
                <label htmlFor="employees" className="block text-sm font-medium mb-1">Number of Employees</label>
                <select 
                  id="employees" 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <option value="50-100">50-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your uniform needs</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-red" 
                ></textarea>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 text-lg">
                  Get Your Enterprise Consultation
                  <BadgeCheck className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

ConsultationForm.displayName = "ConsultationForm";

export default ConsultationForm;
