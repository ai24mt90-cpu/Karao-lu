"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

interface FeaturedProject {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    status: string;
    description?: string;
    image_url?: string; // Optional image url if we wanted to pass it in directly
}

interface HomeProjectsProps {
    projects: FeaturedProject[];
}

export default function HomeProjects({ projects }: HomeProjectsProps) {
    // Fallback if no projects in DB
    const displayProjects = projects.length > 0 ? projects.slice(0, 6) : [
        { id: "1", title: "VAN BEDESTEN ÇARŞISI VE ÇEVRE DÜZENLEME", year: "2024", status: "Tamamlandı", location: "VAN", description: "VAN YATIRIM İZLEME VE KOORDİNASYON BAŞKANLIĞI", category: "Kamu" },
        { id: "2", title: "ÇATAK 89 ADET KONUT İNŞAATI VE ALTYAPI", year: "2022", status: "Tamamlandı", location: "VAN", description: "T.C. ÇEVRE VE ŞEHİRCİLİK BAKANLIĞI TOKİ", category: "Konut" },
        { id: "3", title: "SAHİL BANDI 1. ETAP YAPIM", year: "2022", status: "Tamamlandı", location: "VAN", description: "İPEKYOLU BELEDİYESİ", category: "Altyapı" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="layout-container">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Kamu Referansları</h2>
                        <h3 className="text-4xl font-bold text-foreground">TAMAMLANAN PROJELER</h3>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <Link
                            href="/projeler/kategori/tamamlanan-kamu-projeleri"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
                            aria-label="Tüm projelerimizi inceleyin"
                        >
                            Tüm Projeler <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Kurumsal Proje Kartları */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project) => (
                        <div key={project.id} className="bg-surface-secondary border-l-4 border-primary p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <span className={`text-xs font-bold px-3 py-1 rounded ${project.status === 'Tamamlandı'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {project.status}
                                </span>
                                <span className="text-sm font-bold text-primary">{project.year}</span>
                            </div>
                            <h4 className="font-bold text-foreground text-lg mb-2 line-clamp-2">{project.title}</h4>
                            <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex items-center gap-2 text-xs text-text-secondary">
                                <MapPin size={14} />
                                <span>{project.location}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <Link
                        href="/projeler/kategori/tamamlanan-kamu-projeleri"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold"
                    >
                        Tüm Projeleri Gör <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
