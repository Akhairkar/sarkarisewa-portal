-- Daily WhatsApp Status posters (/poster/ and admin/posters.html).
-- Applied 9 Oct 2026. Visitors read published posters only and log usage
-- through poster_log(); they have no direct access to poster_events.
create table if not exists public.daily_posters (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  publish_date date not null default (now() at time zone 'Asia/Kolkata')::date,
  category text not null default 'yojana' check (category in ('naukri','yojana','deadline','document','alert')),
  title text not null check (length(title) between 3 and 90),
  body text not null check (length(body) between 3 and 320),
  highlight text check (highlight is null or length(highlight) <= 60),
  source_label text check (source_label is null or length(source_label) <= 80),
  source_url text check (source_url is null or (source_url like 'https://%' and length(source_url) <= 300)),
  page_url text check (page_url is null or (page_url like '/%' and length(page_url) <= 200)),
  status text not null default 'draft' check (status in ('draft','published','hidden')),
  sort int not null default 0
);
alter table public.daily_posters enable row level security;
create policy "public reads published posters" on public.daily_posters for select to anon, authenticated using (status = 'published');
create policy "admin manages posters" on public.daily_posters for all to authenticated using ((select is_admin())) with check ((select is_admin()));
revoke insert, update, delete, truncate on public.daily_posters from anon;

create table if not exists public.poster_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  poster_id uuid references public.daily_posters(id) on delete cascade,
  action text not null check (action in ('view','share','download','customise')),
  design text check (design is null or length(design) <= 20),
  size text check (size is null or length(size) <= 10),
  with_photo boolean
);
alter table public.poster_events enable row level security;
create policy "admin reads poster events" on public.poster_events for select to authenticated using ((select is_admin()));
revoke all on public.poster_events from anon;

create or replace function public.poster_log(p_poster uuid, p_action text, p_design text default null, p_size text default null, p_photo boolean default null)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_action not in ('view','share','download','customise') then return; end if;
  if p_poster is not null and not exists (select 1 from daily_posters where id = p_poster and status = 'published') then return; end if;
  insert into poster_events(poster_id, action, design, size, with_photo)
  values (p_poster, p_action, left(p_design, 20), left(p_size, 10), p_photo);
end $$;
revoke all on function public.poster_log(uuid, text, text, text, boolean) from public;
grant execute on function public.poster_log(uuid, text, text, text, boolean) to anon, authenticated;
