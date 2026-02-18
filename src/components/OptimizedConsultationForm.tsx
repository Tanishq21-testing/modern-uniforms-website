import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { BadgeCheck, MapPin, Phone, Building2, Loader2 } from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  country: string;
  uniformType: string;
  customUniformType: string;
}

interface CountryData {
  name: string;
  code: string;
  dialCode: string;
}

const COUNTRIES: CountryData[] = [
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Singapore", code: "SG", dialCode: "+65" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
];

const UNIFORM_TYPES = [
  "Corporate Uniforms",
  "Healthcare Uniforms", 
  "Hospitality Uniforms",
  "School Uniforms",
  "Security Uniforms",
  "Chef & Kitchen Uniforms",
  "Industrial Workwear",
  "Sports & Fitness Wear",
  "Retail Uniforms",
  "Transportation Uniforms",
  "Other"
];

export default function OptimizedConsultationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<CountryData | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    country: '',
    uniformType: '',
    customUniformType: ''
  });

  // Auto-detect country based on IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = COUNTRIES.find(c => c.code === data.country_code);
        if (country) {
          setDetectedCountry(country);
          setSelectedCountry(country);
          setFormData(prev => ({ ...prev, country: country.name }));
        }
      } catch (error) {
        const defaultCountry = COUNTRIES[0];
        setDetectedCountry(defaultCountry);
        setSelectedCountry(defaultCountry);
        setFormData(prev => ({ ...prev, country: defaultCountry.name }));
      }
    };
    detectCountry();
  }, []);

  const formatPhoneNumber = (value: string, country: CountryData | null) => {
    if (!country) return value;
    const digits = value.replace(/\D/g, '');
    const dialCodeDigits = country.dialCode.replace(/\D/g, '');
    let phoneDigits = digits;
    if (digits.startsWith(dialCodeDigits)) {
      phoneDigits = digits.slice(dialCodeDigits.length);
    }
    if (country.code === 'AE' && phoneDigits.length <= 9) {
      if (phoneDigits.length >= 6) return `${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 6)} ${phoneDigits.slice(6)}`;
      else if (phoneDigits.length >= 3) return `${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3)}`;
    } else if (country.code === 'US' && phoneDigits.length <= 10) {
      if (phoneDigits.length >= 6) return `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`;
      else if (phoneDigits.length >= 3) return `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3)}`;
    }
    return phoneDigits;
  };

  const handlePhoneChange = (value: string) => {
    const formattedNumber = formatPhoneNumber(value, selectedCountry);
    setFormData(prev => ({ ...prev, phoneNumber: formattedNumber }));
  };

  const handleCountryChange = (countryName: string) => {
    const country = COUNTRIES.find(c => c.name === countryName);
    setSelectedCountry(country || null);
    setFormData(prev => ({ ...prev, country: countryName }));
    if (formData.phoneNumber) {
      const formattedNumber = formatPhoneNumber(formData.phoneNumber, country || null);
      setFormData(prev => ({ ...prev, phoneNumber: formattedNumber }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const phone = selectedCountry ? `${selectedCountry.dialCode} ${formData.phoneNumber}` : formData.phoneNumber;
      const uniformInfo = formData.uniformType === 'Other' ? formData.customUniformType : formData.uniformType;

      // Save to consultation_leads table
      const { error } = await supabase
        .from('consultation_leads')
        .insert({
          name: formData.fullName,
          email: formData.email,
          company: formData.companyName || null,
          phone,
          message: `Uniform Type: ${uniformInfo}\nCountry: ${formData.country}`,
          page_source: 'Landing Page – Consultation Form'
        });

      if (error) throw error;

      // Send email notification
      try {
        await supabase.functions.invoke('send-consultation-email', {
          body: {
            name: formData.fullName,
            email: formData.email,
            company: formData.companyName || 'Not provided',
            phone,
            message: `Uniform Type: ${uniformInfo}\nCountry: ${formData.country}`,
            pageSource: 'Landing Page – Consultation Form'
          }
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      // Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', { send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', value: 1.0, currency: 'USD' });
      }

      setFormData({ fullName: '', companyName: '', email: '', phoneNumber: '', country: selectedCountry?.name || '', uniformType: '', customUniformType: '' });
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get Your Free Consultation</h3>
              <p className="text-gray-600 mb-6 text-base sm:text-lg">We'll create a custom proposal tailored to your needs</p>
              {detectedCountry && (
                <div className="flex items-center justify-center gap-2 mb-6">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Auto-detected: {detectedCountry.name}</Badge>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input id="fullName" type="text" value={formData.fullName} onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))} className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 flex items-center gap-1"><Building2 className="h-4 w-4" />Company Name</Label>
                  <Input id="companyName" type="text" value={formData.companyName} onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))} className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500" placeholder="Optional" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country *</Label>
                  <Select value={formData.country} onValueChange={handleCountryChange}>
                    <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500"><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>{COUNTRIES.map((country) => (<SelectItem key={country.code} value={country.name}>{country.name} ({country.dialCode})</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 flex items-center gap-1"><Phone className="h-4 w-4" />Phone Number *</Label>
                  <div className="relative">
                    {selectedCountry && (<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{selectedCountry.dialCode}</div>)}
                    <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handlePhoneChange(e.target.value)} className={`h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500 ${selectedCountry ? 'pl-20' : ''}`} placeholder="Enter phone number" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uniformType" className="text-sm font-medium text-gray-700">Type of Uniform *</Label>
                <Select value={formData.uniformType} onValueChange={(value) => setFormData(prev => ({ ...prev, uniformType: value }))}>
                  <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500"><SelectValue placeholder="Select uniform type" /></SelectTrigger>
                  <SelectContent>{UNIFORM_TYPES.map((type) => (<SelectItem key={type} value={type}>{type}</SelectItem>))}</SelectContent>
                </Select>
              </div>

              {formData.uniformType === 'Other' && (
                <div className="space-y-2">
                  <Label htmlFor="customUniformType" className="text-sm font-medium text-gray-700">Please specify</Label>
                  <Input id="customUniformType" type="text" value={formData.customUniformType} onChange={(e) => setFormData(prev => ({ ...prev, customUniformType: e.target.value }))} className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500" placeholder="Describe your uniform needs" required />
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                ) : (
                  <>Get My Free Consultation <BadgeCheck className="ml-2 h-5 w-5" /></>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-green-600" /><span>Free consultation</span></div>
                <div className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-green-600" /><span>24-hour response</span></div>
                <div className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-green-600" /><span>Custom proposal</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />
    </section>
  );
}
