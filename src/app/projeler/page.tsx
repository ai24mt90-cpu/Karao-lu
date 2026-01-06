"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { MapPin, Filter } from "lucide-react";

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

const categories = ["Tümü", "Kamu", "Konut", "Altyapı", "Sağlık", "Eğitim"];

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState("Tümü");
    const [loading, setLoading] = useState(true);

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

    const filteredProjects = activeCategory === "Tümü"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="flex flex-col bg-background">
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
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">PROJELER</h1>
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
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 text-foreground hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container">
                    {loading ? (
                        <div className="text-center py-20">
                            <p className="text-text-secondary">Yükleniyor...</p>
                        </div>
                    ) : filteredProjects.length > 0 ? (
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
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-text-secondary text-sm">Görsel Yok</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                                                }`}>
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
                                        </div>
                                        <p className="text-text-secondary text-sm">{project.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Merkez Hastanesi", category: "Sağlık", location: "Van", year: "2024", status: "Devam Ediyor", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600" },
                                { title: "Konut Projesi A", category: "Konut", location: "Van", year: "2023", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" },
                                { title: "Yol Yapım İşi", category: "Altyapı", location: "Van", year: "2023", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600" },
                                { title: "Okul Binası", category: "Eğitim", location: "İpekyolu", year: "2022", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600" },
                                { title: "Kamu Binası", category: "Kamu", location: "Van", year: "2022", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
                                { title: "Spor Kompleksi", category: "Kamu", location: "Van", year: "2021", status: "Tamamlandı", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" },
                            ].filter(p => activeCategory === "Tümü" || p.category === activeCategory).map((project, idx) => (
                                <motion.div
                                    key={project.title}
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
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                                                }`}>
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
                                        </div>
                                        <p className="text-text-secondary text-sm">{project.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
