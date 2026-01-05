"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

const categories = ["Hepsi", "Altyapı", "Sağlık", "Eğitim", "Konut", "Spor", "Endüstriyel"];

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

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Hepsi");
    const [searchQuery, setSearchQuery] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching projects:", error);
        } else {
            setProjects(data || []);
        }
        setLoading(false);
    };

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "Hepsi" || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col py-20 bg-black min-h-screen">
            <div className="layout-container">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Projelerimiz</h1>
                    <p className="text-sm uppercase tracking-[0.3em] text-text-secondary max-w-2xl mx-auto font-medium">
                        Evrensel mühendislik standartlarında inşa edilen kalıcı eserler.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`h-11 px-8 text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedCategory === cat
                                    ? "bg-primary text-white border-white"
                                    : "bg-transparent border-white/10 text-text-secondary hover:border-white/40 hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                        <input
                            type="text"
                            placeholder="Arama yapın..."
                            className="w-full h-11 pl-12 pr-4 bg-transparent border border-white/10 focus:border-white outline-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="group relative flex flex-col bg-surface border border-border-brand shadow-md overflow-hidden"
                            >
                                <div className="relative aspect-[21/9] overflow-hidden">
                                    {project.image_url ? (
                                        <Image
                                            src={project.image_url}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-50 group-hover:brightness-75"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                            <p className="text-white/20 text-xs">NO IMAGE</p>
                                        </div>
                                    )}
                                    <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/20">
                                        {project.status}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col md:flex-row gap-8 justify-between items-end">
                                    <div className="flex-1">
                                        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                                            {project.category}
                                        </div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-primary transition-colors">{project.title}</h3>

                                        <div className="flex flex-wrap gap-6 items-center">
                                            <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-widest">
                                                <MapPin size={14} className="opacity-40" /> {project.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-widest">
                                                <Calendar size={14} className="opacity-40" /> {project.year}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="size-16 flex items-center justify-center bg-primary text-white transition-all hover:scale-105">
                                        <ArrowUpRight size={24} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-32 text-center border border-dashed border-white/10">
                        <p className="text-text-secondary text-xs uppercase tracking-[0.3em] font-medium">Sonuç bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
