-- RTI Kit cross-device recovery storage.
-- Run manually only after the feature branch has been reviewed and approved.
-- The Worker encrypts each payload before storing it; this table is not exposed
-- to anon/authenticated clients and has no public policies.

create table if not exists public.rti_kit_recovery (
  id uuid primary key default gen_random_uuid(),
  recovery_code_hash text not null unique,
  payment_id text not null unique,
  kit text not null check (kit = 'rti'),
  source_hash text not null,
  payload_ciphertext text not null,
  payload_iv text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '30 days'),
  revoked_at timestamptz,
  constraint rti_kit_recovery_code_hash_format check (recovery_code_hash ~ '^[a-f0-9]{64}$'),
  constraint rti_kit_recovery_source_hash_format check (source_hash ~ '^[a-f0-9]{64}$'),
  constraint rti_kit_recovery_iv_format check (payload_iv ~ '^[A-Za-z0-9_-]{16,32}$')
);

-- Rows older than expires_at (30 days) are deleted by the Worker on each new
-- purchase and can also be removed with:
--   delete from public.rti_kit_recovery where expires_at < now();
create index if not exists rti_kit_recovery_expiry_idx
  on public.rti_kit_recovery (expires_at)
  where revoked_at is null;

alter table public.rti_kit_recovery enable row level security;
revoke all on public.rti_kit_recovery from anon, authenticated;

comment on table public.rti_kit_recovery is
  'Private encrypted RTI Kit recovery payloads. Access only through the authenticated Cloudflare Worker backend.';
