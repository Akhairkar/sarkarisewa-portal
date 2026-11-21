-- Allow the consumer complaint kit to use the same encrypted recovery table
-- as the RTI kit. Safe to run more than once. Run in the Supabase SQL editor
-- BEFORE the consumer kit goes live (the table currently accepts only 'rti').
do $$
declare c text;
begin
  for c in
    select conname from pg_constraint
    where conrelid = 'public.rti_kit_recovery'::regclass
      and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%kit = ''rti''%'
  loop
    execute format('alter table public.rti_kit_recovery drop constraint %I', c);
  end loop;
end $$;

alter table public.rti_kit_recovery
  drop constraint if exists rti_kit_recovery_kit_check;
alter table public.rti_kit_recovery
  add constraint rti_kit_recovery_kit_check check (kit in ('rti', 'consumer'));
