
import { ProductType } from '../types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shirt } from "lucide-react";

interface ProductSelectorProps {
  selectedProduct: ProductType;
  onProductChange: (product: ProductType) => void;
}

const ProductSelector = ({ selectedProduct, onProductChange }: ProductSelectorProps) => {
  const products: { value: ProductType; label: string }[] = [
    { value: 'hoodie', label: 'Hoodie' },
    { value: 'varsityJacket', label: 'Varsity Jacket' },
    { value: 'sweater', label: 'Sweater' },
    { value: 'tshirt', label: 'T-Shirt' }
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Shirt className="h-5 w-5 text-gray-700" />
        <h3 className="font-medium">Select Product</h3>
      </div>
      <Select 
        value={selectedProduct} 
        onValueChange={(value) => onProductChange(value as ProductType)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent className="z-50">
          {products.map((product) => (
            <SelectItem key={product.value} value={product.value}>
              {product.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductSelector;
