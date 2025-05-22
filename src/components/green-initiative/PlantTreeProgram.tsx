
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';

const PlantTreeProgram = () => {
  const treesPlanted = 124; // This could come from your backend in a real app
  
  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🌱 One Order = One Tree Planted
            </h2>
            <p className="text-lg text-gray-700">
              Every eco-friendly order or referral plants one Ghaf tree (UAE's national tree) 
              through our partnership with environmental groups like Goumbook or EEG.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">
                {treesPlanted}
              </div>
              <div className="text-xl text-gray-700">
                Trees Planted So Far
              </div>
            </div>
            
            <div className="mt-8">
              <div className="h-4 bg-gray-200 rounded-full">
                <div 
                  className="h-4 bg-emerald-500 rounded-full" 
                  style={{ width: `${Math.min(treesPlanted / 2, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <div>0</div>
                <div>Goal: 250</div>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <LazyImage
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              alt="Tree planting initiative in Dubai Desert Reserve"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <p className="text-center text-gray-700 italic">
              "Thanks to ABC School for helping us plant 10 trees!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantTreeProgram;
