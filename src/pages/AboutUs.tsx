
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content with padding for the fixed navbar */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">About <span className="text-brand-red">UniformConnect</span></h1>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Discover our story, our commitment to quality, and why we've been trusted by the UAE's leading companies for over 50 years.
            </p>
          </div>
        </section>

        {/* Family Business Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">A Family Legacy of <span className="text-brand-blue">Excellence</span></h2>
                <div className="w-20 h-1 bg-brand-red mb-6"></div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    UniformConnect is a family owned business that has been established in the UAE for over 50 years. We specialize in providing custom made uniforms for some of the largest corporates in the UAE.
                  </p>
                  <p>
                    Our team of experienced professionals ensure that all of our uniforms are made with the highest quality fabrics and with the latest embroidery and printing techniques. In addition, we provide tailoring services to ensure that the uniforms fit our customers perfectly.
                  </p>
                  <p>
                    We're proud to have earned the trust and respect of our customers over the years.
                  </p>
                  <p className="font-medium">
                    Our services are tailor made for Hospitality, Hotels, Restaurants and Corporate companies. With our high quality services our customers are always satisfied and we are always innovating our machinery to continue to improve our services.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-brand-blue/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-red/10 rounded-full"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="UniformConnect Family Business" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Years of Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Our <span className="text-brand-red">Expertise</span></h2>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-brand-blue">
                <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
                <h3 className="text-xl font-semibold mb-3">Years of Experience</h3>
                <p className="text-gray-600">
                  Half a century of expertise in uniform manufacturing, establishing us as industry leaders in the UAE.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-brand-red">
                <div className="text-4xl font-bold text-brand-red mb-2">1000+</div>
                <h3 className="text-xl font-semibold mb-3">Corporate Clients</h3>
                <p className="text-gray-600">
                  We've proudly served over a thousand corporate clients, including some of the UAE's most prestigious brands.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-brand-green">
                <div className="text-4xl font-bold text-brand-green mb-2">100%</div>
                <h3 className="text-xl font-semibold mb-3">Client Satisfaction</h3>
                <p className="text-gray-600">
                  Our commitment to quality and service has earned us complete satisfaction from our clients.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">Why Choose UniformConnect?</h3>
              <p className="text-gray-600 mb-8">
                With decades of experience, state-of-the-art machinery, and a team dedicated to excellence, we're uniquely positioned to deliver uniform solutions that exceed your expectations. Our craftsmanship, attention to detail, and commitment to customer satisfaction set us apart as the premier uniform provider in the UAE.
              </p>
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white text-lg px-8 py-6 rounded-md">
                Get A Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Client <span className="text-brand-blue">Testimonials</span></h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Jones the Grocer Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "UniformConnect has been our uniform provider for years. Their attention to detail and quality craftsmanship have ensured our staff always looks professional. Their service is unmatched."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="public/lovable-uploads/e04847a1-d76b-43cc-84b3-ac2918abf1de.png" 
                      alt="Jones the Grocer Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Jones the Grocer</p>
                    <p className="text-sm text-gray-500">F&B Partner</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-brand-blue/10 rounded-full"></div>
              </div>
              
              {/* Fairgreen School Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "The school uniforms created by UniformConnect have been exceptional. The durability, comfort, and design have received praise from students, parents, and staff alike. A true partner in excellence."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="public/lovable-uploads/c522c6f5-23d9-47bc-9d70-926710ca3bfa.png" 
                      alt="Fairgreen International School Logo"
                      className="h-full w-full object-contain" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">Fairgreen International School</p>
                    <p className="text-sm text-gray-500">Education Partner</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-brand-red/10 rounded-full"></div>
              </div>
              
              {/* Little Bangkok Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "UniformConnect delivered exactly what we needed - uniforms that match our brand identity and provide comfort to our staff. Their team was responsive, professional, and a pleasure to work with."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="public/lovable-uploads/973bd696-f3d4-44b8-ac1f-6b5da097933f.png" 
                      alt="Little Bangkok Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Little Bangkok</p>
                    <p className="text-sm text-gray-500">Restaurant Partner</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-brand-green/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
