-- Insert Jones the Grocer company
INSERT INTO public.companies (name)
VALUES ('Jones the Grocer')
ON CONFLICT DO NOTHING;

-- Get the company ID
DO $$
DECLARE
  company_uuid uuid;
BEGIN
  SELECT id INTO company_uuid FROM public.companies WHERE name = 'Jones the Grocer' LIMIT 1;
  
  -- Update the profile for the test user
  UPDATE public.profiles
  SET company_id = company_uuid
  WHERE email = 'tanishqpremchand@gmail.com';
  
  -- Insert sample product (template - replace with actual products)
  INSERT INTO public.products (name, description, price, company_id, image_url)
  VALUES ('Sample Product', 'Sample Description', 0.00, company_uuid, NULL)
  ON CONFLICT DO NOTHING;
END $$;