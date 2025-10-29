-- First, allow NULL values in the price column
ALTER TABLE products ALTER COLUMN price DROP NOT NULL;

-- Update Bridge Education product names, images, and remove all prices
DO $$
DECLARE
  bridge_education_id uuid;
  ambassador_school_id uuid;
BEGIN
  -- Get company and school IDs
  SELECT id INTO bridge_education_id FROM companies WHERE name = 'Bridge Education';
  SELECT id INTO ambassador_school_id FROM schools WHERE name = 'Ambassador School' AND company_id = bridge_education_id;

  -- Update products with correct names and image paths, set prices to NULL
  UPDATE products 
  SET 
    name = 'School Boys Set',
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Boys%20Uniform%20Set.png',
    price = NULL
  WHERE name = 'School Shirt and Tie with Skirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  UPDATE products 
  SET 
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Boys%20Primary%20Uniforms%20Sets.png',
    price = NULL
  WHERE name = 'School Shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  UPDATE products 
  SET 
    name = 'School Primary T-shirt',
    price = NULL
  WHERE name = 'School Skirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  UPDATE products 
  SET 
    name = 'School Girls Set',
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Girls%20Uniform%20Set.png',
    price = NULL
  WHERE name = 'School T-shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  UPDATE products 
  SET 
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Uniform%20Set%20all%20grades.png',
    price = NULL
  WHERE name = 'Student Uniform Set' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  -- Remove prices for all products
  UPDATE products SET price = NULL;
END $$;