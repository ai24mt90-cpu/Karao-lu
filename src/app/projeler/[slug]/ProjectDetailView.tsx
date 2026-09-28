"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, MapPin, Building2, User, Ruler } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import type { Project, ProjectImage } from "@/lib/content";

export default function ProjectDetailView({ project, images }: { project: Project; images: ProjectImage[] }) {
    const { t } = useTranslation();

    const coverImage = images.find(img => img.is_cover)?.image_url || images[0]?.image_url;
    const galleryImages = images.filter(img => img.image_url !== coverImage);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-surface-secondary">
            <div className="layout-container">
                {/* Navigation */}
                <Link
                    href="/projeler/kategori/tum-projeler"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{t("projectDetail.allProjects")}</span>
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
                                    {project.status === 'Tamamlandı' ? t("projectDetail.statusCompleted") : t("projectDetail.statusOngoing")}
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
                                <ReactMarkdown>{project.content || t("projectDetail.detailsSoon")}</ReactMarkdown>
                            </div>

                            {/* Gallery */}
                            {galleryImages.length > 0 && (
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-foreground mb-6">{t("projectDetail.projectImages")}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {galleryImages.map((img, idx) => (
                                            <div key={idx} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-sm">
                                                <Image
                                                    src={img.image_url}
                                                    alt={`${project.title} - ${t("projectDetail.imageAlt")} ${idx + 1}`}
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
                            <h3 className="text-lg font-bold text-foreground mb-6 pb-2 border-b border-gray-200">{t("projectDetail.projectInfo")}</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <User size={16} />
                                        <span>{t("projectDetail.client")}</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.client || "-"}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <Ruler size={16} />
                                        <span>{t("projectDetail.area")}</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.area || "-"}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <Calendar size={16} />
                                        <span>{t("projectDetail.year")}</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.year}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                                        <MapPin size={16} />
                                        <span>{t("projectDetail.location")}</span>
                                    </div>
                                    <p className="font-medium text-foreground">{project.location}</p>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-semibold text-primary mb-2">{t("projectDetail.contactUsTitle")}</h4>
                                <p className="text-sm text-text-secondary mb-4">{t("projectDetail.contactUsDesc")}</p>
                                <Link href="/iletisim" className="block w-full bg-primary text-white text-center py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                                    {t("projectDetail.contactBtn")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
