
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

const EcoFriendlyOptions = () => {
  const fabrics = [
    {
      name: "Recycled Polyester",
      description: "Made from post-consumer plastic bottles",
      icon: "♻️",
      benefits: ["60% less energy", "Reduces landfill waste", "Water resistant"]
    },
    {
      name: "Organic Cotton",
      description: "Grown without harmful pesticides or synthetic fertilizers",
      icon: "🌱",
      benefits: ["95% less water usage", "No toxic chemicals", "Biodegradable"]
    },
    {
      name: "Bamboo Blend",
      description: "Sustainable, fast-growing resource",
      icon: "🎋",
      benefits: ["Naturally antimicrobial", "Ultra soft texture", "Temperature regulating"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Recycle className="text-emerald-600 h-8 w-8 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            ♻️ Choose Sustainable. Look Professional.
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center mb-8">
            We offer eco-friendly materials made from recycled or organic fabrics. 
            When your business chooses sustainable uniforms, you're not just dressing 
            your team—you're helping the planet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {fabrics.map((fabric, index) => (
              <Card key={index} className="border-green-100 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{fabric.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{fabric.name}</h3>
                  <p className="text-gray-600 mb-4">{fabric.description}</p>
                  <ul className="space-y-2">
                    {fabric.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
            <div className="text-3xl mr-3">🌱</div>
            <p className="text-gray-700 text-center md:text-left">
              Featured as a Green Client on our Instagram when you choose eco-friendly options
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlyOptions;
