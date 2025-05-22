
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const CharityPartners = () => {
  const partners = [
    {
      name: "Dubai Cares",
      description: "Supports children's education and wellbeing across 50+ countries",
      logo: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
    },
    {
      name: "Emirates Red Crescent",
      description: "Provides aid to war-torn and poverty-stricken areas",
      logo: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      name: "Give a Ghaf Tree Program",
      description: "A UAE initiative to plant native trees for a greener desert",
      logo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "The Big Heart Foundation",
      description: "Uplifting displaced and refugee children",
      logo: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🌍 Our Charity & Impact Partners
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We work with trusted organizations to ensure your impact reaches those who need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <LazyImage 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
            See Our Donation Reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CharityPartners;
