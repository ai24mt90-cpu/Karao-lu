"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Building2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toTitleCaseTR } from "@/lib/format";

export interface FeaturedProject {
    id: string;
    slug?: string | null;
    title: string;
    category: string;
    location: string;
    year: string;
    status: string;
    description?: string;
    image_url?: string;
}

interface HomeProjectsProps {
    projects: FeaturedProject[];
}

export default function HomeProjects({ projects }: HomeProjectsProps) {
    const { t } = useTranslation();

    // Veritabanında öne çıkan proje yoksa yedek kartlar
    const displayProjects: FeaturedProject[] =
        projects.length > 0
            ? projects.slice(0, 6)
            : [
                  { id: "1", title: t("home.projects.p1.title"), year: "2024", status: "Tamamlandı", location: "VAN", description: t("home.projects.p1.desc"), category: t("home.projects.p1.cat") },
                  { id: "2", title: t("home.projects.p2.title"), year: "2022", status: "Tamamlandı", location: "VAN", description: t("home.projects.p2.desc"), category: t("home.projects.p2.cat") },
                  { id: "3", title: t("home.projects.p3.title"), year: "2022", status: "Tamamlandı", location: "VAN", description: t("home.projects.p3.desc"), category: t("home.projects.p3.cat") },
              ];
    const hasRealProjects = projects.length > 0;

    return (
        <section className="py-24">
            <div className="layout-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <p className="eyebrow mb-5">{t("home.projectsV2.eyebrow")}</p>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">{t("home.projectsV2.title")}</h2>
                        <p className="text-text-secondary text-lg">{t("home.projectsV2.desc")}</p>
                    </div>
                    <Link
                        href="/projeler/kategori/tum-projeler"
                        className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-gold pb-1 self-start md:self-auto hover:gap-3 transition-all"
                    >
                        {t("home.projectsV2.all")} <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, i) => {
                        const completed = project.status === "Tamamlandı";
                        const href = hasRealProjects ? `/projeler/${project.slug || project.id}` : "/projeler/kategori/tum-projeler";
                        return (
                            <Link
                                key={project.id}
                                href={href}
                                className={`group relative block overflow-hidden bg-navy-900 ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                            >
                                <div className={`relative ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[560px]" : "aspect-[4/3]"}`}>
                                    {project.image_url ? (
                                        <Image
                                            src={project.image_url}
                                            alt={toTitleCaseTR(project.title)}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-950 flex items-center justify-center">
                                            <Building2 size={64} strokeWidth={1} className="text-white/15" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 ${completed ? "bg-white text-primary" : "bg-gold text-navy-950"}`}>
                                            {completed ? t("home.projects.status.completed") : t("home.projects.status.ongoing")}
                                        </span>
                                        {project.category && (
                                            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-navy-950/60 text-white backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        )}
                                    </div>
                                    <ArrowUpRight
                                        size={22}
                                        className="absolute top-4 right-4 text-white/0 group-hover:text-gold-light transition-colors"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <div className="flex items-center gap-3 text-xs text-white/65 mb-2">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={12} /> {toTitleCaseTR(project.location || "")}
                                            </span>
                                            <span className="h-3 w-px bg-white/30" />
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className={`font-display font-bold text-white leading-snug line-clamp-2 ${i === 0 ? "text-2xl lg:text-3xl" : "text-lg"}`}>
                                            {toTitleCaseTR(project.title)}
                                        </h3>
                                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                            {t("home.projectsV2.detail")} <ArrowRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
