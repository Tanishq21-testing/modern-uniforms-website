
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const ImpactGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      title: "Tree Planting at Dubai Desert",
      description: "Our team planted 20 Ghaf trees with Goumbook",
      category: "planting"
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      title: "School Uniform Donation",
      description: "50 uniforms donated to Al Khair Foundation",
      category: "donation"
    },
    {
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      title: "Green Team Jerseys",
      description: "JC School's basketball team with their new eco-friendly jerseys",
      category: "jerseys"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Social Impact Award 2023",
      description: "UniformConnect recognized for sustainability initiatives",
      category: "recognition"
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "School Visit Program",
      description: "Teaching sustainability at Emirates International School",
      category: "education"
    },
    {
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      title: "Beach Cleanup Initiative",
      description: "Team UniformConnect volunteering for a cleaner UAE",
      category: "volunteering"
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            📸 UniformConnect In Action
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how our initiatives are making a real difference in the community and environment.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button 
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            className={activeCategory === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
            onClick={() => setActiveCategory('all')}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === 'planting' ? 'default' : 'outline'}
            className={activeCategory === 'planting' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
            onClick={() => setActiveCategory('planting')}
          >
            Tree Planting
          </Button>
          <Button 
            variant={activeCategory === 'donation' ? 'default' : 'outline'}
            className={activeCategory === 'donation' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
            onClick={() => setActiveCategory('donation')}
          >
            Donations
          </Button>
          <Button 
            variant={activeCategory === 'jerseys' ? 'default' : 'outline'}
            className={activeCategory === 'jerseys' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
            onClick={() => setActiveCategory('jerseys')}
          >
            School Teams
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <LazyImage 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;
