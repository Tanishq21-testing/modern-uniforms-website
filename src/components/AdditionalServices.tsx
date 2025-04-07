
import React from 'react';
import { Umbrella, Table, Tag, Shirt } from 'lucide-react';

const AdditionalServices = () => {
  const additionalServices = [
    {
      id: 1,
      title: "Umbrella Covers",
      icon: <Umbrella className="h-8 w-8 text-brand-red" />,
      description: "Custom branded umbrella covers that showcase your logo while providing shelter from the elements."
    },
    {
      id: 2,
      title: "Table Covers",
      icon: <Table className="h-8 w-8 text-brand-blue" />,
      description: "Eye-catching table covers perfect for events, exhibitions, and corporate settings."
    },
    {
      id: 3,
      title: "Seat Covers",
      icon: <Tag className="h-8 w-8 text-brand-green" />,
      description: "Custom-made seat covers tailored to fit your specific needs with your branding."
    },
    {
      id: 4,
      title: "Custom Fabrics",
      icon: <Shirt className="h-8 w-8 text-brand-red" />,
      description: "Specially crafted fabrics for various applications, designed with your brand identity in mind."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            Beyond uniforms, we create custom fabric solutions for a variety of business needs, all featuring your specific branding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Custom Solutions for Every Need</h3>
              <p className="text-gray-700 mb-4">
                Our team of experts can create custom fabric solutions for virtually any business requirement. 
                Whether you need specialized promotional items, event materials, or unique branded products, 
                we have the capability to bring your vision to life with exceptional quality and attention to detail.
              </p>
              <p className="text-gray-700">
                Contact us today to discuss your custom fabric requirements and discover how we can 
                transform your ideas into reality.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-lg mb-4 text-brand-blue">Popular Custom Requests:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-red mr-2"></span>
                    <span>Promotional banners</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-blue mr-2"></span>
                    <span>Event tents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-green mr-2"></span>
                    <span>Branded curtains</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-red mr-2"></span>
                    <span>Office decor items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
