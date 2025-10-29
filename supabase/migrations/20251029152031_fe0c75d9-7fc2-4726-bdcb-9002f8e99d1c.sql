-- Create schools table
CREATE TABLE public.schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on schools
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to view schools for their company
CREATE POLICY "Users can view schools for their company"
ON public.schools
FOR SELECT
USING (company_id IN (
  SELECT company_id FROM public.profiles WHERE id = auth.uid()
));

-- Add school_id column to products table
ALTER TABLE public.products
ADD COLUMN school_id uuid REFERENCES public.schools(id) ON DELETE SET NULL;

-- Insert Bridge Education company and related data
DO $$
DECLARE
  bridge_education_id uuid;
  ambassador_school_id uuid;
  ambassador_academy_id uuid;
BEGIN
  -- Insert Bridge Education company
  INSERT INTO public.companies (name)
  VALUES ('Bridge Education')
  RETURNING id INTO bridge_education_id;

  -- Insert schools
  INSERT INTO public.schools (name, company_id)
  VALUES ('Ambassador School', bridge_education_id)
  RETURNING id INTO ambassador_school_id;

  INSERT INTO public.schools (name, company_id)
  VALUES ('Ambassador International Academy', bridge_education_id)
  RETURNING id INTO ambassador_academy_id;

  -- Insert products for Bridge Education - all assigned to Ambassador School
  INSERT INTO public.products (name, description, price, image_url, company_id, school_id)
  VALUES
    (
      'School Shirt and Tie with Skirt',
      'Complete uniform set with shirt, tie, and skirt',
      95.00,
      'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador School/School Shirt and tie with skirt.png',
      bridge_education_id,
      ambassador_school_id
    ),
    (
      'School Shirt',
      'Standard school shirt',
      45.00,
      'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador School/School Shirt.png',
      bridge_education_id,
      ambassador_school_id
    ),
    (
      'School Skirt',
      'Standard school skirt',
      40.00,
      'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador School/School Skirt.png',
      bridge_education_id,
      ambassador_school_id
    ),
    (
      'School T-shirt',
      'Casual school t-shirt',
      30.00,
      'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador School/School T-shirt.png',
      bridge_education_id,
      ambassador_school_id
    ),
    (
      'Student Uniform Set',
      'Complete student uniform package',
      120.00,
      'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador School/student picture.png',
      bridge_education_id,
      ambassador_school_id
    );
END $$;

-- Note: After running this migration, have the user sign up with vikas@test.com/abc123
-- Then run this SQL to link the user to Bridge Education:
-- UPDATE public.profiles 
-- SET company_id = (SELECT id FROM public.companies WHERE name = 'Bridge Education')
-- WHERE email = 'vikas@test.com';