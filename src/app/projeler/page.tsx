"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { MapPin, Filter, Loader2 } from "lucide-react";

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
    { key: "kamu", label: "Kamu" },
    { key: "konut", label: "Konut" },
    { key: "altyapi", label: "Altyapı" },
    { key: "saglik", label: "Sağlık" },
    { key: "egitim", label: "Eğitim" },
];

const categoryTitles: Record<string, string> = {
    "Tümü": "TÜM PROJELER",
    "kamu": "KAMU PROJELERİ",
    "konut": "KONUT PROJELERİ",
    "altyapi": "ALTYAPI PROJELERİ",
    "saglik": "SAĞLIK PROJELERİ",
    "egitim": "EĞİTİM PROJELERİ",
};

const defaultProjects = [
    { id: "1", title: "Belediye Hizmet Binası", category: "kamu", location: "Van", year: "2024", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
    { id: "2", title: "Konut Kompleksi", category: "konut", location: "İpekyolu", year: "2023", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" },
    { id: "3", title: "Kanalizasyon Hattı", category: "altyapi", location: "Van", year: "2023", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600" },
    { id: "4", title: "Devlet Hastanesi Ek Bina", category: "saglik", location: "Edremit", year: "2024", status: "Devam Ediyor", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
    { id: "5", title: "İlkokul İnşaatı", category: "egitim", location: "Tuşba", year: "2023", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600" },
    { id: "6", title: "Kaymakamlık Binası", category: "kamu", location: "Erciş", year: "2022", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1464938050520-ef2571a0eb7b?auto=format&fit=crop&q=80&w=600" },
];

function ProjectsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [projects, setProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState(categoryParam || "Tümü");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setProjects(data);
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

    const filteredProjects = activeCategory === "Tümü"
        ? projects
        : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    const filteredDefaultProjects = activeCategory === "Tümü"
        ? defaultProjects
        : defaultProjects.filter(p => p.category === activeCategory);

    const pageTitle = categoryTitles[activeCategory] || "PROJELER";

    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
                    alt="Projeler"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={activeCategory}
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">{pageTitle}</h1>
                            <p className="text-white/80 text-lg">Tamamlanan ve devam eden projelerimiz</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="layout-container">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <Filter size={20} className="text-text-secondary flex-shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat.key
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container">
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        {project.image_url ? (
                                            <Image
                                                src={project.image_url}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/10" />
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500" : "bg-yellow-500"} text-white`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-text-secondary text-sm mb-2">
                                            <MapPin size={14} />
                                            <span>{project.location}</span>
                                            <span className="text-gray-300">|</span>
                                            <span>{project.year}</span>
                                        </div>
                                        {project.description && (
                                            <p className="text-text-secondary text-sm line-clamp-2">{project.description}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredDefaultProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                {categories.find(c => c.key === project.category)?.label || project.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500" : "bg-yellow-500"} text-white`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                                            <MapPin size={14} />
                                            <span>{project.location}</span>
                                            <span className="text-gray-300">|</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {filteredProjects.length === 0 && filteredDefaultProjects.length === 0 && (
                        <div className="text-center py-20 text-text-secondary">
                            Bu kategoride henüz proje bulunmuyor.
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
