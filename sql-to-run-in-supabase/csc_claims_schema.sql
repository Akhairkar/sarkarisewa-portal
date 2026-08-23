-- Drop table if exists to allow clean re-runs
-- DROP TABLE IF EXISTS public.csc_claims;

CREATE TABLE public.csc_claims (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id VARCHAR(50) UNIQUE NOT NULL,
    
    -- STEP 1: Owner Info (Private)
    owner_name VARCHAR(255) NOT NULL,
    owner_mobile VARCHAR(20) NOT NULL,
    owner_email VARCHAR(255),
    alternate_contact VARCHAR(20),
    
    -- STEP 2: CSC Info
    centre_name VARCHAR(255) NOT NULL,
    csc_id VARCHAR(100),
    centre_type VARCHAR(100),
    existing_profile_url TEXT,
    years_of_operation INTEGER,
    
    -- STEP 3: Address
    full_address TEXT NOT NULL,
    building_shop VARCHAR(255),
    locality VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    
    -- STEP 4: Services
    online_services JSONB DEFAULT '[]'::jsonb,
    offline_services JSONB DEFAULT '[]'::jsonb,
    custom_services JSONB DEFAULT '[]'::jsonb,
    
    -- STEP 5: Working Hours
    working_hours JSONB DEFAULT '{}'::jsonb,
    home_visit BOOLEAN DEFAULT FALSE,
    appointment_required BOOLEAN DEFAULT FALSE,
    
    -- STEP 6: Public Contact Preferences
    public_phone VARCHAR(20),
    public_whatsapp VARCHAR(20),
    public_email VARCHAR(255),
    show_hours BOOLEAN DEFAULT TRUE,
    show_address BOOLEAN DEFAULT TRUE,
    
    -- STEP 7: Consent & Meta
    consent_given BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Admin / Processing Fields
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected, changes_requested
    admin_notes TEXT,
    rejection_reason TEXT,
    profile_slug VARCHAR(255) UNIQUE,
    profile_url TEXT,
    
    -- Timestamps
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    approved_at TIMESTAMPTZ,
    profile_generated_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.csc_claims ENABLE ROW LEVEL SECURITY;

-- 1. Allow public inserts (Anyone can submit a claim)
CREATE POLICY "Allow public inserts to csc_claims"
ON public.csc_claims
FOR INSERT
TO anon
WITH CHECK (true);

-- 2. Prevent public reads (Protect privacy)
CREATE POLICY "Deny public select on csc_claims"
ON public.csc_claims
FOR SELECT
TO anon
USING (false);

-- 3. Allow Admin reads
CREATE POLICY "Allow admin select on csc_claims"
ON public.csc_claims
FOR SELECT
TO authenticated
USING (true);

-- 4. Allow Admin updates
CREATE POLICY "Allow admin update on csc_claims"
ON public.csc_claims
FOR UPDATE
TO authenticated
USING (true);

-- 5. Prevent public updates/deletes
CREATE POLICY "Deny public update on csc_claims"
ON public.csc_claims
FOR UPDATE
TO anon
USING (false);

CREATE POLICY "Deny public delete on csc_claims"
ON public.csc_claims
FOR DELETE
TO anon
USING (false);

CREATE POLICY "Allow admin delete on csc_claims"
ON public.csc_claims
FOR DELETE
TO authenticated
USING (true);

-- (Note: The admin panel will use either the service_role key or an authenticated admin user to bypass RLS and SELECT/UPDATE records)

-- Add indexes for faster querying
CREATE INDEX idx_csc_claims_status ON public.csc_claims(status);
CREATE INDEX idx_csc_claims_pincode ON public.csc_claims(pincode);
CREATE INDEX idx_csc_claims_state_district ON public.csc_claims(state, district);
