import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, ArrowLeft, Send, Loader2 } from 'lucide-react';
import PageFooter from '@/components/PageFooter';
import SuccessModal from '@/components/SuccessModal';

const ReferralForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referrerSchool: '',
    referredSchool: '',
    referredSchoolName: '',
    referredManager: '',
    referredPhone: '',
    productType: '',
    quantity: '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const productOptions = [
    'T-Shirts', 'Hoodies', 'Varsity Jackets', 'Sweaters', 'Graduation Gowns', 'Graduation Caps',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: 'File Too Large', description: 'Please upload an image smaller than 5MB', variant: 'destructive' });
        return;
      }
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.referrerName || !formData.referrerEmail || !formData.referrerPhone || 
        !formData.referrerSchool || !formData.referredSchool || !formData.referredPhone || 
        !formData.productType || !formData.quantity) {
      toast({ title: 'Missing Information', description: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    if (parseInt(formData.quantity) < 1) {
      toast({ title: 'Invalid Quantity', description: 'Quantity must be at least 1', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = '';

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `referral-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('uniformconnect').upload(`referrals/${fileName}`, imageFile);
        if (uploadError) throw uploadError;
        imageUrl = `https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/referrals/${fileName}`;
      }

      // Save to referral_leads table
      const { error: dbError } = await supabase.from('referral_leads').insert({
        name: formData.referrerName,
        email: formData.referrerEmail,
        phone: formData.referrerPhone,
        school_name: formData.referrerSchool,
        referred_school: formData.referredSchool,
        referred_school_name: formData.referredSchoolName || null,
        referred_manager: formData.referredManager || null,
        referred_phone: formData.referredPhone,
        product_type: formData.productType,
        quantity: formData.quantity,
        image_url: imageUrl || null,
        page_source: 'School Referral Page'
      });

      if (dbError) throw dbError;

      // Send email notification
      const emailMessage = `
REFERRER: ${formData.referrerName} (${formData.referrerEmail}, ${formData.referrerPhone})
School: ${formData.referrerSchool}

REFERRED SCHOOL: ${formData.referredSchool}
Alt Name: ${formData.referredSchoolName || 'N/A'}
Manager: ${formData.referredManager || 'N/A'}
Phone: ${formData.referredPhone}

Product: ${formData.productType} | Qty: ${formData.quantity}
Image: ${imageUrl || 'None'}`.trim();

      try {
        await supabase.functions.invoke('send-consultation-email', {
          body: {
            name: formData.referrerName,
            email: formData.referrerEmail,
            company: formData.referrerSchool,
            phone: formData.referrerPhone,
            message: emailMessage,
            pageSource: 'School Referral Page'
          },
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      setFormData({
        referrerName: '', referrerEmail: '', referrerPhone: '', referrerSchool: '',
        referredSchool: '', referredSchoolName: '', referredManager: '', referredPhone: '',
        productType: '', quantity: '',
      });
      setImageFile(null);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast({ title: 'Submission Failed', description: 'There was an error submitting your referral. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Button variant="ghost" onClick={() => navigate('/Graduation')} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Refer a School</CardTitle>
            <CardDescription className="text-base">Help us grow by referring schools to UniformConnect.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Your Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="referrerName">Your Name *</Label><Input id="referrerName" value={formData.referrerName} onChange={(e) => handleInputChange('referrerName', e.target.value)} placeholder="John Doe" required /></div>
                  <div className="space-y-2"><Label htmlFor="referrerEmail">Your Email *</Label><Input id="referrerEmail" type="email" value={formData.referrerEmail} onChange={(e) => handleInputChange('referrerEmail', e.target.value)} placeholder="john@example.com" required /></div>
                  <div className="space-y-2"><Label htmlFor="referrerPhone">Your Phone Number *</Label><Input id="referrerPhone" type="tel" value={formData.referrerPhone} onChange={(e) => handleInputChange('referrerPhone', e.target.value)} placeholder="+971 50 123 4567" required /></div>
                  <div className="space-y-2"><Label htmlFor="referrerSchool">Your School *</Label><Input id="referrerSchool" value={formData.referrerSchool} onChange={(e) => handleInputChange('referrerSchool', e.target.value)} placeholder="Your School Name" required /></div>
                </div>
              </div>

              {/* School You're Referring */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">School You're Referring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="referredSchool">Which School Are You Referring? *</Label><Input id="referredSchool" value={formData.referredSchool} onChange={(e) => handleInputChange('referredSchool', e.target.value)} placeholder="School Name" required /></div>
                  <div className="space-y-2"><Label htmlFor="referredSchoolName">Referred School's Name</Label><Input id="referredSchoolName" value={formData.referredSchoolName} onChange={(e) => handleInputChange('referredSchoolName', e.target.value)} placeholder="Official School Name" /></div>
                  <div className="space-y-2"><Label htmlFor="referredManager">School's Direct Manager</Label><Input id="referredManager" value={formData.referredManager} onChange={(e) => handleInputChange('referredManager', e.target.value)} placeholder="Manager Name" /></div>
                  <div className="space-y-2"><Label htmlFor="referredPhone">School Representative's Phone *</Label><Input id="referredPhone" type="tel" value={formData.referredPhone} onChange={(e) => handleInputChange('referredPhone', e.target.value)} placeholder="+971 50 123 4567" required /></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="productType">Product Type *</Label>
                    <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)} required>
                      <SelectTrigger id="productType"><SelectValue placeholder="Select a product" /></SelectTrigger>
                      <SelectContent>{productOptions.map((product) => (<SelectItem key={product} value={product}>{product}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">How Many {formData.productType || 'Products'}? *</Label>
                    <Input id="quantity" type="number" min="1" value={formData.quantity} onChange={(e) => handleInputChange('quantity', e.target.value)} placeholder="100" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="image">Upload Image (Optional, max 5MB)</Label>
                    <Input id="image" type="file" accept="image/*" onChange={handleFileChange} className="cursor-pointer" />
                    {imageFile && <p className="text-sm text-muted-foreground">Selected: {imageFile.name}</p>}
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Submit Referral</>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <PageFooter />
      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />
    </div>
  );
};

export default ReferralForm;
