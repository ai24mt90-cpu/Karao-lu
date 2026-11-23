-- Supabase'de 23.11.2026'da çalıştırıldı.
-- projects ve blog_posts: slug boşsa başlıktan üretir, elle girilmişse temizler
-- (Türkçe karakter -> ASCII, boşluk/noktalama -> "-", en fazla 80 karakter),
-- çakışırsa sonuna -2, -3 ... ekler.

create or replace function public.slugify(t text) returns text language sql immutable as $$
  select nullif(regexp_replace(trim(both '-' from regexp_replace(lower(translate(coalesce(t, ''),
    'ÇĞİIÖŞÜçğıöşüÂâÎîÛû', 'CGIIOSUcgiosuAaIiUu')), '[^a-z0-9]+', '-', 'g')),
    '^(.{0,80})(-.*)?$', '\1'), '')
$$;

create or replace function public.set_slug() returns trigger language plpgsql as $$
declare base text; candidate text; n int := 1; taken boolean;
begin
  base := public.slugify(coalesce(nullif(new.slug, ''), new.title));
  if base is null then return new; end if;
  candidate := base;
  loop
    execute format('select exists (select 1 from %I.%I where slug = $1 and id <> $2)', TG_TABLE_SCHEMA, TG_TABLE_NAME)
      into taken using candidate, new.id;
    exit when not taken;
    n := n + 1; candidate := base || '-' || n;
  end loop;
  new.slug := candidate;
  return new;
end $$;

create or replace trigger set_slug before insert or update of slug on public.projects
  for each row execute function public.set_slug();
create or replace trigger set_slug before insert or update of slug on public.blog_posts
  for each row execute function public.set_slug();
