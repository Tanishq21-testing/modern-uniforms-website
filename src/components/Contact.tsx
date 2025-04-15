import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const testImageUrl = 'https://your-supabase-url.supabase.co/storage/v1/object/public/your-bucket/newest%20logo%20(1).jpeg';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            Have questions or ready to discuss your uniform needs? Get in touch with us today.
          </p>
          
          <div className="mt-4 flex justify-center">
            <img 
              src={testImageUrl} 
              alt="Test from Supabase" 
              className="h-12 w-auto hidden"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              We'd love to hear from you. Fill out the form, and our team will get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="bg-gray-800 border-gray-700 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-brand-blue"
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-brand-red/90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-blue/20 rounded-full text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Our Location</h4>
                  <p className="text-gray-300 mt-1">
                    Dubai Design District, Building 7<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-red/20 rounded-full text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <p className="text-gray-300 mt-1">
                    +971 50 759 9245<br />
                
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-green/20 rounded-full text-brand-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-gray-300 mt-1">
                    premparsram@gmail.com <br/>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-lg mb-4">Business Hours</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between mb-2">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 1:00 PM, 4:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
