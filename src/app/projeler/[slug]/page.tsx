import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getProject, toDescription } from "@/lib/content";
import ProjectDetailView from "./ProjectDetailView";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

const BRAND = " | Karaoğlu Mühendislik";

// Admin panelde başlıklar BÜYÜK HARFLE giriliyor; Google'da okunur ve 60 karakter civarında kalsın
function projectTitle(title: string, location?: string) {
    const lower = title.toLocaleLowerCase("tr-TR");
    let text = lower
        .replace(/(^|[\s(\/-])(\p{L})/gu, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase("tr-TR"))
        .replace(/ (Ve|İle|Veya|De|Da|Ki) /g, (w) => w.toLocaleLowerCase("tr-TR"));
    if (location && !lower.includes(location.toLocaleLowerCase("tr-TR"))) {
        text += ` – ${location.charAt(0).toLocaleUpperCase("tr-TR")}${location.slice(1).toLocaleLowerCase("tr-TR")}`;
    }
    if (text.length + BRAND.length <= 65) return text + BRAND;
    return text.length > 65 ? `${text.slice(0, 62).trimEnd()}…` : text;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const result = await getProject(slug);
    if (!result) return { title: "Proje bulunamadı", robots: { index: false } };

    const { project, images } = result;
    const path = `/projeler/${project.slug || project.id}`;
    const cover = images.find((img) => img.is_cover)?.image_url || images[0]?.image_url;
    const description =
        toDescription(project.content) ||
        [project.title, project.location, project.year, project.category].filter(Boolean).join(" · ");

    return {
        title: { absolute: projectTitle(project.title, project.location) },
        description,
        alternates: { canonical: path },
        openGraph: {
            url: path,
            title: projectTitle(project.title, project.location),
            description,
            images: cover ? [{ url: cover, alt: project.title }] : undefined,
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const result = await getProject(slug);
    if (!result) notFound();

    const { project, images } = result;

    // UUID'li eski adresleri okunabilir slug adresine topla
    if (project.slug && decodeURIComponent(slug) !== project.slug) {
        permanentRedirect(`/projeler/${project.slug}`);
    }

    return <ProjectDetailView project={project} images={images} />;
}
