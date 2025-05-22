
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';
import { images } from '@/assets/images';

const SchoolProgram = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎽 Free Jerseys for School Teams
            </h2>
            <p className="text-lg text-gray-700">
              When your school places a large order (e.g., 100+ uniforms), we'll sponsor free 
              jerseys or hoodies for one of your school sports or arts teams—branded and 
              tailored to your school's identity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Details:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>Custom design + embroidery included</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>Limited to 1 free team set per bulk order</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>Option to schedule a school photoshoot to feature on our social media</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <LazyImage
                src={images.schoolHoodie}
                alt="School hoodie example"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-8 py-6">
              Claim Your Team's Free Jerseys
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolProgram;
