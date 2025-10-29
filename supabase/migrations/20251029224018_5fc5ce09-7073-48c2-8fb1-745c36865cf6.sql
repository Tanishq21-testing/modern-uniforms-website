-- Update Bridge Education product names, images, and prices
UPDATE products 
SET 
  name = 'Girls Secondary Uniform Set',
  image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Girls Uniform Set.png',
  price = 0
WHERE name = 'School Shirt and Tie with skirt' 
  AND company_id = (SELECT id FROM companies WHERE name = 'Bridge Education');

UPDATE products 
SET 
  image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Boys Uniform Shirt.png',
  price = 0
WHERE name = 'School Shirt' 
  AND company_id = (SELECT id FROM companies WHERE name = 'Bridge Education');

UPDATE products 
SET 
  image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Girls Skirt Set.png',
  price = 0
WHERE name = 'School Skirt' 
  AND company_id = (SELECT id FROM companies WHERE name = 'Bridge Education');

UPDATE products 
SET 
  name = 'Primary T-shirt',
  image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Primary Shirt.png',
  price = 0
WHERE name = 'School T-shirt' 
  AND company_id = (SELECT id FROM companies WHERE name = 'Bridge Education');

UPDATE products 
SET 
  image_url = 'https://hpwyafqbadlkschxnple.supabase.co/storage/v1/object/public/uniformconnect/Uniform Set all grades.png',
  price = 0
WHERE name = 'Student Uniform Set' 
  AND company_id = (SELECT id FROM companies WHERE name = 'Bridge Education');