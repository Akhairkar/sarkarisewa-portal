-- ============================================================================
-- SarkariSewa Portal — Blog posts table (write posts from the admin
-- dashboard, no JSON editing / git push required)
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- The 93 existing posts stay in data/blog-posts.json exactly as they are —
-- nothing needs to migrate. New posts written from the admin dashboard's
-- "Blog" tab are saved here instead. assets/js/blog.js and blog-post.js
-- merge both sources on the public site, so visitors never notice the
-- difference.
-- ============================================================================

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_en text not null,
  title_hi text,
  excerpt_en text,
  excerpt_hi text,
  body_en text not null,
  body_hi text,
  category text,
  related_service_id text,
  tags text[],
  date_published date not null default current_date,
  status text not null default 'draft',   -- 'draft' | 'published'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_posts_status_check check (status in ('draft', 'published'))
);

create index if not exists blog_posts_status_idx on blog_posts (status);
create index if not exists blog_posts_slug_idx on blog_posts (slug);

alter table blog_posts enable row level security;

-- Public site (blog/index.html, blog/post.html) only ever reads
-- status = 'published' — this backs that up at the database level.
create policy "Public can read published blog_posts"
  on blog_posts for select
  using (status = 'published');

-- Only the logged-in admin (Supabase Auth session, same as comments/
-- subscribers moderation) can see drafts and create/edit/delete posts.
create policy "Authenticated admin can read all blog_posts"
  on blog_posts for select
  using (auth.role() = 'authenticated');

create policy "Authenticated admin can insert blog_posts"
  on blog_posts for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated admin can update blog_posts"
  on blog_posts for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Authenticated admin can delete blog_posts"
  on blog_posts for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- After running this, the admin dashboard's Blog tab can write posts
-- straight to the live site — mark a post "Published" and it appears on
-- /blog/index.html immediately, no file editing or git push needed.
-- ============================================================================
