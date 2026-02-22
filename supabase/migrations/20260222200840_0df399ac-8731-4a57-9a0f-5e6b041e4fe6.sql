
CREATE TABLE public.fairgreen_demo_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  size_s INTEGER NOT NULL DEFAULT 0,
  size_m INTEGER NOT NULL DEFAULT 0,
  size_l INTEGER NOT NULL DEFAULT 0,
  size_xl INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.fairgreen_demo_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert fairgreen_demo_orders"
ON public.fairgreen_demo_orders
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public read fairgreen_demo_orders"
ON public.fairgreen_demo_orders
FOR SELECT
USING (true);
