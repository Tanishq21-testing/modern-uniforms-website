
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

interface DesignUploaderProps {
  addImageElement: (imageUrl: string) => void;
}

const DesignUploader = ({ addImageElement }: DesignUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file format",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    // In a real app, you would upload the file to a server
    // For this demo, we'll use a local FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      if (imageUrl) {
        addImageElement(imageUrl);
        toast({
          title: "Upload successful",
          description: "Your image has been added to the design.",
        });
      }
      setIsUploading(false);
    };
    
    reader.onerror = () => {
      toast({
        title: "Upload failed",
        description: "Failed to process your image. Please try again.",
        variant: "destructive",
      });
      setIsUploading(false);
    };
    
    reader.readAsDataURL(file);
    
    // Reset the input
    event.target.value = '';
  };
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-2 text-gray-500" />
            <p className="mb-1 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG or SVG (MAX. 800x800px)</p>
          </div>
          <Input
            id="dropzone-file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
      </div>
      
      {isUploading && (
        <div className="text-center text-sm text-gray-500">
          Uploading your image...
        </div>
      )}
    </div>
  );
};

export default DesignUploader;
