
import { images } from '@/assets/images';

const PageFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src={images.logo} 
              alt="UniformConnect Logo" 
              className="h-10 w-auto"
            />
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} UniformConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
