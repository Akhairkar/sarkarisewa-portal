-- What visitors type in the site search (/search.html), to find problems the
-- site has no page for yet. Only the words are kept: digit runs of 4+ are
-- replaced by '#' in the browser (no phone, Aadhaar or application numbers),
-- no session, IP or name. Visitors can only insert; admins read.
create table if not exists public.search_queries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  q text not null,
  results int not null default 0,
  clicked text,
  constraint search_queries_q check (length(q) between 2 and 80 and q !~ '[0-9]{4,}'),
  constraint search_queries_results check (results between 0 and 5000),
  constraint search_queries_clicked check (clicked is null or (clicked ~ '^/[A-Za-z0-9/_.%-]*$' and length(clicked) <= 200))
);
create index if not exists search_queries_created on public.search_queries (created_at);
alter table public.search_queries enable row level security;
revoke all on public.search_queries from anon, authenticated;
grant insert on public.search_queries to anon, authenticated;
grant select on public.search_queries to authenticated;
drop policy if exists search_queries_insert on public.search_queries;
create policy search_queries_insert on public.search_queries for insert to anon, authenticated with check (true);
drop policy if exists search_queries_admin_read on public.search_queries;
create policy search_queries_admin_read on public.search_queries for select to authenticated using (public.is_admin());

-- Admin summary: most searched words, and searches that found nothing.
create or replace function public.search_stats(p_days int default 30) returns json
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not authorized'; end if;
  return json_build_object(
    'total', (select count(*) from search_queries where created_at > now() - make_interval(days => p_days)),
    'top', coalesce((select json_agg(x) from (
        select lower(q) q, count(*) n, round(avg(results)) avg_results,
               count(*) filter (where clicked is not null) clicks
        from search_queries where created_at > now() - make_interval(days => p_days)
        group by lower(q) order by count(*) desc limit 100) x), '[]'::json),
    'none', coalesce((select json_agg(x) from (
        select lower(q) q, count(*) n, max(created_at) last
        from search_queries where created_at > now() - make_interval(days => p_days) and results = 0
        group by lower(q) order by count(*) desc, max(created_at) desc limit 100) x), '[]'::json),
    'noclick', coalesce((select json_agg(x) from (
        select lower(q) q, count(*) n, round(avg(results)) avg_results
        from search_queries where created_at > now() - make_interval(days => p_days) and results > 0
        group by lower(q) having count(*) filter (where clicked is not null) = 0
        order by count(*) desc limit 50) x), '[]'::json));
end $$;
revoke execute on function public.search_stats(int) from public, anon;
grant execute on function public.search_stats(int) to authenticated;
