
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigate } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';
import { OrderDialog } from '@/components/OrderDialog';
import { CartSidebar } from '@/components/CartSidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  school_id: string | null;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string | null;
}

interface Profile {
  id: string;
  email: string;
  company_id: string | null;
  is_master: boolean | null;
}

interface School {
  id: string;
  name: string;
  company_id: string;
}

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [companies, setCompanies] = useState<{ id: string; name: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
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

        if (!profileData?.company_id) {
          setLoading(false);
          return;
        }

        // Fetch companies user can access
        const { data: companiesData, error: companiesError } = await supabase
          .from('companies')
          .select('id, name')
          .order('name');

        if (companiesError) {
          console.warn('Companies fetch restricted by RLS or not available:', companiesError.message);
        }

        const companiesList = companiesData || [];
        setCompanies(companiesList);

        // Set default company name for invoices (if profile has company)
        const defaultCompanyName = companiesList.find(c => c.id === profileData.company_id)?.name || '';
        setCompanyName(defaultCompanyName);

        // Fetch schools for accessible companies
        const { data: schoolsData, error: schoolsError } = await supabase
          .from('schools')
          .select('*')
          .order('name');

        if (schoolsError && schoolsError.code !== 'PGRST116') {
          throw schoolsError;
        }

        setSchools(schoolsData || []);

        // Fetch products visible to the user (RLS limits by company)
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*');

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setOrderDialogOpen(true);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    toast({
      title: 'Added to cart',
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: 'Removed from cart',
      description: 'Item has been removed from your cart.',
    });
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setCheckoutLoading(true);
    try {
      // Calculate total
      const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user!.id,
          company_id: profile!.company_id!,
          order_number: '', // Will be auto-generated
          total_amount: totalAmount,
          status: 'pending'
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: orderData.id,
        product_id: item.id,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Send invoice email
      const schoolName = selectedSchool 
        ? schools.find(s => s.id === selectedSchool)?.name 
        : '';

      const emailPayload = {
        order_id: orderData.id,
        order_number: orderData.order_number,
        customer_email: profile!.email,
        customer_name: profile!.email.split('@')[0],
        company_name: companyName,
        school_name: schoolName,
        order_items: cartItems.map(item => ({
          product_name: item.name,
          quantity: item.quantity,
          unit_price: item.price,
          total_price: item.price * item.quantity
        })),
        total_amount: totalAmount
      };

      const { error: emailError } = await supabase.functions.invoke('send-order-invoice', {
        body: emailPayload
      });

      if (emailError) {
        console.error('Email send error:', emailError);
        // Don't fail the order if email fails
      }

      toast({
        title: 'Order placed successfully!',
        description: `Order ${orderData.order_number} has been created. You will receive a confirmation email shortly.`,
      });

      // Clear cart and close
      setCartItems([]);
      setCartOpen(false);
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        variant: 'destructive',
        title: 'Checkout failed',
        description: error.message || 'Failed to process your order. Please try again.',
      });
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Company Products</h1>
            <p className="text-gray-600">
              {profile?.company_id 
                ? 'Browse products exclusive to your company' 
                : 'Your account has not been assigned to a company yet. Please contact your administrator.'}
            </p>
          </div>
          
          {profile?.company_id && (
            <Button 
              onClick={() => setCartOpen(true)}
              className="relative bg-brand-blue hover:bg-brand-blue/90"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          )}
        </div>

        {schools.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Filter by School</label>
            <Select value={selectedSchool || 'all'} onValueChange={(value) => setSelectedSchool(value === 'all' ? null : value)}>
              <SelectTrigger className="w-full max-w-md bg-background">
                <SelectValue placeholder="All Schools" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="all">All Schools</SelectItem>
                {schools.map((school) => (
                  <SelectItem key={school.id} value={school.id}>
                    {school.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter(product => (!selectedCompany || product.company_id === selectedCompany))
              .filter(product => (!selectedSchool || product.school_id === selectedSchool))
              .map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductClick(product)}
              >
                <div className="h-48 bg-gray-200 relative">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <Package className="h-16 w-16" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">
                    AED {product.price.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description || 'Quality uniform product'}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <OrderDialog
          product={selectedProduct}
          open={orderDialogOpen}
          onOpenChange={setOrderDialogOpen}
          onAddToCart={handleAddToCart}
        />

        <CartSidebar
          open={cartOpen}
          onOpenChange={setCartOpen}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default Products;
