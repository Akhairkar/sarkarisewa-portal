-- Applied 2026-10-19: admin analytics by section and filtered top pages
-- (used by admin/analytics.html). Admin only via is_admin().
create or replace function public.analytics_section_views(days integer default 30)
returns table(section text, views bigint)
language plpgsql security definer set search_path to 'public' as $$
begin
  if not public.is_admin() then raise exception 'not authorized'; end if;
  return query
  select coalesce(nullif(split_part(p.page_path, '/', 2), ''), 'home') as section, count(*) as views
  from page_views p
  where p.created_at > now() - make_interval(days => greatest(1, least(days, 365)))
  group by 1 order by views desc;
end; $$;

create or replace function public.analytics_top_pages_matching(pattern text, days integer default 30, limit_count integer default 10)
returns table(page_path text, views bigint)
language plpgsql security definer set search_path to 'public' as $$
begin
  if not public.is_admin() then raise exception 'not authorized'; end if;
  return query
  select p.page_path, count(*) as views
  from page_views p
  where p.created_at > now() - make_interval(days => greatest(1, least(days, 365)))
    and p.page_path ~* left(pattern, 300)
  group by p.page_path order by views desc
  limit greatest(1, least(limit_count, 50));
end; $$;

revoke all on function public.analytics_section_views(integer) from public, anon;
revoke all on function public.analytics_top_pages_matching(text, integer, integer) from public, anon;
grant execute on function public.analytics_section_views(integer) to authenticated;
grant execute on function public.analytics_top_pages_matching(text, integer, integer) to authenticated;
