-- Fix the broken image URLs for Primary T-shirt products
DO $$
DECLARE
  bridge_education_id uuid;
  ambassador_school_id uuid;
BEGIN
  -- Get company and school IDs
  SELECT id INTO bridge_education_id FROM companies WHERE name = 'Bridge Education';
  SELECT id INTO ambassador_school_id FROM schools WHERE name = 'Ambassador School' AND company_id = bridge_education_id;

  -- Fix Primary T-shirt (first one) - this was renamed from "School Skirt"
  UPDATE products 
  SET 
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Primary%20Shirt.png'
  WHERE name = 'School Primary T-shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  -- Fix School Primary T-shirt (the duplicate/second one if it exists)
  -- First check if there's a product with this exact name
  UPDATE products 
  SET 
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Primary%20Shirt.png'
  WHERE name = 'School Primary T-shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id
    AND image_url IS DISTINCT FROM 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Primary%20Shirt.png';
END $$;