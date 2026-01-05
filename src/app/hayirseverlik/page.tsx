"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, School, GraduationCap, Users, HandHelping, Trophy, Globe } from "lucide-react";
import { supabase } from "@/lib/supabase";

/**
 * SOCIAL RESPONSIBILITY PAGE
 * - Education Investments
 * - Support for Sports
 * - Social Contributions
 */

const impactMetrics = [
    { icon: <School size={28} />, value: "12", label: "Bağışlanan Okul", description: "Türkiye genelinde inşa edilen modern eğitim tesisleri." },
    { icon: <GraduationCap size={28} />, value: "500+", label: "Aktif Burs", description: "Üniversite öğrencilerine sağlanan aylık eğitim desteği." },
    { icon: <Trophy size={28} />, value: "Vanspor", label: "Spora Destek", description: "Sporun birleştirici gücüne inanarak Vanspor'un yanındayız." }
];

interface SocialProgram {
    id: string;
    title: string;
    category: string;
    location?: string;
    date?: string;
    image_url?: string;
    description?: string;
}

export default function SocialResponsibilityPage() {
    const [projects, setProjects] = useState<SocialProgram[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("social_responsibility")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching social programs:", error);
        } else {
            setProjects(data || []);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col py-20 bg-background">
            <div className="layout-container">
                {/* Header Section */}
                <section className="relative mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full mb-8"
                    >
                        <Heart size={14} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Kurumsal Sosyal Sorumluluk</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                        Sosyal <br /> <span className="text-white/40">Sorumluluk</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-text-secondary uppercase tracking-widest leading-loose font-medium">
                        Karaoğlu Universal Mühendislik olarak, kazancımızı toplum için kalıcı ve sürdürülebilir yatırımlara dönüştürüyoruz.
                    </p>
                </section>

                {/* Impact Metrics */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                        {impactMetrics.map((metric, idx) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col gap-6 p-12 text-center ${idx !== 2 ? "md:border-r border-white/10" : ""}`}
                            >
                                <div className="mx-auto text-foreground opacity-40">
                                    {metric.icon}
                                </div>
                                <div>
                                    <h3 className="text-5xl font-black mb-4 tracking-tighter">{metric.value}</h3>
                                    <p className="font-black text-foreground uppercase tracking-[0.3em] text-[10px] mb-6">{metric.label}</p>
                                    <p className="text-text-secondary text-xs font-medium leading-relaxed uppercase tracking-wider">{metric.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Project Grid */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col gap-8"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
                                    {project.image_url ? (
                                        <Image
                                            src={project.image_url}
                                            alt={project.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                            <p className="text-white/20 text-xs">NO IMAGE</p>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>
                                <div>
                                    <span className="text-white/40 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.category}</span>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-white/40 font-black text-[9px] tracking-[0.2em] uppercase mb-4 block">{project.location}</p>
                                    <p className="text-text-secondary font-medium leading-relaxed uppercase tracking-widest text-xs">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-32 border-y border-white/10 text-center">
                    <Globe className="mx-auto mb-10 size-12 opacity-40" />
                    <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-tight">Yarınlara <br /> Değer Katıyoruz</h2>
                    <p className="text-sm uppercase tracking-[0.4em] text-text-secondary max-w-2xl mx-auto mb-16 leading-loose">
                        Eğitim ve spor yatırımlarımızla, toplumun her kesimine ulaşarak geleceği birlikte inşa ediyoruz.
                    </p>
                </section>
            </div>
        </div>
    );
}
