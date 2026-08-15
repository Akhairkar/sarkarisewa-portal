-- CSC Centres Schema for SarkariSewa India
-- -------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.csc_centres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    center_name TEXT NOT NULL,
    csc_id TEXT NOT NULL,
    state TEXT,
    district TEXT,
    pincode TEXT NOT NULL,
    contact TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.csc_centres ENABLE ROW LEVEL SECURITY;

-- 1. Anyone (Anon) can insert new verification requests
CREATE POLICY "Allow public insert for CSC verification"
    ON public.csc_centres
    FOR INSERT
    WITH CHECK (true);

-- 2. Anyone can read ONLY verified centers
CREATE POLICY "Allow public read for verified centers only"
    ON public.csc_centres
    FOR SELECT
    USING (is_verified = true);

-- 3. Authenticated Admins can read, update, and delete everything
-- Relies on the default Supabase authenticated role being the admin
CREATE POLICY "Allow authenticated full access to CSC centres"
    ON public.csc_centres
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
