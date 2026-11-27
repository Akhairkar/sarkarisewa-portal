-- Read-only security regression checks for the isolated Partner Network test project.
-- Run in Supabase SQL Editor as a database owner. Every statement is SELECT-only.

-- 1) RLS must be enabled on every Partner Network table.
select n.nspname as schema_name, c.relname as table_name,
       c.relrowsecurity as rls_enabled,
       c.relforcerowsecurity as rls_forced
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'partner_network' and c.relkind = 'r'
order by c.relname;

-- 2) API roles must not have CREATE in exposed schemas.
select r.rolname,
       has_schema_privilege(r.rolname, 'public', 'CREATE') as public_create,
       has_schema_privilege(r.rolname, 'partner_network', 'CREATE') as partner_schema_create,
       has_schema_privilege(r.rolname, 'partner_network', 'USAGE') as partner_schema_usage
from pg_roles r
where r.rolname in ('anon', 'authenticated', 'service_role')
order by r.rolname;

-- 3) Partner profile editable columns versus protected columns.
select column_name,
       has_column_privilege('authenticated', 'partner_network.partner_profiles',
                            column_name, 'UPDATE') as authenticated_can_update
from information_schema.columns
where table_schema = 'partner_network' and table_name = 'partner_profiles'
order by ordinal_position;

-- 4) Intake and internal routing must remain service-role-only.
select 'public.partner_submit_customer_lead' as function_name,
       has_function_privilege('anon', 'public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text)', 'EXECUTE') as anon_execute,
       has_function_privilege('authenticated', 'public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text)', 'EXECUTE') as authenticated_execute,
       has_function_privilege('service_role', 'public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text)', 'EXECUTE') as service_role_execute;

-- 5) Admin allowlist must remain empty until the owner explicitly authorizes a test Admin.
select count(*) as admin_allowlist_entries
from partner_network.admin_memberships;

-- 6) No test data is assumed. This reports current row counts only.
select 'partner_profiles' as table_name, count(*) as row_count from partner_network.partner_profiles
union all select 'customer_leads', count(*) from partner_network.customer_leads
union all select 'lead_assignments', count(*) from partner_network.lead_assignments
union all select 'partner_notifications', count(*) from partner_network.partner_notifications;
