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
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const titleMap: Record<string, string> = {
        "tamamlanan-kamu-projeleri": "Tamamlanan Kamu Projeleri Referanslarımız",
        "devam-eden-altyapi-isleri": "Devam Eden Altyapı ve Üstyapı Projeleri",
        "tum-projeler": "Tüm Mühendislik ve Taahhüt Projelerimiz"
    };

    const title = titleMap[slug] || "Projeler";

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

export default async function ProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const allowedCategories = ["tamamlanan-kamu-projeleri", "devam-eden-altyapi-isleri", "tum-projeler"];

    if (!allowedCategories.includes(slug)) {
        notFound();
    }

    const projects = await getProjects(slug);

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
            <section className="relative h-[350px]">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
                    alt="Projeler"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <div className="mb-4">
                            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm">
                                <ArrowLeft size={16} className="mr-2" /> Ana Sayfaya Dön
                            </Link>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            {pageTitleMap[slug]}
                        </h1>
                        <p className="text-white/80 text-lg">Van ve çevresinde tamamladığımız mühendislik projeleri</p>
                    </div>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="layout-container py-4">
                    <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                        <Link
                            href="/projeler/kategori/tum-projeler"
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${slug === 'tum-projeler' ? 'bg-primary text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}
                        >
                            Tümü
                        </Link>
                        <Link
                            href="/projeler/kategori/tamamlanan-kamu-projeleri"
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${slug === 'tamamlanan-kamu-projeleri' ? 'bg-primary text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}
                        >
                            Tamamlanan İşler
                        </Link>
                        <Link
                            href="/projeler/kategori/devam-eden-altyapi-isleri"
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${slug === 'devam-eden-altyapi-isleri' ? 'bg-primary text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`}
                        >
                            Devam Eden İşler
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-surface-secondary min-h-[60vh]">
                <div className="layout-container">
                    {projects.length === 0 ? (
                        <div className="text-center py-20 text-text-secondary">
                            Bu kategoride henüz proje bulunmuyor.
                        </div>
                    ) : (
                        <div className="space-y-10">
                            {sortedYears.map((year) => (
                                <div key={year}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar size={20} className="text-primary" />
                                        <h2 className="text-2xl font-bold text-foreground">{year}</h2>
                                        <span className="text-sm text-text-secondary">({projectsByYear[year].length} proje)</span>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-sm overflow-hidden text-left">
                                        <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">İşin Adı</th>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Kurum / İşveren</th>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground hidden md:table-cell">Lokasyon</th>
                                                    <th className="text-center px-6 py-4 text-sm font-semibold text-foreground hidden lg:table-cell">Durum</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {projectsByYear[year].map((project: Project) => (
                                                    <tr key={project.id} className="hover:bg-gray-50 transition-colors group">
                                                        <td className="px-6 py-4">
                                                            <Link href={`/projeler/${project.id}`} className="flex items-center gap-4 group-hover:text-primary transition-colors">
                                                                {project.image_url ? (
                                                                    <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                                                                        <Image
                                                                            src={project.image_url}
                                                                            alt={project.title}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                                                                        <Building2 size={20} className="text-gray-400" />
                                                                    </div>
                                                                )}
                                                                <span className="font-medium text-foreground text-sm">{project.title}</span>
                                                            </Link>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className="text-text-secondary text-sm">{project.client || project.description?.slice(0, 50) + "..." || "-"}</span>
                                                        </td>
                                                        <td className="px-6 py-4 hidden md:table-cell">
                                                            <div className="flex items-center gap-2 text-text-secondary text-sm">
                                                                <MapPin size={14} />
                                                                <span>{project.location}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-center hidden lg:table-cell">
                                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${project.status === "Tamamlandı"
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-yellow-100 text-yellow-700"
                                                                }`}>
                                                                {project.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
