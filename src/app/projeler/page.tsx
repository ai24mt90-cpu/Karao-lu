"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { MapPin, Filter, Loader2, Calendar, Building2 } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    status: string;
    image_url?: string;
    description?: string;
}

const categories = [
    { key: "Tümü", label: "Tümü" },
    { key: "tamamlandi", label: "Tamamlandı", isStatus: true },
    { key: "devam", label: "Devam Eden", isStatus: true },
];

const categoryTitles: Record<string, string> = {
    "Tümü": "TÜM PROJELER",
    "tamamlandi": "TAMAMLANAN PROJELER",
    "devam": "DEVAM EDEN PROJELER",
};

function ProjectsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [projects, setProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState(categoryParam || "Tümü");
    const [loading, setLoading] = useState(true);
    const [heroImage, setHeroImage] = useState<string>("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000");

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);

            // Fetch all projects
            const { data: projectsData, error: projectsError } = await supabase
                .from("projects")
                .select("*")
                .order("year", { ascending: false });

            // Fetch cover images from project_images
            const { data: imagesData } = await supabase
                .from("project_images")
                .select("project_id, image_url")
                .eq("is_cover", true);

            if (!projectsError && projectsData) {
                // Merge images with projects
                const projectsWithImages = projectsData.map(project => {
                    const coverImage = imagesData?.find(img => img.project_id === project.id);
                    return { ...project, image_url: coverImage?.image_url };
                });
                setProjects(projectsWithImages);

                // Set first project with image as hero
                const firstWithImage = projectsWithImages.find(p => p.image_url);
                if (firstWithImage?.image_url) {
                    setHeroImage(firstWithImage.image_url);
                }
            }
            setLoading(false);
        };
        fetchProjects();
    }, []);

    const handleCategoryChange = (categoryKey: string) => {
        setActiveCategory(categoryKey);
        const url = new URL(window.location.href);
        if (categoryKey === "Tümü") {
            url.searchParams.delete("category");
        } else {
            url.searchParams.set("category", categoryKey);
        }
        window.history.pushState({}, "", url.toString());
    };

    const filteredProjects = (() => {
        if (activeCategory === "Tümü") return projects;
        if (activeCategory === "tamamlandi") return projects.filter(p => p.status === "Tamamlandı");
        if (activeCategory === "devam") return projects.filter(p => p.status === "Devam Ediyor");
        return projects;
    })();

    const pageTitle = categoryTitles[activeCategory] || "PROJELER";

    // Group projects by year
    const projectsByYear = filteredProjects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-[350px]">
                <Image
                    src={heroImage}
                    alt="Projeler"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={activeCategory}
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">{pageTitle}</h1>
                            <p className="text-white/80 text-lg">Van ve çevresinde tamamladığımız mühendislik projeleri</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="layout-container">
                    <div className="flex items-center gap-4">
                        <Filter size={20} className="text-text-secondary flex-shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors rounded-lg ${activeCategory === cat.key
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                                    }`}
                            >
                                {cat.label}
                                {cat.key !== "Tümü" && (
                                    <span className="ml-2 text-xs opacity-70">
                                        ({cat.key === "tamamlandi"
                                            ? projects.filter(p => p.status === "Tamamlandı").length
                                            : projects.filter(p => p.status === "Devam Ediyor").length
                                        })
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-12 bg-surface-secondary min-h-[60vh]">
                <div className="layout-container">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="animate-spin text-primary" size={40} />
                        </div>
                    ) : filteredProjects.length === 0 ? (
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

                                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                        <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Kurum / İşveren</th>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">İşin Adı</th>
                                                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground hidden md:table-cell">Lokasyon</th>
                                                    <th className="text-center px-6 py-4 text-sm font-semibold text-foreground hidden lg:table-cell">Durum</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {projectsByYear[year].map((project, idx) => (
                                                    <motion.tr
                                                        key={project.id}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.02 }}
                                                        className="hover:bg-gray-50 transition-colors"
                                                    >
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-4">
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
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className="text-text-secondary text-sm">{project.description || "-"}</span>
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
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Summary Stats */}
                    {!loading && filteredProjects.length > 0 && (
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <p className="text-3xl font-bold text-primary">{projects.length}</p>
                                <p className="text-sm text-text-secondary mt-1">Toplam Proje</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <p className="text-3xl font-bold text-green-600">{projects.filter(p => p.status === "Tamamlandı").length}</p>
                                <p className="text-sm text-text-secondary mt-1">Tamamlanan</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <p className="text-3xl font-bold text-yellow-600">{projects.filter(p => p.status === "Devam Ediyor").length}</p>
                                <p className="text-sm text-text-secondary mt-1">Devam Eden</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <p className="text-3xl font-bold text-primary">{sortedYears.length}</p>
                                <p className="text-sm text-text-secondary mt-1">Yıl Tecrübe</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function LoadingFallback() {
    return (
        <div className="flex flex-col bg-background min-h-screen">
            <div className="flex items-center justify-center flex-1">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <div className="flex flex-col bg-background">
            <Suspense fallback={<LoadingFallback />}>
                <ProjectsContent />
            </Suspense>
        </div>
    );
}
