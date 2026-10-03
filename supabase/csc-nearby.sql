-- CSC locator: public read + "nearest CSC" lookup. Applied 2026-10-03.
--
-- anon had the RLS policy "Allow public read access" but no SELECT grant, so
-- every browser query on csc_centers failed. Grant only the listing columns.
grant select (csc_id, vle_name, state, district, address, pincode, latitude, longitude)
  on public.csc_centers to anon, authenticated;

-- latitude/longitude are text. With the "C" collation, text order equals
-- number order for the same count of digits before the point, so a plain
-- index on latitude serves a latitude band (split at 10 for south India).
create index if not exists idx_csc_lat_c on public.csc_centers (latitude collate "C");

create or replace function public.csc_nearby(p_lat double precision, p_lng double precision, p_deg double precision default 0.1, p_limit int default 20)
returns table(csc_id text, vle_name text, state text, district text, address text, pincode text, latitude text, longitude text, km double precision)
language plpgsql stable security invoker set search_path = public as $$
declare
  v_d double precision := least(greatest(p_deg, 0.01), 0.5);
  v_lo text := round((p_lat - v_d)::numeric, 4)::text;
  v_hi text := round((p_lat + v_d)::numeric, 4)::text;
  v_same boolean := length(split_part(v_lo, '.', 1)) = length(split_part(v_hi, '.', 1));
  a1 text := v_lo; b1 text := case when v_same then v_hi else '9.99999999' end;
  a2 text := case when v_same then '~' else '10' end; b2 text := case when v_same then '~' else v_hi end;
begin
  if p_lat is null or p_lng is null or p_lat not between 5 and 38 or p_lng not between 67 and 98 then
    return;
  end if;
  return query
  select c.csc_id, c.vle_name, c.state, c.district, c.address, c.pincode, c.latitude, c.longitude, t.dist
  from public.csc_centers c
  cross join lateral (select
      case when c.latitude ~ '^[0-9]+(\.[0-9]+)?$' then c.latitude::double precision end as n_la,
      case when c.longitude ~ '^[0-9]+(\.[0-9]+)?$' then c.longitude::double precision end as n_ln) n
  cross join lateral (select round((111.2 * sqrt(power(n.n_la - p_lat, 2)
      + power((n.n_ln - p_lng) * cos(radians(p_lat)), 2)))::numeric, 2)::double precision as dist) t
  where (c.latitude collate "C" between a1 and b1 or c.latitude collate "C" between a2 and b2)
    and n.n_la between p_lat - v_d and p_lat + v_d
    and n.n_ln between p_lng - v_d and p_lng + v_d
  order by t.dist
  limit least(greatest(p_limit, 1), 50);
end $$;
revoke all on function public.csc_nearby(double precision, double precision, double precision, int) from public;
grant execute on function public.csc_nearby(double precision, double precision, double precision, int) to anon, authenticated;
