
import { images } from '@/assets/images';
import { MapPin, Phone, Mail, Clock, Award, Shield, Globe } from 'lucide-react';

interface PageFooterProps {
  backgroundColor?: 'default' | 'black';
}

const PageFooter = ({ backgroundColor = 'default' }: PageFooterProps) => {
  const bgClass = backgroundColor === 'black' 
    ? 'bg-black' 
    : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900';

  return (
    <footer className={`relative ${bgClass} text-white overflow-hidden`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-repeat" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <img 
                src={images.logo} 
                alt="UniformConnect Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium uniform solutions for UAE's leading companies. 50+ years of craftsmanship and innovation.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">50+ Years</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-medium">Trusted</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  Dubai, United Arab Emirates<br/>
                  <span className="text-gray-400">Serving across UAE</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="tel:+971507599245" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +971 50 759 9245
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@uniformconnect.ae" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@uniformconnect.ae
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Sun - Thu: 8:00 AM - 6:00 PM<br/>
                  <span className="text-gray-400">Fri - Sat: By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </h3>
            
            <div className="space-y-3">
              {[
                'Corporate Uniforms',
                'School Uniforms', 
                'Chef & Kitchen Wear',
                'Security Uniforms',
                'Hospital Scrubs',
                'Custom Embroidery',
                'Logo Design Services',
                'Bulk Orders'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </h3>
            
            <div className="space-y-3">
              {[
                { name: 'About UniformConnect', href: '/about' },
                { name: 'Our Clients', href: '/clients' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Green Initiative', href: '/green-initiative' },
                { name: 'Quality Promise', href: '/services' },
                { name: 'Design Lab', href: '/design-lab' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Global Reach */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <span className="text-xs">UAE Based • Global Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} UniformConnect. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <div className="w-px h-4 bg-gray-600"></div>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="flex items-center space-x-1">
              <span>Made in</span>
              <span className="text-red-500">♥</span>
              <span>UAE</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
    </footer>
  );
};

export default PageFooter;
