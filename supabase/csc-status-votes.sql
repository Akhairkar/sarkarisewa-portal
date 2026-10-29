-- "Was this centre open?" votes from visitors of the CSC locator and the
-- district pages. No personal data: the voter is a random token the browser
-- keeps in localStorage. Visitors can only insert; only admins can read.
create table if not exists public.csc_status_votes (
  id bigint generated always as identity primary key,
  centre_key text not null,          -- "<pin>|<name, lower case>"
  csc_id text,                       -- when the card came from csc_centers
  vote smallint not null,            -- 1 = open, -1 = closed / not found
  voter text not null,               -- random browser token
  page text,
  created_at timestamptz not null default now(),
  constraint csc_status_votes_vote check (vote in (1, -1)),
  constraint csc_status_votes_len check (
    length(centre_key) between 8 and 160 and length(voter) between 16 and 40
    and coalesce(length(csc_id), 0) <= 40 and coalesce(length(page), 0) <= 200),
  constraint csc_status_votes_once unique (centre_key, voter)
);
create index if not exists csc_status_votes_key on public.csc_status_votes (centre_key);

-- At most 30 votes per browser token per hour.
create or replace function public.csc_status_votes_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.csc_status_votes
      where voter = new.voter and created_at > now() - interval '1 hour') >= 30 then
    raise exception 'too many votes';
  end if;
  return new;
end $$;
drop trigger if exists csc_status_votes_limit on public.csc_status_votes;
create trigger csc_status_votes_limit before insert on public.csc_status_votes
  for each row execute function public.csc_status_votes_limit();

alter table public.csc_status_votes enable row level security;
revoke all on public.csc_status_votes from anon, authenticated;
grant insert (centre_key, csc_id, vote, voter, page) on public.csc_status_votes to anon, authenticated;
grant select on public.csc_status_votes to authenticated;
create policy "visitors add csc status votes" on public.csc_status_votes
  for insert to anon, authenticated with check (true);
create policy "admin reads csc status votes" on public.csc_status_votes
  for select to authenticated using ((select is_admin()));
