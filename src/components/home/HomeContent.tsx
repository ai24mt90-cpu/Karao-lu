"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import HomeProjects from "./HomeProjects";
import { useTranslation } from "react-i18next";

export default function HomeContent({ featuredProjects }: { featuredProjects: any[] }) {
    const { t } = useTranslation();

    return (
        <>
            {/* Brand Section */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">{t("home.aboutBrand.title")}</h2>
                    <p
                        className="text-lg text-text-secondary leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t("home.aboutBrand.content") }}
                    />
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t("home.about.subtitle")}</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("home.about.title") }} />
                            <p className="text-text-secondary leading-relaxed mb-6">
                                <span dangerouslySetInnerHTML={{ __html: t("home.about.desc1") }} />
                                <br /><br />
                                {t("home.about.desc2")}
                                <br /><br />
                                {t("home.about.desc3")}
                            </p>

                            {/* Yetkinlik Badges */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <p className="text-2xl font-bold text-primary">64+</p>
                                    <p className="text-sm text-text-secondary">{t("home.about.badges.projects")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <p className="text-2xl font-bold text-primary">10+</p>
                                    <p className="text-sm text-text-secondary">{t("home.about.badges.experience")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <p className="text-2xl font-bold text-primary">6+</p>
                                    <p className="text-sm text-text-secondary">{t("home.about.badges.cities")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <p className="text-2xl font-bold text-primary">%100</p>
                                    <p className="text-sm text-text-secondary">{t("home.about.badges.delivery")}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/projeler/kategori/tamamlanan-kamu-projeleri"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
                                    aria-label="Tamamlanan kamu projelerimizi inceleyin"
                                >
                                    {t("home.about.buttons.completed")} <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/hakkimizda"
                                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
                                    aria-label="Teknik yeterlilik belgelerimiz"
                                >
                                    {t("home.about.buttons.qualifications")}
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {/* Hizmet Alanları */}
                            <div className="bg-primary text-white p-6">
                                <h4 className="font-bold text-lg mb-4">{t("home.servicesTitle")}</h4>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: t("home.services.public") }} />
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: t("home.services.infra") }} />
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: t("home.services.housing") }} />
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: t("home.services.reinforcement") }} />
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: t("home.services.landscaping") }} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kurumsal Slogan */}
            <section className="py-16 bg-primary">
                <div className="layout-container text-center">
                    <p className="text-xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
                        {t("home.slogan.text")}
                    </p>
                    <p className="text-white/70 mt-4">{t("home.slogan.author")}</p>
                </div>
            </section>

            {/* Projects Section - Client Component */}
            <HomeProjects projects={featuredProjects} />

            {/* Quick Links Section - For Better Internal Linking */}
            <section className="py-16 bg-gray-50">
                <div className="layout-container">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("home.quickLinks.title")}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Link href="/blog" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{t("home.quickLinks.blog.title")}</h3>
                            <p className="text-sm text-gray-600">{t("home.quickLinks.blog.desc")}</p>
                        </Link>
                        <Link href="/haberler" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{t("home.quickLinks.news.title")}</h3>
                            <p className="text-sm text-gray-600">{t("home.quickLinks.news.desc")}</p>
                        </Link>
                        <Link href="/projeler" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{t("home.quickLinks.projects.title")}</h3>
                            <p className="text-sm text-gray-600">{t("home.quickLinks.projects.desc")}</p>
                        </Link>
                        <Link href="/sss" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{t("home.quickLinks.faq.title")}</h3>
                            <p className="text-sm text-gray-600">{t("home.quickLinks.faq.desc")}</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="layout-container text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">{t("home.cta.title")}</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        {t("home.cta.desc")}
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
                        aria-label="İletişim sayfasına git"
                    >
                        {t("home.cta.button")} <ChevronRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
}
