import { cache } from "react";
import { supabase } from "@/lib/supabase";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface BlogPost {
    id: string;
    slug?: string | null;
    title: string;
    excerpt?: string | null;
    content?: string | null;
    category?: string | null;
    image_url?: string | null;
    created_at: string;
    published_at?: string | null;
}

export interface Project {
    id: string;
    title: string;
    slug?: string | null;
    category: string;
    location: string;
    year: string;
    status: string;
    client?: string;
    area?: string;
    content?: string;
}

export interface ProjectImage {
    image_url: string;
    is_cover: boolean;
}

// Eski linkler UUID, yenileri slug kullanıyor — ikisini de kabul et
async function findByIdOrSlug<T>(table: string, param: string): Promise<T | null> {
    const key = decodeURIComponent(param);
    const query = supabase.from(table).select("*").limit(1);
    const { data, error } = UUID_RE.test(key)
        ? await query.or(`id.eq.${key},slug.eq.${key}`)
        : await query.eq("slug", key);

    if (error) {
        console.error(`${table} fetch error:`, error);
        return null;
    }
    return (data?.[0] as T) ?? null;
}

export const getBlogPost = cache((param: string) => findByIdOrSlug<BlogPost>("blog_posts", param));

export const getProject = cache(async (param: string) => {
    const project = await findByIdOrSlug<Project>("projects", param);
    if (!project) return null;

    const { data: images } = await supabase
        .from("project_images")
        .select("image_url, is_cover")
        .eq("project_id", project.id);

    return { project, images: (images ?? []) as ProjectImage[] };
});

export function toDescription(...candidates: (string | null | undefined)[]): string | undefined {
    const text = candidates.find((c) => c && c.trim());
    if (!text) return undefined;
    const plain = text.replace(/[#*_>`\[\]()!-]/g, "").replace(/\s+/g, " ").trim();
    return plain.length > 160 ? `${plain.slice(0, 157).trimEnd()}…` : plain;
}
