
import { Building, Users, CheckCircle } from 'lucide-react';

const EnterpriseFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Uniform Solutions</h2>
          <p className="text-gray-600">
            Designed specifically for organizations with 50+ employees, our uniform programs deliver consistency, quality, and brand alignment at scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue">
            <div className="flex items-center mb-4">
              <Building className="text-brand-blue mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold">Corporate & Institutions</h3>
            </div>
            <p className="text-gray-600">
              Comprehensive uniform programs for corporate offices, educational institutions, and government organizations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-red">
            <div className="flex items-center mb-4">
              <Users className="text-brand-red mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold">Multi-Location Businesses</h3>
            </div>
            <p className="text-gray-600">
              Consistent uniform solutions for hospitality chains, restaurant groups, and retail businesses with multiple locations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-green">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-brand-green mr-3 h-8 w-8" />
              <h3 className="text-xl font-semibold">Large Workforce Solutions</h3>
            </div>
            <p className="text-gray-600">
              Efficient uniform management systems for organizations with 50 to 5,000+ employees across different departments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
