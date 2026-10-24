-- Export for web/src/data/csc-extra-centres.json: 24 centres for top district
-- pages whose old static HTML has no centre list. Keeps rows whose PIN belongs
-- to the district and whose address is usable, spread across PIN codes.
-- Read-only; no phone numbers. Run in the Supabase SQL editor and paste the
-- result (one JSON object) into the data file; drop rows with junk addresses.
with m(rel, st, names, pins) as (values
 ('service/csc-locator/uttarakhand/dehradun.html','UTTARAKHAND',array['Dehradun'],'^(248|2492)'),
 ('service/csc-locator/delhi/east.html','DELHI',array['East','East delhi'],'^110'),
 ('service/csc-locator/delhi/south-delhi.html','DELHI',array['South','South delhi'],'^110'),
 ('service/csc-locator/delhi/central-delhi.html','DELHI',array['Central','Central delhi'],'^110'),
 ('service/csc-locator/delhi/new-delhi.html','DELHI',array['New delhi'],'^110'),
 ('service/csc-locator/uttar-pradesh/sambhal.html','UTTAR PRADESH',array['Sambhal'],'^(2024|2025|2443)'),
 ('service/csc-locator/himachal-pradesh/solan.html','HIMACHAL PRADESH',array['Solan'],'^(1732|1711)'),
 ('service/csc-locator/bihar/madhubani.html','BIHAR',array['Madhubani'],'^847'),
 ('service/csc-locator/uttar-pradesh/basti.html','UTTAR PRADESH',array['Basti'],'^272')),
c as (select m.rel, initcap(lower(trim(regexp_replace(c.vle_name,'\s+',' ','g')))) n,
  trim(both ', ' from regexp_replace(regexp_replace(regexp_replace(c.address,
    ',?\s*(Panchayat/Village-|Sub District-|District-|State-[^,]*|Pin-\S*|null)', ',', 'gi'),
    '\s*(,\s*)+', ', ', 'g'), '\s{2,}', ' ', 'g')) a,
  c.pincode p,
  case when y between 6 and 37 and x between 68 and 98 and y<>x then round(y::numeric,5) end lat,
  case when y between 6 and 37 and x between 68 and 98 and y<>x then round(x::numeric,5) end lng
  from m join (select *, case when latitude ~ '^\d+(\.\d+)?$' then latitude::float end y,
    case when longitude ~ '^\d+(\.\d+)?$' then longitude::float end x from csc_centers) c on c.state=m.st and c.district=any(m.names) and c.pincode ~ m.pins),
u as (select *, row_number() over (partition by rel, p order by n) rn from c
  where n<>'' and length(a)>=8 and a ~* '[a-z]{3}' and a !~* '(@|gmail|\.com)'),
s as (select *, row_number() over (partition by rel order by rn, p) k from u)
select json_object_agg(rel, items) from (select rel, json_agg(json_build_array(n,a,p,lat,lng) order by p, n) items
  from s where k<=24 group by rel) t;
