
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center">
                  <div className="w-3 h-3 bg-black mask-uniform"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                  <div className="w-4 h-4 bg-black mask-uniform"></div>
                </div>
                <div className="absolute -right-2 -bottom-1 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-black mask-uniform"></div>
                </div>
              </div>
              <span className="text-lg font-semibold">UniformConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Manufacturing and producing high-quality uniforms for flagship companies in the UAE since 1978.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors">Our Clients</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Embroidery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Screen Printing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tailoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Designs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Uniforms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
             Office 13, Karama, Dubai<br />
              Dubai, United Arab Emirates
            </address>
            <p className="text-gray-400 mt-2">
              <strong>Phone:</strong> +971 50 759 9245<br />
              <strong>Email:</strong> premparsram@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UniformConnect. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
