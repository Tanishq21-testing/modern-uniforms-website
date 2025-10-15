-- Insert all 49 products for Jones the Grocer
DO $$
DECLARE
  company_uuid uuid;
BEGIN
  -- Get Jones the Grocer company ID
  SELECT id INTO company_uuid FROM public.companies WHERE name = 'Jones the Grocer' LIMIT 1;
  
  -- Insert all products
  INSERT INTO public.products (name, price, company_id) VALUES
  ('PACK91195 Oxford Shirt Female L', 60, company_uuid),
  ('PACK91200 V-neck Tshirt L', 35, company_uuid),
  ('PACK91215 Driver Caps', 55, company_uuid),
  ('Grey Oxford Shirts with Logo', 60, company_uuid),
  ('Navy Blue V-neck Tshirt', 35, company_uuid),
  ('Navy Blue Jean Pants', 85, company_uuid),
  ('JTG Grey Apron', 35, company_uuid),
  ('JTG Grey Caps', 55, company_uuid),
  ('Black Socks', 15, company_uuid),
  ('PACK91192 Oxford Shirt Male 2XL', 60, company_uuid),
  ('PACK91190 Oxford Shirt Male L', 60, company_uuid),
  ('PACK91193 Oxford Shirt Female S', 60, company_uuid),
  ('PACK91199 V-neck T-shirt M', 35, company_uuid),
  ('PACK91309 Navy Blue Jacket w Logo', 90, company_uuid),
  ('PACK91310 Navy Blue Jacket w Logo', 90, company_uuid),
  ('PACK91189 Oxford Shirt Male M', 60, company_uuid),
  ('PACK91194 Oxford Shirt Female M', 60, company_uuid),
  ('Adult Blue Apron with Logo', 22, company_uuid),
  ('PACK90124 JTG Apron', 22, company_uuid),
  ('PACK91204 Poloshirt M', 35, company_uuid),
  ('PACK91214 FOH Grey Apron', 35, company_uuid),
  ('PACK91198 V-neck Tshirt S', 35, company_uuid),
  ('PACK91209 Poloshirt Dryfit M', 40, company_uuid),
  ('PACK90601 Kids Caps with Logo', 10, company_uuid),
  ('PACK90600 Kids Apron White with 2 Logos', 14, company_uuid),
  ('PACK90601 Kids Chef Coat with 1 Logo', 10, company_uuid),
  ('Grey Shirts', 60, company_uuid),
  ('PACK91206 Poloshirt XL', 35, company_uuid),
  ('FOH V-neck Tshirts', 35, company_uuid),
  ('FOH Grey Caps', 55, company_uuid),
  ('Black Chef Round Caps', 20, company_uuid),
  ('BOH Denim Blue Aprons', 35, company_uuid),
  ('PACK91205 Poloshirt L', 35, company_uuid),
  ('PACK91208 Poloshirt Dryfit S', 40, company_uuid),
  ('Black Full Apron with Benjarong with Royal Thai Consulate Printing', 35, company_uuid),
  ('PACK91191 Oxford Shirt Male XL', 60, company_uuid),
  ('PACK91213 BOH Apron Blue', 35, company_uuid),
  ('PACK91203 Poloshirt S', 35, company_uuid),
  ('PACK91201 V-neck Tshirt XL', 35, company_uuid),
  ('PACK91202 V-neck Tshirt 2XL', 35, company_uuid),
  ('V-neck Tshirt JTG', 35, company_uuid),
  ('Grey Caps JTG', 55, company_uuid),
  ('PACK90213 JTG Apron Grey', 35, company_uuid),
  ('PACK91215 Grey Cap (FOH)', 55, company_uuid),
  ('Ladies Grey Shirts (S)', 60, company_uuid),
  ('Gents Grey Shirts', 60, company_uuid),
  ('FOH Grey Aprons', 35, company_uuid),
  ('Grey Caps', 55, company_uuid),
  ('Navy Blue Jeans', 75, company_uuid)
  ON CONFLICT DO NOTHING;
END $$;