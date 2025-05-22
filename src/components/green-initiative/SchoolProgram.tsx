
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
              🏆 Get Your Team Geared Up – On Us!
            </h2>
            <p className="text-lg text-gray-700">
              When your school places a large uniform order with UniformConnect (100+ students), we'll sponsor a 
              full set of FREE jerseys or hoodies for one of your school's teams or clubs. Whether you play football, 
              run track, act on stage, or code in a robotics club—we've got your team covered.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Let your team stand out with a custom-designed kit, personalized with your school colors, logo, and name.
            </p>
            <p className="text-lg font-medium text-brand-blue mt-4">
              📸 Bonus: We'll feature your team on our social media—so the whole UAE can see your squad in style!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Included in the Free Team Kit:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>🎨 Custom design + embroidery tailored to your school's identity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>👕 Full jersey or hoodie set (up to 15 members per team)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>📸 Optional school photoshoot to showcase your team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded mr-3 text-emerald-700">✓</div>
                      <span>💬 Feature story on our Instagram & website's Hall of Fame</span>
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
              <div className="bg-white p-5 rounded-lg shadow mt-4">
                <h3 className="text-xl font-bold mb-2">How to Qualify:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded mr-3 text-blue-700">→</div>
                    <span>Place a bulk order of 100+ uniforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded mr-3 text-blue-700">→</div>
                    <span>Choose your team or club that deserves the spotlight</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded mr-3 text-blue-700">→</div>
                    <span>We'll handle the rest—design, production, and delivery!</span>
                  </li>
                </ul>
              </div>
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
