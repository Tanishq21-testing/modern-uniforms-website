-- Fix Primary T-shirt image and rename School Shirt to School Skirt
DO $$
DECLARE
  bridge_education_id uuid;
  ambassador_school_id uuid;
BEGIN
  -- Get company and school IDs
  SELECT id INTO bridge_education_id FROM companies WHERE name = 'Bridge Education';
  SELECT id INTO ambassador_school_id FROM schools WHERE name = 'Ambassador School' AND company_id = bridge_education_id;

  -- Fix Primary T-shirt image to use Boys Uniform Shirt.png
  UPDATE products 
  SET 
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Boys%20Uniform%20Shirt.png'
  WHERE name = 'School Primary T-shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;

  -- Rename "School Shirt" to "School Skirt" and update image to Girls Skirt Set.png
  UPDATE products 
  SET 
    name = 'School Skirt',
    image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Ambassador%20School/Girls%20Skirt%20Set.png'
  WHERE name = 'School Shirt' 
    AND company_id = bridge_education_id 
    AND school_id = ambassador_school_id;
END $$;