import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Building2, ArrowLeft } from "lucide-react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    status: string;
    image_url?: string;
    description?: string;
    client?: string;
}

// SEO Metadata Generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const titleMap: Record<string, string> = {
        "tamamlanan-kamu-projeleri": "Tamamlanan Kamu Projeleri Referanslarımız",
        "devam-eden-altyapi-isleri": "Devam Eden Altyapı ve Üstyapı Projeleri",
        "tum-projeler": "Tüm Mühendislik ve Taahhüt Projelerimiz"
    };

    const title = titleMap[params.slug] || "Projeler";

    return {
        title: `${title} | Karaoğlu Mühendislik`,
        description: `Van ve çevre illerde ${title.toLowerCase()}. Hastane, okul, TOKİ ve altyapı iş bitirmelerimiz.`,
    };
}

async function getProjects(slug: string) {
    let query = supabase
        .from("projects")
        .select("*")
        .order("year", { ascending: false });

    // Filter based on slug
    if (slug === "tamamlanan-kamu-projeleri") {
        query = query.eq("status", "Tamamlandı");
    } else if (slug === "devam-eden-altyapi-isleri") {
        query = query.eq("status", "Devam Ediyor");
    }

    const { data: projectsData, error } = await query;

    if (error) {
        console.error("Error fetching projects:", error);
        return [];
    }

    // Fetch images
    if (projectsData && projectsData.length > 0) {
        const projectIds = projectsData.map(p => p.id);
        const { data: imagesData } = await supabase
            .from("project_images")
            .select("project_id, image_url")
            .in("project_id", projectIds)
            .eq("is_cover", true);

        return projectsData.map(project => {
            const coverImage = imagesData?.find(img => img.project_id === project.id);
            return { ...project, image_url: coverImage?.image_url };
        });
    }

    return projectsData || [];
}

export default async function ProjectsPage({ params }: { params: { slug: string } }) {
    const allowedCategories = ["tamamlanan-kamu-projeleri", "devam-eden-altyapi-isleri", "tum-projeler"];

    if (!allowedCategories.includes(params.slug)) {
        notFound();
    }

    const projects = await getProjects(params.slug);

    // Group by year
    const projectsByYear = projects.reduce((acc, project: Project) => {
        const year = project.year || "Belirsiz";
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

    const pageTitleMap: Record<string, string> = {
        "tamamlanan-kamu-projeleri": "TAMAMLANAN KAMU PROJELERİ",
        "devam-eden-altyapi-isleri": "DEVAM EDEN PROJELER",
        "tum-projeler": "TÜM PROJELER"
    };

    return (
        <div className="flex flex-col bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[300px] bg-primary">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <div className="mb-4">
                            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm">
                                <ArrowLeft size={16} className="mr-2" /> Ana Sayfaya Dön
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {pageTitleMap[params.slug]}
                        </h1>
                        <p className="text-white/80 text-lg max-w-2xl">
                            Kamu ihale mevzuatına uygun, teknik şartnamelere tam uyumlu olarak teslim ettiğimiz iş bitirmelerimiz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="layout-container">
                    <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
                        <Link
                            href="/projeler/kategori/tum-projeler"
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${params.slug === 'tum-projeler' ? 'bg-primary text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}
                        >
                            Tüm Projeler
                        </Link>
                        <Link
                            href="/projeler/kategori/tamamlanan-kamu-projeleri"
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${params.slug === 'tamamlanan-kamu-projeleri' ? 'bg-primary text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
                        >
                            Tamamlanan İşler
                        </Link>
                        <Link
                            href="/projeler/kategori/devam-eden-altyapi-isleri"
                            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${params.slug === 'devam-eden-altyapi-isleri' ? 'bg-primary text-white' : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'}`}
                        >
                            Devam Eden İşler
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-surface-secondary">
                <div className="layout-container">
                    {projects.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-text-secondary text-lg">Bu kategoride listelenecek proje bulunamadı.</p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {sortedYears.map((year) => (
                                <div key={year}>
                                    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                                        <Calendar size={24} className="text-primary" />
                                        <h2 className="text-3xl font-bold text-foreground">{year}</h2>
                                        <span className="text-sm text-text-secondary mt-2">({projectsByYear[year].length} proje)</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {projectsByYear[year].map((project) => (
                                            <div key={project.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                                <div className="relative h-48 bg-gray-100">
                                                    {project.image_url ? (
                                                        <Image
                                                            src={project.image_url}
                                                            alt={`${project.title} - ${project.location} İnşaatı`}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-300">
                                                            <Building2 size={48} />
                                                        </div>
                                                    )}
                                                    <div className="absolute top-4 right-4">
                                                        <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${project.status === 'Tamamlandı' ? 'bg-white text-green-700' : 'bg-white text-yellow-700'}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 text-xs text-primary font-bold mb-2 uppercase tracking-wide">
                                                        <MapPin size={12} /> {project.location}
                                                    </div>
                                                    <h3 className="font-bold text-foreground text-lg mb-3 line-clamp-2 md:h-14">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-text-secondary line-clamp-2 mb-4 h-10">
                                                        {project.client || project.description || "Kamu İhale Kurumu kapsamında tamamlanmıştır."}
                                                    </p>

                                                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                                        <span className="text-xs text-gray-400 font-mono">
                                                            Ref: {project.year}-{project.id.slice(0, 4)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
