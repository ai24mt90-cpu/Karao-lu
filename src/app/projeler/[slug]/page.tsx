import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getProject, toDescription } from "@/lib/content";
import ProjectDetailView from "./ProjectDetailView";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

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
        // projeler/layout.tsx başlık şablonunu sıfırladığı için site adını burada ekle
        title: `${project.title}${project.location ? ` – ${project.location}` : ""} | Karaoğlu Universal Mühendislik`,
        description,
        alternates: { canonical: path },
        openGraph: {
            url: path,
            title: project.title,
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
