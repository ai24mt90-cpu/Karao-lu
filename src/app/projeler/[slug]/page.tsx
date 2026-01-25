"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, MapPin, Building2, User, Ruler } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export const dynamic = 'force-dynamic';

interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    location: string;
    year: string;
    status: string;
    client?: string;
    area?: string;
    content?: string;
}

interface ProjectImage {
    image_url: string;
    is_cover: boolean;
}

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [project, setProject] = useState<Project | null>(null);
    const [images, setImages] = useState<ProjectImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            if (!slug) return;

            try {
                // Fetch project details
                const { data: projectData, error: projectError } = await supabase
                    .from("projects")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (projectError || !projectData) {
                    console.error("Project fetch error:", projectError);
                    setProject(null);
                } else {
                    setProject(projectData);

                    // Fetch project images
                    const { data: imagesData } = await supabase
                        .from("project_images")
                        .select("image_url, is_cover")
                        .eq("project_id", projectData.id);

                    if (imagesData) {
                        setImages(imagesData);
                    }
                }
            } catch (e) {
                console.error("Error:", e);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Proje Bulunamadı</h1>
                <p className="text-gray-600 mb-8">Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
                <Link href="/projeler" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Projeler Listesine Dön
                </Link>
            </div>
        );
    }

    const coverImage = images.find(img => img.is_cover)?.image_url || images[0]?.image_url;
    const galleryImages = images.filter(img => img.image_url !== coverImage);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-surface-secondary">
            <div className="layout-container">
                {/* Navigation */}
                <Link
                    href="/projeler"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Tüm Projeler</span>
                </Link>

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">

                    {/* Hero Section */}
                    <div className="relative h-[400px] w-full">
                        {coverImage ? (
                            <Image
                                src={coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <Building2 size={64} className="text-gray-400" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
                                <span className="bg-primary px-3 py-1 rounded-full">{project.category}</span>
                                <span className={`px-3 py-1 rounded-full ${project.status === 'Tamamlandı' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">{project.title}</h1>
                            <div className="flex items-center gap-2 text-white/80">
                                <MapPin size={18} />
                                <span>{project.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Main Content */}
                        <div className="flex-1 p-8 md:p-12 border-r border-gray-100">
                            <div className="prose prose-lg prose-slate max-w-none">
                                <ReactMarkdown>{project.content || "Proje detayları yakında eklenecektir."}</ReactMarkdown>
                            </div>

                            {/* Gallery */}
                            {galleryImages.length > 0 && (
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-foreground mb-6">Proje Görselleri</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {galleryImages.map((img, idx) => (
                                            <div key={idx} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-sm">
                                                <Image
                                                    src={img.image_url}
                                                    alt={`${project.title} - Görsel ${idx + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="w-full lg:w-96 bg-gray-50 p-8 md:p-12">
                            <h3 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-gray-200">Proje Bilgileri</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <User size={16} />
                                        <span>İşveren / Kurum</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.client || "-"}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <Ruler size={16} />
                                        <span>Toplam Alan</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.area || "-"}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <Calendar size={16} />
                                        <span>Proje Yılı</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.year}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <MapPin size={16} />
                                        <span>Lokasyon</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.location}</p>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-semibold text-primary mb-2">Bize Ulaşın</h4>
                                <p className="text-sm text-text-secondary mb-4">Bu proje hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                                <Link href="/iletisim" className="block w-full bg-primary text-white text-center py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                                    İletişime Geç
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
