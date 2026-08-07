-- Run this in Supabase SQL Editor, then click "Export" → CSV on the results.
-- Gives you exactly what's needed to build personalized claim links/messages.
select
  id,
  owner_name,
  owner_phone,
  district,
  name,
  'https://sarkarisewaindia.com/csc/claim.html?id=' || id as claim_link
from csc_centres
where status = 'unclaimed'
order by district, owner_name;
