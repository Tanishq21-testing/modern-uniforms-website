
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast';

interface OrderPanelProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  price: number;
}

const OrderPanel = ({
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  price
}: OrderPanelProps) => {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} custom hoodie(s) added to your cart.`,
    });
  };
  
  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "This would normally take you to the checkout page.",
    });
  };
  
  return (
    <div className="h-full overflow-auto p-4 border-l flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Order Information</h2>
      
      <div className="space-y-6 flex-grow">
        <div className="space-y-2">
          <Label htmlFor="size">Size</Label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger id="size">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="XS">XS</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
              <SelectItem value="XXL">XXL</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <div className="flex">
            <Button 
              variant="outline" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="rounded-r-none px-3"
            >
              -
            </Button>
            <Input 
              type="number" 
              id="quantity"
              min="1"
              max="100"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Button 
              variant="outline" 
              onClick={() => setQuantity(quantity + 1)}
              className="rounded-l-none px-3"
            >
              +
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Base price:</span>
            <span>$49.99</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Customization:</span>
            <span>Included</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Quantity:</span>
            <span>x {quantity}</span>
          </div>
          <div className="flex justify-between font-medium text-lg mt-2 pt-2 border-t border-gray-100">
            <span>Total:</span>
            <span>${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-6">
        <Button className="w-full bg-brand-blue hover:bg-brand-blue/90" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button className="w-full bg-brand-red hover:bg-brand-red/90" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default OrderPanel;
