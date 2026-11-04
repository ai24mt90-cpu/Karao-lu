"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    HardHat,
    Home as HomeIcon,
    Landmark,
    MessageCircle,
    Phone,
    Route,
    ShieldCheck,
    Trees,
} from "lucide-react";
import HomeProjects, { type FeaturedProject } from "./HomeProjects";
import { useTranslation } from "react-i18next";

const SERVICE_ICONS = [Building2, Route, HomeIcon, ShieldCheck, Trees, Landmark];

type Item = { title: string; desc: string };

export default function HomeContent({ featuredProjects }: { featuredProjects: FeaturedProject[] }) {
    const { t } = useTranslation();

    const stats = [
        { value: "64+", label: t("home.about.badges.projects") },
        { value: "10+", label: t("home.about.badges.experience") },
        { value: "6+", label: t("home.about.badges.cities") },
        { value: "%100", label: t("home.about.badges.delivery") },
    ];
    const partners = t("home.partners.items", { returnObjects: true }) as string[];
    const checks = t("home.aboutV2.checks", { returnObjects: true }) as string[];
    const services = t("home.servicesV2.items", { returnObjects: true }) as Item[];
    const steps = t("home.process.steps", { returnObjects: true }) as Item[];
    const aboutImage = featuredProjects.find((p) => p.image_url)?.image_url;

    return (
        <>
            {/* Rakamlar: hero'nun altına taşan şerit */}
            <section className="relative z-10 -mt-14">
                <div className="layout-container">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 bg-white shadow-[0_20px_50px_-20px_rgba(10,20,36,0.35)]">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className={`px-6 py-7 sm:px-8 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-gray-100`}
                            >
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="font-display text-3xl sm:text-4xl font-extrabold text-primary">{s.value}</dd>
                                <dd className="mt-1 text-sm text-text-secondary">{s.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Kurumlar */}
            <section className="py-14 border-b border-gray-100">
                <div className="layout-container">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary mb-7">
                        {t("home.partners.title")}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {partners.map((name) => (
                            <li key={name} className="flex items-center gap-2 text-sm font-semibold text-primary/80">
                                <Landmark size={16} className="text-gold shrink-0" />
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Hakkımızda */}
            <section className="py-24">
                <div className="layout-container grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-navy-900">
                            {aboutImage ? (
                                <Image src={aboutImage} alt={t("home.aboutV2.title")} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <HardHat size={96} className="text-white/20" />
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-8 right-6 sm:-right-6 bg-primary text-white px-8 py-6 shadow-xl">
                            <p className="font-display text-4xl font-extrabold text-gold-light">2014</p>
                            <p className="text-sm text-white/80">{t("home.aboutV2.founded", "Kuruluş yılı")}</p>
                        </div>
                        <div className="hidden sm:block absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-gold" />
                    </div>

                    <div>
                        <p className="eyebrow mb-5">{t("home.about.subtitle")}</p>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-tight mb-6">
                            {t("home.aboutV2.title")}
                        </h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: t("home.about.desc1") }} />
                            <p>{t("home.about.desc2")}</p>
                            <p dangerouslySetInnerHTML={{ __html: t("home.aboutBrand.content") }} className="text-sm" />
                        </div>
                        <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {checks.map((c) => (
                                <li key={c} className="flex items-start gap-2.5 text-[15px] text-foreground">
                                    <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                                    {c}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/hakkimizda"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 font-semibold transition-colors"
                            >
                                {t("nav.aboutUsCorp")} <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/projeler/kategori/tamamlanan-kamu-projeleri"
                                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3.5 font-semibold transition-colors"
                            >
                                {t("home.about.buttons.completed")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hizmetler */}
            <section className="py-24 bg-surface-secondary">
                <div className="layout-container">
                    <div className="max-w-2xl mb-14">
                        <p className="eyebrow mb-5">{t("home.servicesV2.eyebrow")}</p>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">{t("home.servicesV2.title")}</h2>
                        <p className="text-text-secondary text-lg">{t("home.servicesV2.desc")}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                        {services.map((s, i) => {
                            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
                            return (
                                <Link
                                    key={s.title}
                                    href={i === 5 ? "/ankara-teknik-koordinasyon" : "/sektorler"}
                                    className="group relative bg-white p-8 lg:p-10 hover:bg-navy-900 transition-colors"
                                >
                                    <span className="absolute top-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300" />
                                    <Icon size={34} strokeWidth={1.5} className="text-primary group-hover:text-gold-light transition-colors mb-6" />
                                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors">{s.title}</h3>
                                    <p className="text-text-secondary group-hover:text-white/70 transition-colors">{s.desc}</p>
                                    <ArrowRight size={18} className="mt-6 text-primary group-hover:text-gold-light group-hover:translate-x-1 transition-all" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projeler */}
            <HomeProjects projects={featuredProjects} />

            {/* Süreç */}
            <section className="py-24 bg-navy-950 text-white">
                <div className="layout-container">
                    <div className="max-w-2xl mb-14">
                        <p className="eyebrow eyebrow-light mb-5">{t("home.process.eyebrow")}</p>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t("home.process.title")}</h2>
                    </div>
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {steps.map((s, i) => (
                            <li key={s.title} className="relative border-t border-white/15 pt-8">
                                <span className="absolute -top-px left-0 h-0.5 w-12 bg-gold" />
                                <span className="font-display text-sm font-bold text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="font-display text-xl font-bold mt-3 mb-2">{s.title}</h3>
                                <p className="text-white/65 text-[15px] leading-relaxed">{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                    <blockquote className="mt-20 pt-12 border-t border-white/10 max-w-3xl">
                        <p className="font-display text-2xl sm:text-3xl font-semibold leading-snug text-white/90">{t("home.slogan.text")}</p>
                        <footer className="mt-4 text-sm text-gold-light">{t("home.slogan.author")}</footer>
                    </blockquote>
                </div>
            </section>

            {/* İletişim çağrısı */}
            <section className="py-20">
                <div className="layout-container">
                    <div className="relative overflow-hidden bg-primary text-white px-8 py-14 sm:px-14 lg:flex lg:items-center lg:justify-between gap-10">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/5" />
                        <div className="relative max-w-xl">
                            <p className="eyebrow eyebrow-light mb-4">{t("home.ctaV2.eyebrow")}</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">{t("home.ctaV2.title")}</h2>
                            <p className="text-white/75">{t("home.ctaV2.desc")}</p>
                        </div>
                        <div className="relative mt-8 lg:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
                            <a href="tel:+905326736556" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-950 px-6 py-4 font-semibold transition-colors">
                                <Phone size={18} /> {t("home.ctaV2.call")}
                            </a>
                            <a
                                href="https://wa.me/905326736556"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-4 font-semibold transition-colors"
                            >
                                <MessageCircle size={18} /> {t("home.ctaV2.whatsapp")}
                            </a>
                            <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white px-6 py-4 font-semibold transition-colors">
                                {t("home.ctaV2.form")} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
