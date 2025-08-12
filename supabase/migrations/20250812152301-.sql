-- Secure consultation_submissions: remove public read access and restrict to admins only

-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.consultation_submissions ENABLE ROW LEVEL SECURITY;

-- Remove overly-permissive public read policy
DROP POLICY IF EXISTS "Enable public read of consultation_submissions" ON public.consultation_submissions;

-- Allow only admin users (profiles.is_master = true) to read submissions
CREATE POLICY "Allow admin read access to consultation_submissions"
ON public.consultation_submissions
FOR SELECT
USING (
  auth.uid() IN (
    SELECT profiles.id FROM public.profiles WHERE profiles.is_master = true
  )
);
