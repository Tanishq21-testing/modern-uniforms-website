
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactInfo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting UniformConnect. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We'd love to hear from you. Get in touch with our team for any inquiries about our uniform services.
          </p>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-brand-blue/20 rounded-full text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Our Location</h4>
                    <p className="text-gray-600 mt-1">
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
                    <p className="text-gray-600 mt-1">
                      +971 4 123 4567<br />
                      +971 50 987 6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-brand-green/20 rounded-full text-brand-green">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email Us</h4>
                    <p className="text-gray-600 mt-1">
                      info@uniformconnect.ae<br />
                      sales@uniformconnect.ae
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-brand-blue/20 rounded-full text-brand-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:30 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-brand-green/20 rounded-full text-brand-green">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Industries We Serve</h4>
                    <p className="text-gray-600 mt-1">
                      Hospitality • Hotels • Restaurants<br />
                      Schools • Corporate • Healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border-gray-300 focus:border-brand-blue"
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
                    className="border-gray-300 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="border-gray-300 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="border-gray-300 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your uniform needs"
                    required
                    className="border-gray-300 focus:border-brand-blue"
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Find Us</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.174459610075!2d55.32608931500937!3d25.185621883903673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6833dd75c5a3%3A0x55f77fb219481885!2sDubai%20Design%20District!5e0!3m2!1sen!2sae!4v1641455641234!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="UniformConnect Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your uniform experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our premium uniform solutions can elevate your brand identity.
          </p>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
