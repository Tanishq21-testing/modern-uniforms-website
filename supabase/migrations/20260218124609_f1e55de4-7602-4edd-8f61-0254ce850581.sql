
-- Create graduation_leads table
CREATE TABLE public.graduation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  school_name TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Graduation Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.graduation_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert graduation_leads" ON public.graduation_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read graduation_leads" ON public.graduation_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create contact_page_leads table
CREATE TABLE public.contact_page_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Contact Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_page_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert contact_page_leads" ON public.contact_page_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read contact_page_leads" ON public.contact_page_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create consultation_leads table (for landing pages)
CREATE TABLE public.consultation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  employee_count TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Landing Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert consultation_leads" ON public.consultation_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read consultation_leads" ON public.consultation_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create referral_leads table
CREATE TABLE public.referral_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  school_name TEXT,
  referred_school TEXT,
  referred_school_name TEXT,
  referred_manager TEXT,
  referred_phone TEXT,
  product_type TEXT,
  quantity TEXT,
  image_url TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Referral Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.referral_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert referral_leads" ON public.referral_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read referral_leads" ON public.referral_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create school_uniform_leads table
CREATE TABLE public.school_uniform_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  school_name TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'School Uniform Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.school_uniform_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert school_uniform_leads" ON public.school_uniform_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read school_uniform_leads" ON public.school_uniform_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create hospitality_leads table
CREATE TABLE public.hospitality_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Hospitality Page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.hospitality_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert hospitality_leads" ON public.hospitality_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read hospitality_leads" ON public.hospitality_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);

-- Create design_lab_leads table
CREATE TABLE public.design_lab_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  page_source TEXT NOT NULL DEFAULT 'Design Lab',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.design_lab_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert design_lab_leads" ON public.design_lab_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin read design_lab_leads" ON public.design_lab_leads FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE is_master = true)
);
