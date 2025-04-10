
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
}

interface Profile {
  id: string;
  email: string;
  company_id: string | null;
  is_master: boolean | null;
}

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfileAndProducts = async () => {
      if (!user) return;

      try {
        // Fetch user profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        
        setProfile(profileData);

        if (!profileData.company_id) {
          setLoading(false);
          return;
        }

        // Fetch products for the user's company
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('company_id', profileData.company_id);

        if (productsError) throw productsError;
        
        setProducts(productsData || []);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message || 'Failed to load your products',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndProducts();
  }, [user, toast]);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const handleAddToCart = (product: Product) => {
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-2">Your Company Products</h1>
        <p className="text-gray-600 mb-8">
          {profile?.company_id 
            ? 'Browse products exclusive to your company' 
            : 'Your account has not been assigned to a company yet. Please contact your administrator.'}
        </p>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
          </div>
        ) : !profile?.company_id ? (
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <p>Your account has not been assigned to a company yet. Please contact your administrator.</p>
            </CardContent>
          </Card>
        ) : products.length === 0 ? (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <p>No products are available for your company at this time. Please check back later.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No image available
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>
                    ${product.price.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {product.description || 'No description available'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
