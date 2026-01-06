"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Globe, Heart, School, Users } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    description?: string;
    image_url?: string;
}

const stats = [
    { icon: <School size={32} />, value: "12", label: "Bağışlanan Okul" },
    { icon: <Users size={32} />, value: "500+", label: "Eğitim Bursu" },
    { icon: <Heart size={32} />, value: "50+", label: "Sosyal Proje" },
    { icon: <Globe size={32} />, value: "15+", label: "İl Genelinde" },
];

export default function SocialResponsibilityPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from("social_projects")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setProjects(data);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
                    alt="Sosyal Sorumluluk"
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
                            <h1 className="text-5xl font-bold text-white mb-4">SOSYAL SORUMLULUK</h1>
                            <p className="text-white/80 text-lg">Toplumsal fayda odaklı projelerimiz</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-primary">
                <div className="layout-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center text-white">
                                <div className="mb-4 flex justify-center text-white/60">{stat.icon}</div>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/70 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Sosyal Sorumluluk</h2>
                            <h3 className="text-4xl font-bold text-foreground mb-6">TOPLUMA DEĞER KATIYORUZ</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Karaoğlu Universal Mühendislik olarak, sadece yapılar inşa etmiyoruz; aynı zamanda geleceğe
                                yatırım yapıyoruz. Eğitim, spor ve sosyal alanlarda gerçekleştirdiğimiz projelerle
                                toplumsal faydayı ön planda tutuyoruz.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Bugüne kadar onlarca okul, spor tesisi ve sosyal proje ile binlerce öğrenciye destek olduk.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&q=80&w=800"
                                alt="Sosyal Sorumluluk"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Projelerimiz</h2>
                        <h3 className="text-4xl font-bold text-foreground">SOSYAL PROJELER</h3>
                    </div>

                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                                    <div className="relative h-56 overflow-hidden">
                                        {project.image_url ? (
                                            <Image
                                                src={project.image_url}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                                <Heart className="text-primary/40" size={48} />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        {project.location && (
                                            <p className="text-primary text-sm mb-2">{project.location}</p>
                                        )}
                                        {project.description && (
                                            <p className="text-text-secondary text-sm line-clamp-2">{project.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Okul Bağışı", category: "Eğitim", location: "Van", description: "İhtiyaç sahiplerinin eğitimine destek", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600" },
                                { title: "Spor Tesisi", category: "Spor", location: "İpekyolu", description: "Gençlerin spor yapabilmesi için tesis", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" },
                                { title: "Burs Programı", category: "Eğitim", location: "Van", description: "Başarılı öğrencilere eğitim bursu", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" },
                            ].map((project) => (
                                <div key={project.title} className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
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
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-primary text-sm mb-2">{project.location}</p>
                                        <p className="text-text-secondary text-sm">{project.description}</p>
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
